import HashLoader from "react-spinners/HashLoader";

import "./itemLoading.css";

const ItemLoading = () => {
  return (
    <div className="itemLoading">
      <div>
        <HashLoader className="iconLoading" color="#1982cf" size={70} />
      </div>
      <div>
        <h2 className="titleLoading">Cargando...</h2>
      </div>
    </div>
  );
};

export default ItemLoading;
