import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import getProducts from "../../data/data";

import "./itemListContainer.css";

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);
  const {idCategory} = useParams()
  
  useEffect(() => {
    getProducts()
      .then((respuesta) => {
        if(idCategory){
          const productFilter = respuesta.filter((productRes) => productRes.category === idCategory )
          setProducts(productFilter)
        }else(
          setProducts(respuesta)
        )
        ;
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        console.log("finalizo la promesa");
      });
  }, [idCategory]);

  return (
    <div className="saludo">
      <p>{saludo}</p>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
