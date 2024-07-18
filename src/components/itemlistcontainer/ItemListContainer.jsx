import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import ItemLoading from "../itemloading/ItemLoading";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db";
import { Link } from "react-router-dom";

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

  const getProductsByCategory = async () => {
    setLoading(true);
    const productsRef = collection(db, "products");
    const q = query(productsRef, where("category", "==", idCategory));

    try {
      await getDocs(q).then((productsDb) => {
        const data = productsDb.docs.map((product) => {
          return { id: product.id, ...product.data() };
        });
        setProducts(data);
        setLoading(false);
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (idCategory) {
      getProductsByCategory();
    } else getProducts();
  }, [idCategory]);

  return (
    <div>
      <div className="itemListContainer"></div>
      <div className="divListContainer">
        <div className="divPortada">
          <img src="/callofduty-portada.jpg" className="imgPortada" />
        </div>
        <h1 className="tittlePages">
          {idCategory ? `${idCategory.toLocaleUpperCase()}` : "NOVEDADES"}
        </h1>
        <div className="divItemFilter">
          <div className="divFilter">
            <ul className="UllinksCategoty">
              <Link to="/category/deportes" className="link-category">
                DEPORTES
              </Link>
              <Link to="/category/shooter" className="link-category">
                SHOOTER
              </Link>
              <Link to="/category/suspense" className="link-category">
                SUSPENSE
              </Link>
            </ul>
          </div>
          <div className="divItems">
            {loading ? <ItemLoading /> : <ItemList products={products} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
