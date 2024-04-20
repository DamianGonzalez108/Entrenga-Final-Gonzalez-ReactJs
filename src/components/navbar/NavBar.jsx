import CartNav from "./CartNav"
import "./navbar.css"

const NavBar = () => {
  return (
    <div className="divNavBar" style={{display:"flex"}}>
        <div className="divLogo">
           <img src="/src/assets/images/logoNavBar.jpg" style={{width:"50px"}} />
        </div>
        <ul>
        <li>PRODUCTOS</li>
        <li>NOSOTROS</li>
        <li>CONTACTO</li>
        <CartNav/>
        </ul>
    </div>
  )
}

export default NavBar