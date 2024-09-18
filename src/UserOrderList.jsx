import { useState } from "react";
import UserProductDisplay from "./components/UserProductDisplay";
import MobileNav from "./MobileNav";
import NavbarExtend from "./NavbarExtend";

//import picture from "../resources/images/similiar_product_2.png";

const UserOrderList = ({ orderedList, shoppingCart }) => {
  const getDeliveryDate = (deliveryDateInMs) => {
    let deliveryDate = new Date(deliveryDateInMs);
    let month = deliveryDate.toLocaleString("default", { month: "long" });
    let day = deliveryDate.getDate();
    let year = deliveryDate.getFullYear();

    return month + " / " + day + " / " + year;
  };

  const [switchStateBody, setSwitchStateBody] = useState(false);

  const stateSwitch = (switchState) => {
    if (switchState) {
      setSwitchStateBody(true);
    } else {
      setSwitchStateBody(false);
    }
  };

  return (
    <div
      className={
        switchStateBody ? "userOrderList userOrderList_hidden" : "userOrderList"
      }
    >
      <NavbarExtend
        shoppingCart={shoppingCart}
        colorText="#141414"
        backgroundColor="rgba(170, 225, 237, 0.19)"
      />

      <MobileNav stateSwitch={stateSwitch} />
      <div className="userOrderList_wrapper">
        <h2>ORDER</h2>
        {orderedList.length > 0 ? (
          orderedList.map((group, index) => (
            <div key={index} className="userOrderList_wrapper_order">
              <h3>Order on : {getDeliveryDate(orderedList[0].todayDate)}</h3>
              <h4 className="userOrderList_wrapper_order_date userOrderList_wrapper_order_deliveryDate">
                Delivery date : {getDeliveryDate(orderedList[0].deliveryDate)}
              </h4>
              <p className="userOrderList_wrapper_order_price">
                Total : {group.totalPrice}$
              </p>
              {group.productInfo.length > 0
                ? group.productInfo.map((order, i) => (
                    <UserProductDisplay
                      key={i}
                      value={order}
                      displayAddToCart={false}
                    />
                  ))
                : ""}
            </div>
          ))
        ) : (
          <p>EMPTY</p>
        )}
      </div>
    </div>
  );
};

export default UserOrderList;
