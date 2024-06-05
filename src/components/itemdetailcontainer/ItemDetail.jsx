import ItemCount from "../itemcount/ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

import "./itemDetail.css";

const ItemDetail = ({ product }) => {
  const [hiddenItemCount, sethiddenItemCount] = useState(false);
  const { addToCart } = useContext(CartContext);
  const addProduct = (count) => {
    const productCart = { ...product, quantity: count };
    addToCart(productCart);
    sethiddenItemCount(true);
  };

  return (
    <div className="detail-card">
      <div className="div-img-detail">
        <img src={product.image} />
      </div>
      <div className="div-detail-product">
        <h2>{product.name}</h2>
        <p className="divDescriptionProduct">{product.description}</p>
        <p>Precio:${product.price}</p>
        {hiddenItemCount ? (<Link to="/cart">
        <button>Ir al carrito</button>
        </Link>
        ) : (
          <ItemCount stock={product.stock} addProduct={addProduct} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
