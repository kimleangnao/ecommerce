import NavbarExtend from "./NavbarExtend";

import picture from "../resources/images/similiar_product_2.png";
import UserProductDisplay from "./components/UserProductDisplay";
import { useState } from "react";
import MobileNav from "./MobileNav";

const UserWishlist = ({
  removeProductFromWishListAfterAddedToCart = null,
  addToCart,
  removeWishList,
  wishList,
  shoppingCart,
}) => {
  //make call to get a bunch of product inside the wishlist
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
        switchStateBody ? "userWishlist userWishlist_hidden" : "userWishlist"
      }
    >
      <NavbarExtend
        shoppingCart={shoppingCart}
        colorText="#141414"
        backgroundColor="rgba(170, 225, 237, 0.19)"
      />
      <MobileNav stateSwitch={stateSwitch} />
      <div className="userWishlist_wrapper">
        <h2>WISH LIST({wishList.length})</h2>
        {wishList.map((v, i) => (
          <UserProductDisplay
            removeProductFromWishListAfterAddedToCart={
              removeProductFromWishListAfterAddedToCart
            }
            key={i}
            value={v}
            addToCart={addToCart}
            picture={picture}
          />
        ))}

        <div className="userWishlist_wrapper_filler"></div>
        <button
          onClick={() => removeWishList()}
          className="userWishlist_wrapper_btn"
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default UserWishlist;
