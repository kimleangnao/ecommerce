const UserProductDisplay = ({
  removeProductFromWishListAfterAddedToCart,
  addToCart,
  value,
  displayAddToCart = true,
}) => {
  const onChangeAddToCart = (
    productID,
    productColor,
    productGender,
    productSize,
  ) => {
    addToCart(productID, productColor, productGender, productSize);
    console.log(productID, productColor, productGender, productSize);
    removeProductFromWishListAfterAddedToCart(value.wishListID);
  };

  return (
    <div className="userWishlist_wrapper_product">
      <img
        src={value.productImage}
        alt="product"
        className="userWishlist_wrapper_product_picture"
      />
      <div className="userWishlist_wrapper_product_details">
        <p className="userWishlist_wrapper_product_details_name">
          {value.productName}
        </p>
        <p className="userWishlist_wrapper_product_details_type">
          {value.productType}
        </p>
        <p className="userWishlist_wrapper_product_details_size">
          Size: {value.productSize}
        </p>
        <p className="userWishlist_wrapper_product_details_colors">
          Colors: {value.productColor}
        </p>
        <p className="userWishlist_wrapper_product_details_prize">
          {value.productPrice}$
        </p>
        {displayAddToCart ? (
          <p className="userWishlist_wrapper_product_details_stock">In stock</p>
        ) : (
          ""
        )}
      </div>
      {displayAddToCart ? (
        <button
          onClick={() =>
            onChangeAddToCart(
              value.productID,
              value.productColor,
              value.productGender,
              value.productSize,
            )
          }
          className="userWishlist_wrapper_product_btn"
        >
          <i className="fa-solid fa-cart-plus"></i>
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default UserProductDisplay;
