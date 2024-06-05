import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import ItemLoading from "../itemloading/ItemLoading";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db";

import "./itemListContainer.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();
  const [loading, setLoading] = useState(false);

  const getProducts = () => {
    setLoading(true);
    const productsRef = collection(db, "products");
    getDocs(productsRef).then((productsDb) => {
      const data = productsDb.docs.map((product) => {
        return { id: product.id, ...product.data() };
      });
      setLoading(false);
      setProducts(data);
    });
  };

  const getProductsByCategory = () => {
    setLoading(true);
    const productsRef = collection(db, "products");
    const q = query(productsRef, where("category", "==", idCategory));

    getDocs(q).then((productsDb) => {
      const data = productsDb.docs.map((product) => {
        return { id: product.id, ...product.data() };
      });
      setProducts(data);
      setLoading(false);
    });
  };

  useEffect(() => {
    if (idCategory) {
      getProductsByCategory();
    } else getProducts();
  }, [idCategory]);

  return (
    <div className="itemListContainer">
      <h1 className="tittlePages">
        {idCategory ? `${idCategory.toLocaleUpperCase()}` : "NOVEDADES"}
      </h1>
      {loading ? <ItemLoading /> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
