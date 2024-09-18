import { useState } from "react";
import mobileNavLogo from "../resources/images/navbar_logo.png";
import { Link } from "react-router-dom";

const MobileNav = ({ stateSwitch = () => {} }) => {
  const [displayNav, setDisplayNav] = useState(false);
  const onChangeDisplayNav = (e) => {
    e.preventDefault();
    let switchState = !displayNav;
    setDisplayNav(switchState);
    stateSwitch(!displayNav);
  };
  return (
    <div
      className={
        displayNav ? "mobileNav mobileNav_expand" : "mobileNav mobiliNav_hide"
      }
    >
      <div className="mobileNav_wrapper">
        <Link to={"/"} className="mobileNav_logo">
          <img
            src={mobileNavLogo}
            alt="navbar logo"
            className="mobileNav_logo_img"
          />
        </Link>
        <button
          onClick={(e) => onChangeDisplayNav(e)}
          className="mobileNav_switchBar"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      <div
        className={
          displayNav ? "mobileNav_navs mobileNav_navs_show" : "mobileNav_navs"
        }
      >
        <Link to={"/search"} className="mobileNav_navs_link color_purple">
          <div className="mobileNav_navs_link_ava ">
            <i className="fa-solid fa-person"></i>
          </div>
          <p className="mobileNav_navs_link_text">SHOE</p>
        </Link>
        <Link to={"/trend"} className="mobileNav_navs_link color_red">
          <div className="mobileNav_navs_link_ava">
            <i className="fa-solid fa-arrow-trend-up"></i>
          </div>
          <p className="mobileNav_navs_link_text">TREND</p>
        </Link>
        <Link to={"/athlete"} className="mobileNav_navs_link color_blue">
          <div className="mobileNav_navs_link_ava">
            <i className="fa-solid fa-basketball"></i>
          </div>
          <p className="mobileNav_navs_link_text">FEATURES</p>
        </Link>
        <Link to={"/user"} className="mobileNav_navs_link color_green">
          <div className="mobileNav_navs_link_ava">
            <i className="fa-solid fa-image-portrait"></i>
          </div>
          <p className="mobileNav_navs_link_text">ACCOUNT</p>
        </Link>
        <Link to={"/cart"} className="mobileNav_navs_link color_crimson">
          <div className="mobileNav_navs_link_ava">
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
          <p className="mobileNav_navs_link_text">CART (225)</p>
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;
