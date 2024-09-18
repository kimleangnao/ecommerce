import NavbarExtend from "./NavbarExtend";
//import DisplayProduct from "./components/DisplayProduct";

import bgShoe from "../resources/images/trend_shoe_aj3.png";
//import background_trend from "../resources/images/background-trend.jpg";
import { useEffect, useState } from "react";
import ColorButton from "./components/ColorButton";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";

const Trend = ({ shoppingCart, trendProducts /*suggestProducts*/ }) => {
  const [switchStateBody, setSwitchStateBody] = useState(false);

  const [activeProduct, setActiveProduct] = useState({
    id: 218510,
    brand: "Nike",
    productImage: bgShoe,
    productName: "Air Jordan 3 Retro 'Cement Grey'",
    productPrice: 200,
    productColors: [
      {
        id: "pc_001",
        selected: true,
        color: "White",
        productImage: bgShoe,
        productImageMore: [],
      },
    ],
    productSizes: [
      {
        id: "ps_001",
        selected: false,
        size: 6,
      },
      {
        id: "ps_002",
        selected: false,
        size: 6.5,
      },
      {
        id: "ps_003",
        selected: false,
        size: 7,
      },
      {
        id: "ps_004",
        selected: false,
        size: 7.5,
      },
      {
        id: "ps_005",
        selected: false,
        size: 8,
      },
      {
        id: "ps_006",
        selected: false,
        size: 8.5,
      },
      {
        id: "ps_007",
        selected: false,
        size: 9,
      },
      {
        id: "ps_008",
        selected: false,
        size: 9.5,
      },
      {
        id: "ps_009",
        selected: false,
        size: 10,
      },
      {
        id: "ps_010",
        selected: false,
        size: 10.5,
      },
      {
        id: "ps_011",
        selected: true,
        size: 11,
      },
      {
        id: "ps_012",
        selected: false,
        size: 11.5,
      },
      {
        id: "ps_013",
        selected: false,
        size: 12,
      },
      {
        id: "ps_014",
        selected: false,
        size: 12.5,
      },
      {
        id: "ps_015",
        selected: false,
        size: 13,
      },
      {
        id: "ps_016",
        selected: false,
        size: 13.5,
      },
      {
        id: "ps_017",
        selected: false,
        size: 14,
      },
      {
        id: "ps_018",
        selected: false,
        size: 14.5,
      },
      {
        id: "ps_019",
        selected: false,
        size: 15,
      },
      {
        id: "ps_020",
        selected: false,
        size: 15.5,
      },
      {
        id: "ps_021",
        selected: false,
        size: 16,
      },
    ],
  });
  const [products] = useState(trendProducts);
  //const [moreProduct] = useState(suggestProducts);
  const [activeNumber, setActiveNumber] = useState(1);
  //const [activeSize, setActiveSize] = useState(11);

  const onChangeActiveProduct = (number) => {
    let num = number + 1;

    setActiveNumber(num);
    setActiveProduct(products[number]);
  };

  const onChangeColors = (colorID) => {
    let product = { ...activeProduct };
    for (let i = 0; i < product.productColors.length; i++) {
      if (product.productColors[i].id == colorID) {
        //
        product.productColors[i].selected = true;
      } else {
        product.productColors[i].selected = false;
      }
    }
    setActiveProduct(product);
  };

  // const onChangeSizeIncrement = () => {
  //   let size = activeSize;
  //   size += 0.5;
  //   setActiveSize(size);
  // };

  // const onChangeSizeDecrement = () => {
  //   let size = activeSize;
  //   size -= 0.5;
  //   setActiveSize(size);
  // };

  const stateSwitch = (switchState) => {
    if (switchState) {
      setSwitchStateBody(true);
    } else {
      setSwitchStateBody(false);
    }
  };

  useEffect(() => {
    setActiveProduct(trendProducts[0]);
    console.log(window.innerWidth);
  }, [trendProducts]);

  return (
    <div className="trend">
      <NavbarExtend
        currentPage={"trend"}
        shoppingCart={shoppingCart}
        colorText="#141414"
        backgroundColor="rgba(170, 225, 237, 0.19)"
      />
      <MobileNav stateSwitch={stateSwitch} />
      <div className="trend_image">
        <img
          src={activeProduct.productColors[0].productImage}
          alt="shoe_background_image"
          className="trend_image_bgImgae"
        />
      </div>
      <div className="trend_productInfo">
        <div
          to={`/search/${activeProduct.id}`}
          className="trend_productInfo_brand"
        >
          {activeProduct.brand}
        </div>
        <div
          to={`/search/${activeProduct.id}`}
          className="trend_productInfo_name"
        >
          {activeProduct.productName}
        </div>
        <div className="trend_productInfo_buttonsColor">
          {activeProduct.productColors.map((color, index) => (
            <ColorButton
              key={index}
              changeColor={onChangeColors}
              color={color}
            />
          ))}
        </div>
        <p className="trend_productInfo_price">${activeProduct.productPrice}</p>
        {/*
        <div className="trend_productInfo_wrapSizes">
          <button
            onClick={() => onChangeSizeDecrement()}
            className="trend_productInfo_wrapSizes_minus"
          >
            -
          </button>
          <p className="trend_productInfo_wrapSizes_text">{activeSize}</p>
          <button
            onClick={() => onChangeSizeIncrement()}
            className="trend_productInfo_wrapSizes_plus"
          >
            +
          </button>
        </div>
        */}
        <Link
          to={`/search/${activeProduct.id}`}
          className="trend_productInfo_addToCartBtn"
        >
          VIEW PRODUCT
        </Link>
      </div>
      <div className="trend_options">
        <button
          onClick={() => onChangeActiveProduct(0)}
          className={`trend_options_button ${activeNumber == 1 ? "trend_options_button-active" : ""}`}
        >
          001
        </button>
        <button
          onClick={() => onChangeActiveProduct(1)}
          className={`trend_options_button ${activeNumber == 2 ? "trend_options_button-active" : ""}`}
        >
          002
        </button>
        <button
          onClick={() => onChangeActiveProduct(2)}
          className={`trend_options_button ${activeNumber == 3 ? "trend_options_button-active" : ""}`}
        >
          003
        </button>
      </div>
      {/*
      <div className="trend_moreProducts">
        <div className="trend_moreProducts_subtext">
          <p className="trend_moreProducts_subtext_p">SIMILAR PRODUCTS</p>
        </div>
        <div className="trend_moreProducts_products">
          {moreProduct.map((product, index) => (
            <DisplayProduct key={index} product={product} />
          ))}
        </div>
      </div>
      */}
    </div>
  );
};

export default Trend;
