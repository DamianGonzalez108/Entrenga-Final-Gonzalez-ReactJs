import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import ItemLoading from "../itemloading/ItemLoading";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db";

import "./itemDetailContainer.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { idProduct } = useParams();
  const [loading, setLoading] = useState(false);

  const getProduct = async () => {
    setLoading(true);
    const productRef = doc(db, "products", idProduct);
    try {
      getDoc(productRef).then((productDb) => {
        const data = { id: productDb.id, ...productDb.data() };
        setProduct(data);
        setLoading(false);
      });
    } catch (error) {
      return console.error(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, [idProduct]);

  return (
    <div className="itemDetailContainer">
      <h1 className="tittlePages">
        {product.name ? `${product.name.toLocaleUpperCase()}` : "NOVEDADES"}
      </h1>
      {loading ? <ItemLoading /> : <ItemDetail product={product} />}
    </div>
  );
};

export default ItemDetailContainer;
