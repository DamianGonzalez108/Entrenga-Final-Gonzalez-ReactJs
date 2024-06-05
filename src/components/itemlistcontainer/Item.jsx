import { Link } from "react-router-dom";

import "./item.css";

const Item = ({ product }) => {
  return (
    <Link to={"/detail/" + product.id} className="linkItem">
      <div className="card">
        <img src={product.image} />
        <p>{product.name}</p>

        <button className="button-card">VER DETALLES</button>
      </div>
    </Link>
  );
};

export default Item;
