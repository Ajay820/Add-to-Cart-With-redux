import { Link, NavLink } from "react-router-dom"; 
import Logo from "../assets/logo.png"
import "./Header.css";
import {useSelector} from "react-redux"

export const Header = () => {

  const products = useSelector((state)=>(state.Item.cartList))

  const ans = products.length

  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="Shopmate Logo" />
        <span>Shopping Cart</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>Home</NavLink>
        <NavLink to="/cart" className="link">Cart</NavLink>
      </nav>
      <Link to="/cart" className="items">
        <span>Cart: {ans}</span>
      </Link>
    </header>
  )
}
