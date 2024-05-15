import CartNav from "./CartNav"
import {Link} from "react-router-dom"
import "./navbar.css"

const NavBar = () => {
  return (
    <div className="divNavBar">
        <Link to="/" className="divLogo">
           <img src="/src/assets/images/logoNavBar.jpg" className="img-logo"/>
        </Link>
        <ul>
        <Link to="/category/deportes">DEPORTES</Link>
        <Link to="/category/shooter">SHOOTER</Link>
        <Link to="/category/suspense">SUSPENSE</Link>
        </ul>
        <CartNav/>
    </div>
  )
}

export default NavBar