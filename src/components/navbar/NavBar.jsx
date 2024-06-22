import CartNav from "./CartNav"
import {Link} from "react-router-dom"
import { MdOutlineVideogameAsset } from "react-icons/md";


import "./navbar.css"

const NavBar = () => {
  return (
    <div className="divNavBar">
        <Link to="/" className="divLogo">
           <MdOutlineVideogameAsset size={40} className="img-logo"/>
        </Link>
        <ul>
        <Link to="/category/deportes" className="link-category">DEPORTES</Link>
        <Link to="/category/shooter" className="link-category">SHOOTER</Link>
        <Link to="/category/suspense" className="link-category">SUSPENSE</Link>
        </ul>
        <CartNav/>
    </div>
  )
}

export default NavBar