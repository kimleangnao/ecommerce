
import { Link } from "react-router-dom";
import logo from "../resources/images/logo.png"

const NavbarExtend = ({shoppingCart}) => {
    return(
        <div className="navbarExtend">
            <Link to="/" className="navbarExtend_icon">
                <img src={logo} alt="logo" className="navbarExtend_icon_img" />
            </Link>
            <div className="navbarExtend_menu">
                <Link to="/search?f=men" className="navbarExtend_menu_item">
                    Men
                </Link>
                <Link to="/search?f=women" className="navbarExtend_menu_item">
                    Women 
                </Link>
                <Link to="/trend" className="navbarExtend_menu_item">
                    Trend
                </Link>
                <Link to="/athlete" className="navbarExtend_menu_item">
                    Athletes
                </Link>
            </div>
            <div className="navbarExtend_userInfo">
                <button className="navbarExtend_userInfo_user">
                    <i className="fa-solid fa-user"></i>
                </button>
                <Link to="/cart" className="navbarExtend_userInfo_cart">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <div className="navbarExtend_userInfo_cart_number">{shoppingCart.length}</div>
                </Link>
            </div>
        </div>
    )
}

export default NavbarExtend;