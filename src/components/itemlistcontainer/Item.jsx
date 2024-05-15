import { Link } from "react-router-dom";

import "./item.css"

const Item = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} />
      <p>{product.name}</p>
      <Link to={"/detail/" + product.id}><button className="button-card">VER DETALLES</button></Link>
    </div>
  );
};

export default Item;
