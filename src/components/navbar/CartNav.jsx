import { IoCartOutline } from "react-icons/io5";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

import "./cartNav.css";

const CartNav = () => {
  const { quantityTotal } = useContext(CartContext);

  let quantity = quantityTotal();

  return (
    <Link to="/cart" className="cart-navbar">
      <IoCartOutline size={30} />
      <p className="quantityCart">{quantity >= 1 && quantity}</p>
    </Link>
  );
};

export default CartNav;
