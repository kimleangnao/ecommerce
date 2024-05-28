
import { useState } from "react";
import Comment from "./components/Comment";


const ViewSingleProductDetails = ({moreProducts, user, product, onChangeSelectColor, onChangeSelectGender, onChangeSelectSize, sortingComments, onChangeAddToCart}) => {

    const [activeOptionSort, setActiveOptionSort] = useState("TOP")

    const returnImageOfActiveProduct = () => {
        console.log()
        let activeImage = product.productColors.filter((color) => color.selected == true)
        return activeImage[0];
    }

 
    const returnProductSize = () => {
        let activeSize = product.productSizes.filter((size) => size.selected == true)
        return activeSize[0];
    }

    const returnGenderType = () => {
        
        let activeGender = product.productGender.filter((gender) => gender.selected == true)

        return activeGender[0];
    }

    const onHandleOptionChange = (e) => {

        setActiveOptionSort(e.target.value);
        sortingComments(e.target.value);
    }


    return(
        <div>
            <div className="viewSingleProduct_wrap">
                <div className="viewSingleProduct_wrap_images">
                    <div className="viewSingleProduct_wrap_images_bigImage">
                        <div className="viewSingleProduct_wrap_images_bigImage_imageScreen"> 
                            <img src={returnImageOfActiveProduct().productImage} alt="" className="viewSingleProduct_wrap_images_bigImage_imageScreen_image" />
                        </div>
                    </div>
                    <div className="viewSingleProduct_wrap_images_smallImage">
                        {
                           returnImageOfActiveProduct().productImageMore.map((image, index) => (
                                <div key={index} className="viewSingleProduct_wrap_images_smallImage_displayImage">
                                    <img src={image} alt="shoe" className="viewSingleProduct_wrap_images_smallImage_displayImage_image" />
                                </div>
                           ))
                        } 
                    </div>
                </div>
                <div className="viewSingleProduct_wrap_details">
                   <p className="viewSingleProduct_wrap_details_name">{product.productName}</p>
                   <p className="viewSingleProduct_wrap_details_shoeType">{product.productType}</p>
                   <div className="viewSingleProduct_wrap_details_stars" >
                        <div className="viewSingleProduct_wrap_details_stars_starWrap" >
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half-stroke"></i>
                        </div>
                        <p className="viewSingleProduct_wrap_details_stars_numberRated">{product.productRating.totalRating} rated</p>
                   </div>
                   <p className="viewSingleProduct_wrap_details_price">$ {product.productPrice}</p>
                   <p className="viewSingleProduct_wrap_details_selectedColor">Colors : {returnImageOfActiveProduct().color}</p>
                   <div className="viewSingleProduct_wrap_details_colors">
                        {
                            product.productColors.map((color, index) => (
                                <button onClick={() => onChangeSelectColor(color.id)} key={index} className="viewSingleProduct_wrap_details_colors_shoe" >
                                    <img src={color.productImage} alt="shoe" className="viewSingleProduct_wrap_details_colors_shoe_image" />
                                    {
                                        color.selected ? (  <div className="viewSingleProduct_wrap_details_colors_shoe_coverActive">
                                        </div> ) : ""
                                    }          
                                </button>
                            ))
                        }
                   </div>
                   <p className="viewSingleProduct_wrap_details_size">Size :  {returnGenderType().gender} {returnProductSize().size} </p>
                   <div className="viewSingleProduct_wrap_details_choices">
                        {
                            product.productGender.map((gender, index) => (
                                <button onClick={() => onChangeSelectGender(gender.id)} key={index} className={`viewSingleProduct_wrap_details_choices_btn ${gender.selected ? "viewSingleProduct_wrap_details_choices_btn-selected" : ""}`}>{gender.gender}</button>
                            ))
                        }           
                   </div>
                   <div className="viewSingleProduct_wrap_details_shoeSize">
                        {
                            product.productSizes.map((size, index) => (
                                <button onClick={() => onChangeSelectSize(size.id)} key={index} className={`viewSingleProduct_wrap_details_shoeSize_box ${size.selected ? "viewSingleProduct_wrap_details_shoeSize_box-selected" : ""} `}>{size.size}</button> 
                            ))
                        }
                   </div>
                   <button onClick={() => onChangeAddToCart(product.id)} className="viewSingleProduct_wrap_details_addToCart">
                        ADD TO CART
                   </button>
                </div>
            </div>
            <div className="viewSingleProduct_extraInfo">
                <div className="viewSingleProduct_extraInfo_socialAndDetails">
                    <div className="viewSingleProduct_extraInfo_socialAndDetails_menu">
                        <button className="viewSingleProduct_extraInfo_socialAndDetails_menu_btn">Details</button>
                        <button className="viewSingleProduct_extraInfo_socialAndDetails_menu_btn viewSingleProduct_extraInfo_socialAndDetails_menu_btn-select">Reviews</button>
                    </div>
                    <div className="viewSingleProduct_extraInfo_socialAndDetails_writeReview">
                        <div className="viewSingleProduct_extraInfo_socialAndDetails_writeReview_user">
                            <div className="viewSingleProduct_extraInfo_socialAndDetails_writeReview_user_profile">
                                <img src={user.userImage} alt="profile_image" className="viewSingleProduct_extraInfo_socialAndDetails_writeReview_user_profile_imageFit" />
                            </div>
                            <textarea placeholder="Post your thought for the world to see..." className="viewSingleProduct_extraInfo_socialAndDetails_writeReview_user_input">

                            </textarea>
                        </div>
                        <button className="viewSingleProduct_extraInfo_socialAndDetails_writeReview_submitBtn">POST</button>
                    </div>

                    <div className="viewSingleProduct_extraInfo_socialAndDetails_sortWrap">
                        <div className="viewSingleProduct_extraInfo_socialAndDetails_sortWrap_sort">
                            <select onChange={(e) => onHandleOptionChange(e)} value={activeOptionSort} className="viewSingleProduct_extraInfo_socialAndDetails_sortWrap_sort_options">
                                <option value="TOP">TOP</option>
                                <option value="NEW">NEW</option>
                            </select>
                        </div>
                    </div>
                    <div className="viewSingleProduct_extraInfo_socialAndDetails_comments">
                        {
                            product.productReviews.map((review, index) => (
                                <Comment key={index} review={review} />
                            ))
                        }
                    
              
                    </div>
                    <div className="viewSingleProduct_extraInfo_socialAndDetails_more">
                        <button disabled >MORE</button>
                    </div>
                </div>


                <div className="viewSingleProduct_extraInfo_ratingAndRecommend">
                    <div className="viewSingleProduct_extraInfo_ratingAndRecommend_rating">
                        <div className="viewSingleProduct_extraInfo_ratingAndRecommend_rating_rated">
                            <div className="viewSingleProduct_extraInfo_ratingAndRecommend_rating_rated_stars">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star-half-stroke"></i>
                            </div>
                            <div className="viewSingleProduct_extraInfo_ratingAndRecommend_rating_rated_number">
                                {
                                    (((1* product.productRating["1"]) + (2* product.productRating["2"]) + (3* product.productRating["3"]) + (4* product.productRating["4"]) + (5* product.productRating["5"])) / 
                                    product.productRating.totalRating).toFixed(1)
                                }
                            </div>
                        </div>
                        <div className="viewSingleProduct_extraInfo_ratingAndRecommend_rating_scale">
                            <div className="viewSingleProduct_extraInfo_ratingAndRecommend_rating_scale_rectangle">
                                <div className="viewSingleProduct_extraInfo_ratingAndRecommend_rating_scale_rectangle_scaleNumber">
                                    5
                                </div>
                                <div className="viewSingleProduct_extraInfo_ratingAndRecommend_rating_scale_rectangle_bar">
                                    <div className="viewSingleProduct_extraInfo_ratingAndRecommend_rating_scale_rectangle_bar_percentage" style={{width: `${ 50* 5 }px`}}>

                                    </div>
                                </div>
                                <div className="viewSingleProduct_extraInfo_ratingAndRecommend_rating_scale_rectangle_totalRated">
                                    {product.productRating["5"]}
                                </div>
                            </div>
                            <div className="viewSingleProduct_extraInfo_ratingAndRecommend_rating_scale_rectangle">
                                <div className="viewSingleProduct_extraInfo_ratingAndRecommend_rating_scale_rectangle_scaleNumber">
                                    4
                                </div>
                                <div className="viewSingleProduct_extraInfo_ratingAndRecommend_rating_scale_rectangle_bar">
                                    <div className="viewSingleProduct_extraInfo_ratingAndRecommend_rating_scale_rectangle_bar_percentage" style={{width: `${ 25* 5 }px`}}>

                                    </div>
                                </div>
                                <div className="viewSingleProduct_extraInfo_ratingAndRecommend_rating_scale_rectangle_totalRated">
                                    {product.productRating["4"]}
                                </div>
                            </div>
                            <div className="viewSingleProduct_extraInfo_ratingAndRecommend_rating_scale_rectangle">
                                <div className="viewSingleProduct_extraInfo_ratingAndRecommend_rating_scale_rectangle_scaleNumber">
                                    3
                                </div>
                                <div className="viewSingleProduct_extraInfo_ratingAndRecommend_rating_scale_rectangle_bar">
                                    <div className="viewSingleProduct_extraInfo_ratingAndRecommend_rating_scale_rectangle_bar_percentage" style={{width: `${ 1* 5 }px`}}>

                                    </div>
                                </div>
                                <div className="viewSingleProduct_extraInfo_ratingAndRecommend_rating_scale_rectangle_totalRated">
                                    {product.productRating["3"]}
                                </div>
                            </div>
                            <div className="viewSingleProduct_extraInfo_ratingAndRecommend_rating_scale_rectangle">
                                <div className="viewSingleProduct_extraInfo_ratingAndRecommend_rating_scale_rectangle_scaleNumber">
                                    2
                                </div>
                                <div className="viewSingleProduct_extraInfo_ratingAndRecommend_rating_scale_rectangle_bar">
                                    <div className="viewSingleProduct_extraInfo_ratingAndRecommend_rating_scale_rectangle_bar_percentage" style={{width: `${ 1* 5 }px`}}>

                                    </div>
                                </div>
                                <div className="viewSingleProduct_extraInfo_ratingAndRecommend_rating_scale_rectangle_totalRated">
                                    {product.productRating["2"]}
                                </div>
                            </div>
                            <div className="viewSingleProduct_extraInfo_ratingAndRecommend_rating_scale_rectangle">
                                <div className="viewSingleProduct_extraInfo_ratingAndRecommend_rating_scale_rectangle_scaleNumber">
                                    1
                                </div>
                                <div className="viewSingleProduct_extraInfo_ratingAndRecommend_rating_scale_rectangle_bar">
                                    <div className="viewSingleProduct_extraInfo_ratingAndRecommend_rating_scale_rectangle_bar_percentage" style={{width: `${ 1* 5 }px`}}>

                                    </div>
                                </div>
                                <div className="viewSingleProduct_extraInfo_ratingAndRecommend_rating_scale_rectangle_totalRated">
                                    {product.productRating["1"]}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="viewSingleProduct_extraInfo_ratingAndRecommend_recommend">
                        <p>Similar Products</p>
                        <div className="viewSingleProduct_extraInfo_ratingAndRecommend_recommend_products">
                            {
                                moreProducts.map((product, index) => (
                                    <button key={index} className="viewSingleProduct_extraInfo_ratingAndRecommend_recommend_products_button">
                                        <img src={product.productImage} alt="product_image" className="viewSingleProduct_extraInfo_ratingAndRecommend_recommend_products_button_imageFit"  />
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewSingleProductDetails;