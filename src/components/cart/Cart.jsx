import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { GoTrash } from "react-icons/go";

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
    <div>
      <div className="divRoutes">
        <Link to="/" className="routeHome">Inicio</Link>
        {`>`}
        <p className="routeCart">Carrito</p>
      </div>
      <div className="divContainerCart">
        <div className="cardCartProduct">
          {cart.map((productCart) => (
            <div className="divProductCart" key={productCart.id}>
              <div className="divImgCart">
                <img src={productCart.image} className="imgProductCart" />
              </div>
              <div className="divCardDescription">
                <div className="divName">
                  <h3>{productCart.name}</h3>
                </div>
                <p>Cantidad:{productCart.quantity}</p>
              </div>
              <button
                className="divButtonCart"
                onClick={() => deleteProduct(productCart.id)}
              >
                <GoTrash size={20} />
              </button>
            </div>
          ))}
        </div>
        <div className="divTotal">
          <div>
            <p>Total estimado</p>
            <p>${totalPrice()}</p>
          </div>
          <p>
            Los impuestos de venta se calcularan durante el pago (si es
            aplicable)
          </p>
          <div>
            <Link to="/checkout">
              <button className="buttonBuild">Finalizar compra</button>
            </Link>
            <button onClick={deleteAll} className="buttonClear">
              Vaciar carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
