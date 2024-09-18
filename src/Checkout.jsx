import { useNavigate } from "react-router-dom";
import ItemInCart from "./components/ItemInCart";
import PriceInCart from "./components/PriceInCart";
import NavbarExtend from "./NavbarExtend";
import MobileNav from "./MobileNav";
import { useState } from "react";

const Checkout = ({ fillInOrder, shoppingCart, setShoppingCart }) => {
  const navigate = useNavigate();

  const getPrice = () => {
    if (shoppingCart.length > 0) {
      let tax = 4.99;
      let shipping = 5;
      let sumPrice = shoppingCart.reduce(
        (acc, cval) => acc + cval.productPrice,
        0,
      );
      sumPrice = sumPrice + tax + shipping;
      return sumPrice;
    } else {
      return 0;
    }
  };

  const onPurchase = () => {
    //normally we would send this information to back end and they will do stuff with it
    if (shoppingCart.length > 0) {
      alert("Order Placed!");
      setShoppingCart([]);
      let todayDate = Date.now();
      fillInOrder(shoppingCart, getPrice(), todayDate);
      navigate("/search");
    } else {
      alert("No item, add some to cart.");
      navigate("/search");
    }
  };

  //console.log("shoppingCart", shoppingCart);
  const [switchStateBody, setSwitchStateBody] = useState(false);

  const stateSwitch = (switchState) => {
    if (switchState) {
      setSwitchStateBody(true);
    } else {
      setSwitchStateBody(false);
    }
  };

  return (
    <div className={switchStateBody ? "checkout checkout_hidden" : "checkout"}>
      <NavbarExtend
        shoppingCart={shoppingCart}
        colorText="#141414"
        backgroundColor="rgba(170, 225, 237, 0.19)"
      />
      <MobileNav stateSwitch={stateSwitch} />
      <h2>CHECKOUT</h2>
      <div className="checkout_wrapper">
        <div className="checkout_wrapper_info">
          <div className="checkout_wrapper_info_address">
            <div className="checkout_wrapper_info_address_title">Address</div>
            <div className="checkout_wrapper_info_address_number">
              4505 Mill Street San Francisco CA 94107
            </div>
          </div>

          <div className="checkout_wrapper_info_payment">
            <div className="checkout_wrapper_info_payment_title">Card</div>
            <div className="userPayment_wrapper_card">
              <div className="userPayment_wrapper_card_detail">
                <p className="userPayment_wrapper_card_detail_bankName">
                  American Express
                </p>
                <p className="userPayment_wrapper_card_detail_accountNumber">
                  4444 4444 4444 4444
                </p>
                <p className="userPayment_wrapper_card_detail_dateAndSecCode">
                  <span>Expiring Date : 4/27</span> <span>SEC: 2222</span>
                </p>
                <p className="userPayment_wrapper_card_detail_name">
                  Brian Neo
                </p>
              </div>
              <div className="userPayment_wrapper_card_btns">
                <div className="userPayment_wrapper_card_btns_group">
                  <button className="userPayment_wrapper_card_btns_group_btn userPayment_wrapper_card_btns_group_btn_active">
                    <i className="fa-solid fa-check"></i>
                  </button>
                  <button className="userPayment_wrapper_card_btns_group_btn userPayment_wrapper_card_btns_group_btn_delete">
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
                <em className="userPayment_wrapper_card_btns_text">VISA</em>
              </div>
            </div>
          </div>

          <div className="checkout_wrapper_info_products">
            <div className="checkout_wrapper_info_products_bundle_title">
              PRODUCTS
            </div>
            {shoppingCart.map((item, index) => (
              <ItemInCart key={index} item={item} />
            ))}
          </div>
        </div>
        <div className="checkout_wrapper_details">
          <div className="checkout_wrapper_details_summary">
            <div className="checkout_wrapper_details_summary_title">
              <div className="checkout_wrapper_details_summary_title_text">
                Products
              </div>
              <div className="checkout_wrapper_details_summary_title_price">
                Price
              </div>
            </div>
            {shoppingCart.map((item, index) => (
              <PriceInCart key={index} item={item} />
            ))}

            {shoppingCart.length > 0 ? (
              <div className="checkout_wrapper_details_summary_additional">
                <div className="checkout_wrapper_details_summary_additional_text">
                  Shipping
                </div>
                <div className="checkout_wrapper_details_summary_additional_price">
                  $ 5.00
                </div>
              </div>
            ) : (
              ""
            )}
            {shoppingCart.length > 0 ? (
              <div className="checkout_wrapper_details_summary_additional">
                <div className="checkout_wrapper_details_summary_additional_text">
                  Tax
                </div>
                <div className="checkout_wrapper_details_summary_additional_price">
                  $ 4.99
                </div>
              </div>
            ) : (
              ""
            )}

            <div className="checkout_wrapper_details_summary_total">
              <div className="checkout_wrapper_details_summary_total_text">
                TOTAL
              </div>
              <div className="checkout_wrapper_details_summary_total_price">
                $ {getPrice()}
              </div>
            </div>

            <button
              onClick={() => onPurchase()}
              className="checkout_wrapper_details_summary_placeOrder"
            >
              <div className="checkout_wrapper_details_summary_placeOrder_price">
                $ {getPrice()}
              </div>
              <div className="checkout_wrapper_details_summary_placeOrder_text">
                Place Order
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
