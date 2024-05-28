import NavbarExtend from "./NavbarExtend";
import DisplayProduct from "./components/DisplayProduct";

import bgShoe from "../resources/images/bg_shoe.jpg"

import { useEffect, useState } from "react";
import ColorButton from "./components/ColorButton";
import { Link } from "react-router-dom";


const Trend = ({trendProducts, suggestProducts}) => {

    const [activeProduct, setActiveProduct] = useState({

            id: 1,
            brand: "LACOSTE",
            productImage: bgShoe,
            productName: "Men's Bayliss Sneaker 1",
            productPrice: 70,
            productColors: [
                {
                    id: "pc_001",
                    selected: true,
                    color: "white"
                },
                {
                    id: "pc_002",
                    selected: false,
                    color: "black"
                },
                {
                    id: "pc_003",
                    selected: false,
                    color: "red"
                },
                {
                    id: "pc_004",
                    selected: false,
                    color: "blue"
                }
            ],
            productSizes: [
                {
                    id: "ps_001",
                    selected: false,
                    size: 6
                },
                {
                    id: "ps_002",
                    selected: false,
                    size: 6.5
                },
                {
                    id: "ps_003",
                    selected: false,
                    size: 7
                },
                {
                    id: "ps_004",
                    selected: false,
                    size: 7.5
                },
                {
                    id: "ps_005",
                    selected: false,
                    size: 8
                },
                {
                    id: "ps_006",
                    selected: false,
                    size: 8.5
                },
                {
                    id: "ps_007",
                    selected: false,
                    size: 9
                },
                {
                    id: "ps_008",
                    selected: false,
                    size: 9.5
                },
                {
                    id: "ps_009",
                    selected: false,
                    size: 10
                },
                {
                    id: "ps_010",
                    selected: false,
                    size: 10.5
                },
                {
                    id: "ps_011",
                    selected: true,
                    size: 11
                },
                {
                    id: "ps_012",
                    selected: false,
                    size: 11.5
                },
                {
                    id: "ps_013",
                    selected: false,
                    size: 12
                },
                {
                    id: "ps_014",
                    selected: false,
                    size: 12.5
                },
                {
                    id: "ps_015",
                    selected: false,
                    size: 13
                },
                {
                    id: "ps_016",
                    selected: false,
                    size: 13.5
                },
                {
                    id: "ps_017",
                    selected: false,
                    size: 14
                },
                {
                    id: "ps_018",
                    selected: false,
                    size: 14.5
                },
                {
                    id: "ps_019",
                    selected: false,
                    size: 15
                },
                {
                    id: "ps_020",
                    selected: false,
                    size: 15.5
                },
                {
                    id: "ps_021",
                    selected: false,
                    size: 16
                },
                
            ]
    })
    const [products,] = useState(trendProducts)
    const [moreProduct, ] = useState(suggestProducts)
    const [activeNumber, setActiveNumber] = useState(1)
    const [activeSize, setActiveSize] = useState(11)


    const onChangeActiveProduct = (number) => {
        let num = number+1;

        setActiveNumber(num);
        setActiveProduct(products[number]);
    }

    const onChangeColors = (colorID) => {
        let product = {...activeProduct}
        for(let i = 0; i < product.productColors.length; i++){
            if(product.productColors[i].id == colorID){
                //
                product.productColors[i].selected = true;
            }else{
                product.productColors[i].selected = false;
            }
        }
        setActiveProduct(product)
    }

    const onChangeSizeIncrement = () => {
        let size = activeSize;
        size += 0.5;
        setActiveSize(size)

    }

    const onChangeSizeDecrement = () => {
        let size = activeSize;
        size -= 0.5;
        setActiveSize(size)
    }

    useEffect(() => {
        setActiveProduct(trendProducts[0])

    }, [trendProducts])
 

    return(
        <div className="trend">
     
            <Link to={`/search/${activeProduct.id}`} className="trend_image">
                <img src={activeProduct.productColors[0].productImage} alt="shoe_background_image" className="trend_image_bgImgae" />
            </Link>
            <div className="trend_productInfo">
                <div to={`/search/${activeProduct.id}`} className="trend_productInfo_brand">{activeProduct.brand}</div> 
                <div to={`/search/${activeProduct.id}`} className="trend_productInfo_name">{activeProduct.productName}</div>
                <div className="trend_productInfo_buttonsColor">
                    {
                        activeProduct.productColors.map((color, index) => (
                            <ColorButton key={index} changeColor={onChangeColors} color={color} />
                        ))
                    }            
                </div>
                <p className="trend_productInfo_price">${activeProduct.productPrice}</p>
                <div className="trend_productInfo_wrapSizes">
                    <button onClick={() => onChangeSizeDecrement()} className="trend_productInfo_wrapSizes_minus">-</button>
                    <p className="trend_productInfo_wrapSizes_text">{activeSize}</p>
                    <button onClick={() => onChangeSizeIncrement()} className="trend_productInfo_wrapSizes_plus">+</button>
                </div>
                <button className="trend_productInfo_addToCartBtn">
                    ADD TO CART
                </button>   
            </div>
            <div className="trend_options">
                <button onClick={() => onChangeActiveProduct(0)} className={`trend_options_button ${activeNumber == 1 ? "trend_options_button-active" : "" }`}>
                    001
                </button>
                <button onClick={() => onChangeActiveProduct(1)} className={`trend_options_button ${activeNumber == 2 ? "trend_options_button-active" : "" }`}>
                    002
                </button>
                <button onClick={() => onChangeActiveProduct(2)} className={`trend_options_button ${activeNumber == 3 ? "trend_options_button-active" : "" }`}>
                    003
                </button>
            </div>
            <div className="trend_moreProducts">
                <div className="trend_moreProducts_subtext">
                    <p className="trend_moreProducts_subtext_p">SIMILAR PRODUCTS</p>
                </div>
                <div className="trend_moreProducts_products">
                    {
                        moreProduct.map((product, index) => (
                            <DisplayProduct key={index} product={product} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Trend;