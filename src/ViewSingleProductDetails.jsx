//import { useState } from "react";
import Comment from "./components/Comment";

//getting static image
import profilePicture from "../resources/images/userprofile.png";
import productSimiliar_2 from "../resources/images/similiar_product_2.png";
import productReviewHighlightImage from "../resources/images/similiar_product_2.png";

import NewComment from "./components/NewComment";
import CommentHighlight from "./components/CommentHighlight";
import { useEffect, useState } from "react";

const ViewSingleProductDetails = ({
  onChangeToWishList,
  //moreProducts,
  //user,
  product,
  onChangeSelectColor,
  onChangeSelectGender,
  onChangeSelectSize,
  //sortingComments,
  onChangeAddToCart,
}) => {
  //const [activeOptionSort, setActiveOptionSort] = useState("TOP");
  //const [detailReviews, setDetailReviews] = useState("detail");
  const [displayImageMobile, setDisplayImageMobile] = useState();
  const [displayImageMobileNumber, setDisplayImageMobileNumber] = useState(0);

  const returnImageOfActiveProduct = () => {
    console.log("product:", product);
    let activeImage = product.productColors.filter(
      (color) => color.selected == true,
    );

    return activeImage[0];
  };

  const returnProductSize = () => {
    let activeSize = product.productSizes.filter(
      (size) => size.selected == true,
    );
    return activeSize[0];
  };

  const returnGenderType = () => {
    let activeGender = product.productGender.filter(
      (gender) => gender.selected == true,
    );

    return activeGender[0];
  };

  // const onHandleOptionChange = (e) => {
  //   setActiveOptionSort(e.target.value);
  //   sortingComments(e.target.value);
  // };

  //console.log(product);

  const onChangeLeftBtn = () => {
    console.log("Left");
    let activeImage = product.productColors.filter(
      (color) => color.selected == true,
    );
    let currentMaxLength = activeImage[0].productImageMore.length - 1;
    if (displayImageMobileNumber == 0) {
      setDisplayImageMobileNumber(currentMaxLength);
    } else {
      setDisplayImageMobileNumber((prev) => --prev);
    }
  };

  const onChangeRightBtn = () => {
    console.log("Right");
    let activeImage = product.productColors.filter(
      (color) => color.selected == true,
    );
    let currentMaxLength = activeImage[0].productImageMore.length - 1;
    if (displayImageMobileNumber == currentMaxLength) {
      setDisplayImageMobileNumber(0);
    } else {
      setDisplayImageMobileNumber((prev) => ++prev);
    }
  };

  useEffect(() => {
    let activeImage = product.productColors.filter(
      (color) => color.selected == true,
    );
    console.log(
      "activeImage:",
      activeImage[0].productImageMore[displayImageMobileNumber],
    );

    let currentActiveDisplayImageForMobile =
      activeImage[0].productImageMore[displayImageMobileNumber];
    setDisplayImageMobile(currentActiveDisplayImageForMobile);
  }, [product, displayImageMobileNumber]);

  return (
    <div className="">
      <div className="viewSingleProduct_wrap">
        <div className="viewSingleProduct_wrap_images">
          <div className="viewSingleProduct_wrap_images_smallImage">
            {returnImageOfActiveProduct().productImageMore.map(
              (image, index) => (
                <div
                  key={index}
                  className="viewSingleProduct_wrap_images_smallImage_displayImage"
                >
                  <img
                    src={image}
                    alt="shoe"
                    className="viewSingleProduct_wrap_images_smallImage_displayImage_image"
                  />
                </div>
              ),
            )}
          </div>
          <div className="viewSingleProduct_wrap_images_bigImage">
            <div className="viewSingleProduct_wrap_images_bigImage_imageScreen">
              <img
                src={displayImageMobile}
                alt=""
                className="viewSingleProduct_wrap_images_bigImage_imageScreen_image"
              />
              <div className="viewSingleProduct_wrap_images_bigImage_imageScreen_splitControl">
                <button
                  onClick={() => onChangeLeftBtn()}
                  className="viewSingleProduct_wrap_images_bigImage_imageScreen_splitControl_leftBtn"
                ></button>
                <button
                  onClick={() => onChangeRightBtn()}
                  className="viewSingleProduct_wrap_images_bigImage_imageScreen_splitControl_rightBtn"
                ></button>
              </div>
              <div className="viewSingleProduct_wrap_images_bigImage_imageScreen_btns">
                {returnImageOfActiveProduct().productImageMore.map(
                  (_, index) => (
                    <button
                      key={index}
                      className={
                        displayImageMobileNumber == index
                          ? "viewSingleProduct_wrap_images_bigImage_imageScreen_btns_circle viewSingleProduct_wrap_images_bigImage_imageScreen_btns_circle_active"
                          : "viewSingleProduct_wrap_images_bigImage_imageScreen_btns_circle"
                      }
                    ></button>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="viewSingleProduct_wrap_details">
          <p className="viewSingleProduct_wrap_details_name">
            {product.productName}
          </p>
          <p className="viewSingleProduct_wrap_details_shoeType">
            {product.productType}
          </p>
          <div className="viewSingleProduct_wrap_details_stars">
            <div className="viewSingleProduct_wrap_details_stars_starWrap">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half-stroke"></i>
            </div>
            <p className="viewSingleProduct_wrap_details_stars_numberRated">
              {product.productRating.totalRating} rated
            </p>
          </div>
          <p className="viewSingleProduct_wrap_details_price">
            $ {product.productPrice}
          </p>
          <p className="viewSingleProduct_wrap_details_selectedColor">
            Colors : {returnImageOfActiveProduct().color}
          </p>
          <div className="viewSingleProduct_wrap_mobileImages">
            <img
              src={displayImageMobile}
              alt="display"
              className="viewSingleProduct_wrap_mobileImages_display"
            />
            <div className="viewSingleProduct_wrap_mobileImages_splitControl">
              <button
                onClick={() => onChangeLeftBtn()}
                className="viewSingleProduct_wrap_mobileImages_splitControl_leftBtn"
              ></button>
              <button
                onClick={() => onChangeRightBtn()}
                className="viewSingleProduct_wrap_mobileImages_splitControl_rightBtn"
              ></button>
            </div>
            <div className="viewSingleProduct_wrap_mobileImages_btns">
              {returnImageOfActiveProduct().productImageMore.map((_, index) => (
                <button
                  key={index}
                  className={
                    displayImageMobileNumber == index
                      ? "viewSingleProduct_wrap_mobileImages_btns_circle viewSingleProduct_wrap_mobileImages_btns_circle-active"
                      : "viewSingleProduct_wrap_mobileImages_btns_circle"
                  }
                ></button>
              ))}
            </div>
          </div>
          <div className="viewSingleProduct_wrap_details_colors">
            {product.productColors.map((color, index) => (
              <button
                onClick={() => onChangeSelectColor(color.id)}
                key={index}
                className="viewSingleProduct_wrap_details_colors_shoe"
              >
                <img
                  src={color.productImage}
                  alt="shoe"
                  className="viewSingleProduct_wrap_details_colors_shoe_image"
                />
                {color.selected ? (
                  <div className="viewSingleProduct_wrap_details_colors_shoe_coverActive"></div>
                ) : (
                  ""
                )}
              </button>
            ))}
          </div>
          <p className="viewSingleProduct_wrap_details_size">
            Size : {returnGenderType().gender} {returnProductSize().size}{" "}
          </p>
          <div className="viewSingleProduct_wrap_details_choices">
            {product.productGender.map((gender, index) => (
              <button
                onClick={() => onChangeSelectGender(gender.id)}
                key={index}
                className={`viewSingleProduct_wrap_details_choices_btn ${gender.selected ? "viewSingleProduct_wrap_details_choices_btn-selected" : ""}`}
              >
                {gender.gender}
              </button>
            ))}
          </div>
          <div className="viewSingleProduct_wrap_details_shoeSize">
            {product.productSizes.map((size, index) => (
              <button
                onClick={() => onChangeSelectSize(size.id)}
                key={index}
                className={`viewSingleProduct_wrap_details_shoeSize_box ${size.selected ? "viewSingleProduct_wrap_details_shoeSize_box-selected" : ""} `}
              >
                {size.size}
              </button>
            ))}
          </div>
          <button
            onClick={() => onChangeToWishList(product.id)}
            className="viewSingleProduct_wrap_details_wishListBtn"
          >
            ADD TO WISH LIST
          </button>
          <button
            onClick={() => onChangeAddToCart(product.id)}
            className="viewSingleProduct_wrap_details_addToCart"
          >
            ADD TO CART
          </button>
        </div>
      </div>
      <div className="viewSingleProduct_suggestion">
        <h2>Similar Products</h2>
        <div className="viewSingleProduct_suggestion_products">
          <div className="viewSingleProduct_suggestion_products_item">
            <img
              src={productSimiliar_2}
              alt=""
              className="viewSingleProduct_suggestion_products_item_insideImage"
            />
          </div>
          <div className="viewSingleProduct_suggestion_products_item">
            <img
              src={productSimiliar_2}
              alt=""
              className="viewSingleProduct_suggestion_products_item_insideImage"
            />
          </div>
          <div className="viewSingleProduct_suggestion_products_item">
            <img
              src={productSimiliar_2}
              alt=""
              className="viewSingleProduct_suggestion_products_item_insideImage"
            />
          </div>
          <div className="viewSingleProduct_suggestion_products_item">
            <img
              src={productSimiliar_2}
              alt=""
              className="viewSingleProduct_suggestion_products_item_insideImage"
            />
          </div>
          <div className="viewSingleProduct_suggestion_products_item">
            <img
              src={productSimiliar_2}
              alt=""
              className="viewSingleProduct_suggestion_products_item_insideImage"
            />
          </div>

          <div className="viewSingleProduct_suggestion_products_item">
            <img
              src={productSimiliar_2}
              alt=""
              className="viewSingleProduct_suggestion_products_item_insideImage"
            />
          </div>
        </div>
      </div>
      <h2 className="viewSingleProduct_productDetails_title">
        Product Details
      </h2>
      <div className="viewSingleProduct_productDetails">
        <table>
          <thead>
            <tr>
              <th className="table_header" scope="col">
                Specification
              </th>
              <th className="table_header" scope="col">
                Information
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="table-body" scope="row">
                Item Number
              </th>
              <td className="table-body">42069</td>
            </tr>
            <tr>
              <th className="table-body" scope="row">
                Brand Name
              </th>
              <td className="table-body">Nike</td>
            </tr>
            <tr>
              <th className="table-body">Product Type</th>
              <td className="table-body"> Shoe</td>
            </tr>
            <tr>
              <th className="table-body">Product For</th>
              <td className="table-body">Everyday use, Sports</td>
            </tr>
            <tr>
              <th className="table-body">Product For Gender</th>
              <td className="table-body">Unisex</td>
            </tr>
            <tr>
              <th className="table-body">Materials</th>
              <td className="table-body">The good stuffs</td>
            </tr>
            <tr>
              <th className="table-body">Consumer protection</th>
              <td className="table-body">Maybe</td>
            </tr>
            <tr>
              <th className="table-body">Size</th>
              <td className="table-body">8</td>
            </tr>
            <tr>
              <th className="table-body">Colors</th>
              <td className="table-body">MIX(Grey, White, Black)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="viewSingleProduct_reviews">
        {/*width viewport: 1650 +*/}

        <div className="viewSingleProduct_reviews_comments">
          {/*new comments*/}
          <NewComment />
          {product.productReviews.map((p, i) => (
            <Comment key={i} review={p} />
          ))}
        </div>
        <div className="viewSingleProduct_reviews_hightlights">
          <h2>Reviews</h2>
          <div className="viewSingleProduct_reviews_hightlights_reviews">
            <div className="viewSingleProduct_reviews_hightlights_reviews_total">
              <div className="viewSingleProduct_reviews_hightlights_reviews_total_stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>

                <i className="fa-solid fa-star-half-stroke"></i>
              </div>
              <div className="viewSingleProduct_reviews_hightlights_reviews_total_number">
                4.8
              </div>
            </div>
            <div className="viewSingleProduct_reviews_hightlights_reviews_bar">
              <div className="viewSingleProduct_reviews_hightlights_reviews_bar_number">
                5
              </div>
              <div className="viewSingleProduct_reviews_hightlights_reviews_bar_longbar">
                <div
                  className="viewSingleProduct_reviews_hightlights_reviews_bar_longbar_insidePercentage"
                  style={{ width: `${(105 / 155) * 100}%` }}
                ></div>
              </div>
              <div className="viewSingleProduct_reviews_hightlights_reviews_bar_totalNumber">
                155
              </div>
            </div>
            <div className="viewSingleProduct_reviews_hightlights_reviews_bar">
              <div className="viewSingleProduct_reviews_hightlights_reviews_bar_number">
                4
              </div>
              <div className="viewSingleProduct_reviews_hightlights_reviews_bar_longbar">
                <div
                  className="viewSingleProduct_reviews_hightlights_reviews_bar_longbar_insidePercentage"
                  style={{ width: `${(20 / 155) * 100}%` }}
                ></div>
              </div>
              <div className="viewSingleProduct_reviews_hightlights_reviews_bar_totalNumber">
                20
              </div>
            </div>
            <div className="viewSingleProduct_reviews_hightlights_reviews_bar">
              <div className="viewSingleProduct_reviews_hightlights_reviews_bar_number">
                3
              </div>
              <div className="viewSingleProduct_reviews_hightlights_reviews_bar_longbar">
                <div
                  className="viewSingleProduct_reviews_hightlights_reviews_bar_longbar_insidePercentage"
                  style={{ width: `${(10 / 155) * 100}%` }}
                ></div>
              </div>
              <div className="viewSingleProduct_reviews_hightlights_reviews_bar_totalNumber">
                10
              </div>
            </div>
            <div className="viewSingleProduct_reviews_hightlights_reviews_bar">
              <div className="viewSingleProduct_reviews_hightlights_reviews_bar_number">
                2
              </div>
              <div className="viewSingleProduct_reviews_hightlights_reviews_bar_longbar">
                <div
                  className="viewSingleProduct_reviews_hightlights_reviews_bar_longbar_insidePercentage"
                  style={{ width: `${(10 / 155) * 100}%` }}
                ></div>
              </div>
              <div className="viewSingleProduct_reviews_hightlights_reviews_bar_totalNumber">
                10
              </div>
            </div>
            <div className="viewSingleProduct_reviews_hightlights_reviews_bar">
              <div className="viewSingleProduct_reviews_hightlights_reviews_bar_number">
                1
              </div>
              <div className="viewSingleProduct_reviews_hightlights_reviews_bar_longbar">
                <div
                  className="viewSingleProduct_reviews_hightlights_reviews_bar_longbar_insidePercentage"
                  style={{ width: `${(15 / 155) * 100}%` }}
                ></div>
              </div>
              <div className="viewSingleProduct_reviews_hightlights_reviews_bar_totalNumber">
                15
              </div>
            </div>
          </div>
          <CommentHighlight
            picture={profilePicture}
            image={productReviewHighlightImage}
          />
          <CommentHighlight
            picture={profilePicture}
            image={productReviewHighlightImage}
          />
          <CommentHighlight
            picture={profilePicture}
            image={productReviewHighlightImage}
          />
          <div className="viewSingleProduct_reviews_hightlights_more">
            <h1>MORE</h1>
          </div>
        </div>

        {/*width viewport: 1040 +*/}
      </div>
    </div>
  );
};

export default ViewSingleProductDetails;
