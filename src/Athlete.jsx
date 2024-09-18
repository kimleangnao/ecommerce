import NavbarExtend from "./NavbarExtend";

//import backGroundShoe from "../resources/images/9_2_Curry-9_2974-Detail.webp";

import profileSteph from "../resources/images/steph.jpg";
import profileLebron from "../resources/images/lebron.jpg";
import { useState } from "react";
import MobileNav from "./MobileNav";

/*product display information could refactor into different components and joint with search/productId page*/

const Athlete = ({ shoppingCart, addToCart }) => {
  const [switchStateBody, setSwitchStateBody] = useState(false);
  const [productImageNumber, setProductImageNumber] = useState(0);

  const [profiles, setProfiles] = useState([
    {
      id: 163110,
      name: "Steph Curry",
      imageLink: profileSteph,
      videoLink:
        "https://www.youtube.com/embed/IpSLadH6sNA?si=hEfW-2dJsGD7ca8y",
      product: {
        id: 163110,
        productName: "Curry Flow 9 '2974'",
        productSport: "Basketball Shoe",
        productPrice: 150,
        productColor: "Gold / Blue",
        productGenders: ["Men", "Women"],
        productSizes: [
          {
            id: 1,
            size: 5,
            selected: true,
          },
          {
            id: 2,
            size: 5.5,
            selected: false,
          },
          {
            id: 3,
            size: 6,
            selected: false,
          },
          {
            id: 4,
            size: 6.5,
            selected: false,
          },
          {
            id: 5,
            size: 7,
            selected: false,
          },
          {
            id: 6,
            size: 7.5,
            selected: false,
          },
          {
            id: 7,
            size: 8,
            selected: false,
          },
          {
            id: 8,
            size: 8.5,
            selected: false,
          },
          {
            id: 9,
            size: 9,
            selected: false,
          },
          {
            id: 10,
            size: 9.5,
            selected: false,
          },
          {
            id: 11,
            size: 10,
            selected: false,
          },
          {
            id: 12,
            size: 10.5,
            selected: false,
          },
          {
            id: 13,
            size: 11,
            selected: false,
          },
          {
            id: 14,
            size: 11.5,
            selected: false,
          },
          {
            id: 15,
            size: 12,
            selected: false,
          },
          {
            id: 16,
            size: 12.5,
            selected: false,
          },
          {
            id: 17,
            size: 13,
            selected: false,
          },
          {
            id: 18,
            size: 13.5,
            selected: false,
          },
          {
            id: 19,
            size: 14,
            selected: false,
          },
        ],
        productRating: {
          1: 1,
          2: 1,
          3: 1,
          4: 25,
          5: 50,
          totalRating: 78,
        },
        productImage:
          "https://underarmour.scene7.com/is/image/Underarmour/3026437-400_DEFAULT?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688",
        productColorFit: "#f0f0f0",
        productImages: [
          "https://underarmour.scene7.com/is/image/Underarmour/3026437-400_PAIR?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688",
          "https://underarmour.scene7.com/is/image/Underarmour/3026437-400_TOE?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688",
          "https://underarmour.scene7.com/is/image/Underarmour/3026437-400_A?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688",
        ],
      },
      videoMore: [
        {
          id: 1,
          videoLink: "https://www.youtube.com/watch?v=oJiNAR21gxA",
        },
        {
          id: 2,
          videoLink: "https://www.youtube.com/watch?v=xlGCQ1uq5XE",
        },
        {
          id: 3,
          videoLink: "https://www.youtube.com/watch?v=48sGbJshoKI",
        },
      ],
    },
    {
      id: 894518,
      name: "LeBron Jame",
      imageLink: profileLebron,
      videoLink:
        "https://www.youtube.com/embed/MOPjtuzoSyA?si=5ML3DpIKdGoQLn0E",
      product: {
        id: 894518,
        productName: "Nike Lebron 20",
        productSport: "Basketball Shoe",
        productPrice: 160,
        productColor: "Mix",
        productGenders: ["Men", "Women"],
        productSizes: [
          {
            id: 1,
            size: 5,
            selected: false,
          },
          {
            id: 2,
            size: 5.5,
            selected: false,
          },
          {
            id: 3,
            size: 6,
            selected: false,
          },
          {
            id: 4,
            size: 6.5,
            selected: false,
          },
          {
            id: 5,
            size: 7,
            selected: false,
          },
          {
            id: 6,
            size: 7.5,
            selected: true,
          },
          {
            id: 7,
            size: 8,
            selected: false,
          },
          {
            id: 8,
            size: 8.5,
            selected: false,
          },
          {
            id: 9,
            size: 9,
            selected: false,
          },
          {
            id: 10,
            size: 9.5,
            selected: false,
          },
          {
            id: 11,
            size: 10,
            selected: false,
          },
          {
            id: 12,
            size: 10.5,
            selected: false,
          },
          {
            id: 13,
            size: 11,
            selected: false,
          },
          {
            id: 14,
            size: 11.5,
            selected: false,
          },
          {
            id: 20,
            size: 12,
            selected: false,
          },
          {
            id: 15,
            size: 12.5,
            selected: false,
          },
          {
            id: 16,
            size: 13,
            selected: false,
          },
          {
            id: 17,
            size: 13.5,
            selected: false,
          },
          {
            id: 18,
            size: 14,
            selected: false,
          },
        ],
        productRating: {
          1: 1,
          2: 1,
          3: 1,
          4: 25,
          5: 50,
          totalRating: 78,
        },
        productImage:
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/185116f3-9e57-4405-a9c4-851fbdeb36fc/lebron-xxi-basketball-shoes-DjB9tK.png",
        productColorFit: "#f6f6f6",
        productImages: [
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/56f1807f-4974-4cc6-8cd7-8fe89607480b/lebron-xxi-basketball-shoes-DjB9tK.png",
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0ddf973d-e905-4362-8a2b-040e862bd273/lebron-xxi-basketball-shoes-DjB9tK.png",
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f14064b6-10a3-468e-b24e-788106e6a9ed/lebron-xxi-basketball-shoes-DjB9tK.png",
        ],
      },
      videoMore: [
        {
          id: 1,
          videoLink: "https://www.youtube.com/watch?v=lzR1lEkTc-o",
        },
        {
          id: 1,
          videoLink: "https://www.youtube.com/watch?v=QQuASo2gW9Y",
        },
        {
          id: 1,
          videoLink: "https://www.youtube.com/watch?v=51CHNtNlFR8",
        },
      ],
    },
  ]);

  const [activeProfileIndex, setActiveProfileIndex] = useState(0);
  const [activeGenderChoice, setActiveGenderChoice] = useState("Men");

  //change all the CHANGETO FUNCTION, MAKE SURE thE INDEX UPDATE PROPERLY

  const onChangeIndex = (activeIndex) => {
    setActiveProfileIndex(activeIndex);
  };

  const onChangeSelectGender = (changeTo) => {
    setActiveGenderChoice(changeTo);
  };

  const onChangeSelectSize = (productID) => {
    //changeTo = id , not an object
    let allProfiles = [...profiles];

    for (
      let i = 0;
      i < allProfiles[activeProfileIndex].product.productSizes.length;
      i++
    ) {
      if (
        allProfiles[activeProfileIndex].product.productSizes[i].id == productID
      ) {
        allProfiles[activeProfileIndex].product.productSizes[i].selected = true;
      } else {
        allProfiles[activeProfileIndex].product.productSizes[i].selected =
          false;
      }
    }

    setProfiles(allProfiles);
  };

  const onChangeAddToCart = (productID) => {
    let productColor = profiles[activeProfileIndex].product.productColor;
    let productGender = activeGenderChoice;

    let productSize = profiles[activeProfileIndex].product.productSizes.filter(
      (size) => size.selected == true,
    );

    addToCart(productID, productColor, productGender, productSize[0].size);
    alert("Added item to cart!");
  };

  const stateSwitch = (switchState) => {
    if (switchState) {
      setSwitchStateBody(true);
    } else {
      setSwitchStateBody(false);
    }
  };

  const onChangeLeftBtn = () => {
    console.log("Left");

    let currentMaxLength =
      profiles[activeProfileIndex].product.productImages.length - 1;

    if (productImageNumber == 0) {
      setProductImageNumber(currentMaxLength);
    } else {
      setProductImageNumber((prev) => --prev);
    }
  };

  const onChangeRightBtn = () => {
    console.log("Right");

    let currentMaxLength =
      profiles[activeProfileIndex].product.productImages.length - 1;

    if (productImageNumber == currentMaxLength) {
      setProductImageNumber(0);
    } else {
      setProductImageNumber((prev) => ++prev);
    }
  };

  return (
    <div className={switchStateBody ? "athlete athlete_hidden" : "athlete"}>
      <NavbarExtend
        currentPage={"athlete"}
        shoppingCart={shoppingCart}
        colorText="#141414"
        backgroundColor="rgba(170, 225, 237, 0.19)"
      />
      <MobileNav stateSwitch={stateSwitch} />
      <div className="athlete_wrapper">
        <div className="athlete_wrapper_athletes">
          <div className="athlete_wrapper_athletes_display_more">
            {profiles[activeProfileIndex].product.productImages.map(
              (image, index) => (
                <div
                  key={index}
                  className="athlete_wrapper_athletes_display_more_image"
                  style={{
                    backgroundColor: `${profiles[activeProfileIndex].product.productColorFit}`,
                  }}
                >
                  <img
                    src={image}
                    className="athlete_wrapper_athletes_display_more_image_fit"
                    alt="shoe_image"
                  />
                </div>
              ),
            )}
          </div>

          <div className="athlete_wrapper_athletes_display">
            <div className="athlete_wrapper_athletes_display_video">
              <iframe
                width="100%"
                height="100%"
                className="athlete_wrapper_athletes_display_video_iframe"
                src={`${profiles[activeProfileIndex].videoLink}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div className="athlete_wrapper_athletes_display_title">
              Moment In History
            </div>
          </div>
        </div>
        <div className="athlete_wrapper_display">
          <img
            src={
              profiles[activeProfileIndex].product.productImages[
                productImageNumber
              ]
            }
            alt="display product"
            className="athlete_wrapper_display_image"
          />
          <div className="athlete_wrapper_display_split">
            <button
              onClick={() => onChangeLeftBtn()}
              className="athlete_wrapper_display_split_leftBtn"
            ></button>
            <button
              onClick={() => onChangeRightBtn()}
              className="athlete_wrapper_display_split_rightBtn"
            ></button>
          </div>
          <div className="athlete_wrapper_display_circles">
            {profiles[activeProfileIndex].product.productImages.map(
              (_, index) => (
                <div
                  key={index}
                  className={
                    productImageNumber == index
                      ? "athlete_wrapper_display_circles_dot athlete_wrapper_display_circles_dot-active"
                      : "athlete_wrapper_display_circles_dot"
                  }
                ></div>
              ),
            )}
          </div>
        </div>
        <div className="athlete_wrapper_shoes">
          <div className="viewproduct_display_info_wrapper">
            <div className="viewproduct_display_info_wrapper_title">
              {profiles[activeProfileIndex].product.productName}
            </div>
            <div className="viewproduct_display_info_wrapper_type">
              {profiles[activeProfileIndex].product.productSport}
            </div>
            <div className="viewproduct_display_info_wrapper_rating">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half-stroke"></i>
              <span>
                {(
                  (profiles[activeProfileIndex].product.productRating["1"] * 1 +
                    profiles[activeProfileIndex].product.productRating["2"] *
                      2 +
                    profiles[activeProfileIndex].product.productRating["3"] *
                      3 +
                    profiles[activeProfileIndex].product.productRating["4"] *
                      4 +
                    profiles[activeProfileIndex].product.productRating["5"] *
                      5) /
                  profiles[activeProfileIndex].product.productRating.totalRating
                ).toFixed(1)}{" "}
                of{" "}
                {profiles[activeProfileIndex].product.productRating.totalRating}{" "}
                rated
              </span>
            </div>
            <div className="viewproduct_display_info_wrapper_price">
              $ {profiles[activeProfileIndex].product.productPrice}
            </div>
            <div className="viewproduct_display_info_wrapper_mobileDisplay">
              <img
                src={
                  profiles[activeProfileIndex].product.productImages[
                    productImageNumber
                  ]
                }
                alt="display product"
                className="viewproduct_display_info_wrapper_mobileDisplay_displayImage"
              />
              <div className="viewproduct_display_info_wrapper_mobileDisplay_controlSplit">
                <button
                  onClick={() => onChangeLeftBtn()}
                  className="viewproduct_display_info_wrapper_mobileDisplay_controlSplit_leftBtn"
                ></button>
                <button
                  onClick={() => onChangeRightBtn()}
                  className="viewproduct_display_info_wrapper_mobileDisplay_controlSplit_rightBtn"
                ></button>
              </div>
              <div className="viewproduct_display_info_wrapper_mobileDisplay_btns">
                {profiles[activeProfileIndex].product.productImages.map(
                  (_, index) => (
                    <button
                      key={index}
                      className={
                        productImageNumber == index
                          ? "viewproduct_display_info_wrapper_mobileDisplay_btns_circle viewproduct_display_info_wrapper_mobileDisplay_btns_circle-active"
                          : "viewproduct_display_info_wrapper_mobileDisplay_btns_circle"
                      }
                    ></button>
                  ),
                )}
              </div>
            </div>
            <div className="viewproduct_display_info_wrapper_colors">
              Color: {profiles[activeProfileIndex].product.productColor}
            </div>
            <div className="viewproduct_display_info_wrapper_colorsProducts">
              <div className="viewproduct_display_info_wrapper_colorsProducts_show">
                <img
                  src={profiles[activeProfileIndex].product.productImage}
                  alt=""
                  className="viewproduct_display_info_wrapper_colorsProducts_show_image"
                />
              </div>
            </div>
            <p className="viewproduct_display_info_wrapper_playerName">
              {profiles[activeProfileIndex].name}
            </p>
            <div className="viewproduct_display_info_wrapper_players">
              <img
                src={profiles[activeProfileIndex].imageLink}
                alt="player profile"
                className="viewproduct_display_info_wrapper_players_picture"
              />
              <div className="viewproduct_display_info_wrapper_players_nav">
                <button
                  onClick={() => onChangeIndex(0)}
                  className={`${
                    activeProfileIndex == 0
                      ? "viewproduct_display_info_wrapper_players_nav_bullet viewproduct_display_info_wrapper_players_nav_bullet_active"
                      : "viewproduct_display_info_wrapper_players_nav_bullet"
                  }`}
                ></button>
                <button
                  onClick={() => onChangeIndex(1)}
                  className={`${
                    activeProfileIndex == 1
                      ? "viewproduct_display_info_wrapper_players_nav_bullet viewproduct_display_info_wrapper_players_nav_bullet_active"
                      : "viewproduct_display_info_wrapper_players_nav_bullet"
                  }`}
                ></button>
              </div>
            </div>

            <div className="viewproduct_display_info_wrapper_sizesMenWomen">
              {profiles[activeProfileIndex].product.productGenders.map(
                (gender, index) => (
                  <button
                    onClick={() => onChangeSelectGender(gender)}
                    key={index}
                    className={`viewproduct_display_info_wrapper_sizesMenWomen_box ${activeGenderChoice == gender ? "viewproduct_display_info_wrapper_sizesMenWomen_box-active" : ""}`}
                  >
                    {gender}
                  </button>
                ),
              )}
            </div>
            <div className="viewproduct_display_info_wrapper_sizesNumber">
              {profiles[activeProfileIndex].product.productSizes.map(
                (size, index) => (
                  <button
                    onClick={() => onChangeSelectSize(size.id)}
                    key={index}
                    className={`viewproduct_display_info_wrapper_sizesNumber_number ${size.selected ? "viewproduct_display_info_wrapper_sizesNumber_number-active" : ""}`}
                  >
                    {size.size}
                  </button>
                ),
              )}
            </div>
            <button
              onClick={() =>
                onChangeAddToCart(profiles[activeProfileIndex].product.id)
              }
              className="viewproduct_display_info_wrapper_button"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Athlete;
