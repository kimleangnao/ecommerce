import { Link } from "react-router-dom";
import logo from "../resources/images/logo.png";

const NavbarExtend = ({
  currentPage,
  shoppingCart,
  colorText,
  backgroundColor,
}) => {
  return (
    <div className="navbarExtend">
      <div className="navbarExtend_misc">
        <Link to="/" className="navbarExtend_icon">
          <img src={logo} alt="logo" className="navbarExtend_icon_img" />
        </Link>
        <div className="navbarExtend_userInfo">
          <div
            className="navbarExtend_userInfo_userHello"
            style={{ backgroundColor: `${backgroundColor}` }}
          >
            <Link
              to="/user"
              className="navbarExtend_userInfo_userHello_link"
              style={{
                color: `${colorText}`,
              }}
            >
              Hello, Vende
            </Link>
          </div>

          <div
            className="navbarExtend_userInfo_shoppingCart"
            style={{ backgroundColor: `${backgroundColor}` }}
          >
            <Link
              to="/cart"
              className="navbarExtend_userInfo_shoppingCart_link"
            >
              <i
                className="fa-solid fa-cart-shopping"
                style={{
                  color: `${colorText}`,
                }}
              ></i>
              <div
                className="navbarExtend_userInfo_cart_number"
                style={{
                  color: `red`,
                }}
              >
                {shoppingCart.length}
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="navbarExtend_links">
        <div className="navbarExtend_menu">
          <Link
            to="/search"
            className="navbarExtend_menu_item"
            style={{
              color: `${currentPage == "shoe" ? "#B05A5A" : colorText}`,
              filter: `${colorText == "#141414" ? `none` : `drop-shadow(0px 2px 2px #111111)`}`,
            }}
          >
            Shoes
          </Link>
          <Link
            to="/trend"
            className="navbarExtend_menu_item"
            style={{
              color: `${currentPage == "trend" ? "#B05A5A" : colorText}`,
              filter: `${colorText == "#141414" ? `none` : `drop-shadow(0px 2px 2px #111111)`}`,
            }}
          >
            Trend
          </Link>
          <Link
            to="/athlete"
            className="navbarExtend_menu_item"
            style={{
              color: `${currentPage == "athlete" ? "#B05A5A" : colorText}`,
              filter: `${colorText == "#141414" ? `none` : `drop-shadow(0px 2px 2px #111111)`}`,
            }}
          >
            Athletes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarExtend;
