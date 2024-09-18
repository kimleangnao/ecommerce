import { Link } from "react-router-dom";
import ItemInCart from "./components/ItemInCart";
import PriceInCart from "./components/PriceInCart";
import NavbarExtend from "./NavbarExtend";
import { useState } from "react";
import MobileNav from "./MobileNav";

const Cart = ({ shoppingCart }) => {
  const [switchStateBody, setSwitchStateBody] = useState(false);

  const stateSwitch = (switchState) => {
    if (switchState) {
      setSwitchStateBody(true);
    } else {
      setSwitchStateBody(false);
    }
  };

  return (
    <div className={switchStateBody ? "cart cart_hidden" : "cart"}>
      <NavbarExtend
        shoppingCart={shoppingCart}
        colorText="#141414"
        backgroundColor="rgba(170, 225, 237, 0.19)"
      />
      <MobileNav stateSwitch={stateSwitch} />
      <div className="cart_wrapper">
        <div className="cart_wrapper_products">
          <div className="cart_wrapper_products_title">
            Your Cart ({shoppingCart.length})
          </div>
          {shoppingCart.map((item, index) => (
            <ItemInCart key={index} item={item} />
          ))}
        </div>
        <Link to="/checkout" className="cart_wrapper_price_btnCheckout-mobile">
          Checkout
        </Link>
        <div className="cart_wrapper_price">
          <div className="cart_wrapper_price_top">
            <div className="cart_wrapper_price_title">
              <p>Products</p>
              <p>Price</p>
            </div>
            {shoppingCart.map((item, index) => (
              <PriceInCart key={index} item={item} />
            ))}
          </div>

          <Link to="/checkout" className="cart_wrapper_price_btnCheckout">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
