import { Link } from "react-router-dom";
import NavbarExtend from "./NavbarExtend";
import MobileNav from "./MobileNav";
import { useState } from "react";

const User = ({ shoppingCart }) => {
  const [switchStateBody, setSwitchStateBody] = useState(false);
  const stateSwitch = (switchState) => {
    if (switchState) {
      setSwitchStateBody(true);
    } else {
      setSwitchStateBody(false);
    }
  };

  return (
    <div className={switchStateBody ? "user user_hidden" : "user"}>
      <NavbarExtend
        shoppingCart={shoppingCart}
        colorText="#141414"
        backgroundColor="rgba(170, 225, 237, 0.19)"
      />
      <MobileNav stateSwitch={stateSwitch} />
      <p className="user_titleMenu">MENU</p>
      <div className="user_container">
        <Link to="/user/account" className="user_container_box">
          <div className="user_container_box_circle">
            <i className="fa-solid fa-user-gear icon-size"></i>
          </div>
        </Link>
        <Link to="/user/order" className="user_container_box">
          <div className="user_container_box_circle">
            <i className="fa-solid fa-box-open icon-size"></i>
          </div>
        </Link>
        <Link to="/user/wishlist" className="user_container_box">
          <div className="user_container_box_circle">
            <i className="fa-solid fa-list-ol icon-size"></i>
          </div>
        </Link>
        <Link to="/user/payment" className="user_container_box">
          <div className="user_container_box_circle">
            <i className="fa-brands fa-cc-visa icon-size"></i>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default User;
