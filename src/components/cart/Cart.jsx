import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

import "./cart.css";

const Cart = () => {
  const { cart, deleteAll, deleteProduct, totalPrice } =
    useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="divContainerEmptyCart">
        <div className="divEmptyCart">
          <h3>Tu carrito esta vacio</h3>
          <Link to="/" className="linkSeeProducts">
            <button className="buttonCart">Ver Productos</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="divContainerCart">
      {cart.map((productCart) => (
        <div key={productCart.id}>
          <div>
            <img src={productCart.image} />
          </div>
          <div>
            <h3>{productCart.name}</h3>
            <p>{productCart.description}</p>
            <p>Cantidad:{productCart.quantity}</p>
            <button onClick={() => deleteProduct(productCart.id)}>X</button>
          </div>
        </div>
      ))}
      <div>
        <h3>Total:${totalPrice()}</h3>
        <Link to="/checkout">
          <button>Continuar con mi compra</button>
        </Link>
        <button onClick={deleteAll}>Vaciar carrito</button>
      </div>
    </div>
  );
};

export default Cart;
