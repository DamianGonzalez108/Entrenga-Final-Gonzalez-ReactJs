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
        <div className="divProductCart" key={productCart.id}>
          <div className="divImgCart">
            <img src={productCart.image} className="imgProductCart" />
          </div>
          <div className="divCardDescription">
            <div className="divNameButtonX">
              <h3>{productCart.name}</h3>
              <button className="buttonX" onClick={() => deleteProduct(productCart.id)}>X</button>
            </div>

            <p>{productCart.description}</p>
            <p>Cantidad:{productCart.quantity}</p>
          </div>
        </div>
      ))}
      <div className="divTotal">
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
