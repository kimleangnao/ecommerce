


const ProductReviewBox = () => {
    return(
            <div className="viewproduct_display_images_display_reviews_person">
                <div className="viewproduct_display_images_display_reviews_person_wrapper">
                    <div className="viewproduct_display_images_display_reviews_person_wrapper_profile">
                        TAKA 
                        <span className="viewproduct_display_images_display_reviews_person_wrapper_profile_stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </span>
                    </div>
                    <div className="viewproduct_display_images_display_reviews_person_wrapper_reviewText">
                        The best shoe on the planet.
                    </div>
                    <div className="viewproduct_display_images_display_reviews_person_wrapper_likes">
                        <button className="viewproduct_display_images_display_reviews_person_wrapper_likes_button">
                            <i className="fa-solid fa-thumbs-up"></i>
                        </button>
                        <span className="viewproduct_display_images_display_reviews_person_wrapper_likes_number">+5</span>
                    </div>
                </div>
            </div>
    )
}

export default ProductReviewBox;