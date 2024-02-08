import Navbar from "./Navbar";

import backGroundShoe from "../resources/images/9_2_Curry-9_2974-Detail.webp"
import moreButton from "../resources/images/more-button.png";

const Athlete = () => {
    return(
        <div className="athlete">
            <Navbar color="black" />
            <div className="athlete_wrapper">
                <div className="athlete_wrapper_athletes">
                    <div className="athlete_wrapper_athletes_sidebar">
                        <div className="athlete_wrapper_athletes_sidebar_face">
                        
                        </div>
                        <div className="athlete_wrapper_athletes_sidebar_face">
                        
                        </div>
                    </div>
                    <div className="athlete_wrapper_athletes_display">
                        <div className="athlete_wrapper_athletes_display_title">
                            Moment In History
                        </div>  
                        <div className="athlete_wrapper_athletes_display_video">

                        </div>
                        <div className="athlete_wrapper_athletes_display_more">
                            <div className="athlete_wrapper_athletes_display_more_video">

                            </div>
                            <div className="athlete_wrapper_athletes_display_more_video">

                            </div>
                            <div className="athlete_wrapper_athletes_display_more_video">

                            </div>
                        </div>
                        <div className="athlete_wrapper_athletes_display_bottomText">
                            BE PART OF HISTORY
                        </div>  
                    </div>
                    <div className="athlete_wrapper_athletes_absolute">
                        <img src={backGroundShoe} alt="not found" className="athlete_wrapper_athletes_absolute_image" />
                        <div className="athlete_wrapper_athletes_absolute_cover">

                        </div>
                    </div>
                </div>
                <div className="athlete_wrapper_shoes">
                    <div className="viewproduct_display_info_wrapper">
                            <div className="viewproduct_display_info_wrapper_title">
                                Under Armour Curry Flow 9 Team 
                            </div>
                            <div className="viewproduct_display_info_wrapper_type">
                                Basketball Shoe
                            </div>
                            <div className="viewproduct_display_info_wrapper_rating">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star-half-stroke"></i>
                                <span>4.5 stars 120 rated</span>
                            </div>
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

export default Athlete;