import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, deleteAll, deleteProduct, totalPrice } =
    useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div>
        <h1>el carrito esta vacio</h1>
        <Link to="/">Ver Productos</Link>
      </div>
    );
  }

  return (
    <div>
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
