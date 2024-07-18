import CartNav from "./CartNav"
import {Link} from "react-router-dom"
import { MdOutlineVideogameAsset } from "react-icons/md";


import "./navbar.css"

const NavBar = () => {
  return (
    <div className="divNavBar">
        <Link to="/" className="divLogo">
           <MdOutlineVideogameAsset size={40} className="img-logo"/>
           <p>E-Games</p>
        </Link>
        <CartNav/>
    </div>
  )
}

export default NavBar