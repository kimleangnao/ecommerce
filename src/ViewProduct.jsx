import Navbar from "./Navbar";

import moreButton from "../resources/images/more-button.png";
import DisplayProductDetails from "./components/DisplayProductDetails";
import ProductReviews from "./components/ProductReviews";
import { useState } from "react";



const ViewProduct = () => {
    const [viewRating, setviewRating] = useState(false)

    const switchView = (e, state) => {
        e.preventDefault();

     
        if(viewRating){
            console.log("1")
            setviewRating(false);
        }else{
            console.log("2")
            setviewRating(true);
        }
        
        
    }

    const switchToProduct = (e) => {
        e.preventDefault();
        setviewRating(false);
    }
    return(
        <div className="viewproduct">
            <Navbar color="black" />
            <div className="viewproduct_display">
                <div className="viewproduct_display_images">
                    <div className="viewproduct_display_images_mini">
                        <button onClick={(e) => switchToProduct(e)} className="viewproduct_display_images_mini_image">

                        </button>
                        <button onClick={(e) => switchToProduct(e)} className="viewproduct_display_images_mini_image">

                        </button>
                        <button onClick={(e) => switchToProduct(e)} className="viewproduct_display_images_mini_image">

                        </button>
                        <button onClick={(e) => switchToProduct(e)} className="viewproduct_display_images_mini_image">

                        </button>
                        <button onClick={(e) => switchToProduct(e)} className="viewproduct_display_images_mini_image">

                        </button>
                        <button onClick={(e) => switchToProduct(e)} className="viewproduct_display_images_mini_image">

                        </button>
                    </div>
                    {
                        viewRating ?     <ProductReviews /> :       <DisplayProductDetails />
                    }
                
               
                    

                   
                </div>
                <div className="viewproduct_display_info">
                    <div className="viewproduct_display_info_wrapper">
                        <div className="viewproduct_display_info_wrapper_title">
                            Under Armour Curry Flow 9 Team 
                        </div>
                        <div className="viewproduct_display_info_wrapper_type">
                            Basketball Shoe
                        </div>
                        <button onClick={(e) => switchView(e)} className="viewproduct_display_info_wrapper_rating">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half-stroke"></i>
                            <span>4.5 stars 120 rated</span>
                        </button>
                        <div className="viewproduct_display_info_wrapper_price">
                            160$
                        </div>
                        <div className="viewproduct_display_info_wrapper_colors">
                            Colors: 
                        </div>
                        <div className="viewproduct_display_info_wrapper_colorsProducts">
                            <div className="viewproduct_display_info_wrapper_colorsProducts_show">

                            </div>
                            <div className="viewproduct_display_info_wrapper_colorsProducts_show">

                            </div>
                            <div className="viewproduct_display_info_wrapper_colorsProducts_show">

                            </div>
                            <div className="viewproduct_display_info_wrapper_colorsProducts_show">

                            </div>
                            <div className="viewproduct_display_info_wrapper_colorsProducts_show">

                            </div>
                            <div className="viewproduct_display_info_wrapper_colorsProducts_show">

                            </div>
                        </div>
                        <div className="viewproduct_display_info_wrapper_sizes">
                            Sizes : 
                        </div>
                        <div className="viewproduct_display_info_wrapper_sizesMenWomen">
                            <div className="viewproduct_display_info_wrapper_sizesMenWomen_box">
                                Men
                            </div>   
                            <div className="viewproduct_display_info_wrapper_sizesMenWomen_box">
                                Women
                            </div>
                        </div>
                        <div className="viewproduct_display_info_wrapper_sizesNumber">
                            <div className="viewproduct_display_info_wrapper_sizesNumber_number">
                                5
                            </div>
                            <div className="viewproduct_display_info_wrapper_sizesNumber_number">
                                6
                            </div>
                            <div className="viewproduct_display_info_wrapper_sizesNumber_number">
                                7
                            </div>
                            <div className="viewproduct_display_info_wrapper_sizesNumber_number">
                                8
                            </div>
                            <div className="viewproduct_display_info_wrapper_sizesNumber_number">
                                9
                            </div>
                            <div className="viewproduct_display_info_wrapper_sizesNumber_number">
                                10
                            </div>
                            <div className="viewproduct_display_info_wrapper_sizesNumber_number">
                                11
                            </div>
                            <div className="viewproduct_display_info_wrapper_sizesNumber_number">
                                12
                            </div>

                        </div>
                        <button className="viewproduct_display_info_wrapper_button">
                            ADD TO CART
                        </button>
                        <div className="viewproduct_display_info_wrapper_more">
                            <img src={moreButton} alt="not found" className="viewproduct_display_info_wrapper_more_arrow" />
              
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewProduct;