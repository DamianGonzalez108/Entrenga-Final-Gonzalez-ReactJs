import "./itemDetail.css";

const ItemDetail = ({ product }) => {
  return (
    <div className="detail-card">
      <div className="div-img-detail">
        <img src={product.image} />
      </div>
      <div className="div-detail-product">
        <p>{product.name}</p>
        <p>{product.description}</p>
        <p>Precio:${product.price}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
