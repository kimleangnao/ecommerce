import ProductReviewBox from "./ProductReviewBox";



const ProductReviews = () => {
    return(
        <div className="viewproduct_display_images_display">
            <div className="viewproduct_display_images_display_title">
                Reviews
            </div>
            <div className="viewproduct_display_images_display_reviews">
                <ProductReviewBox />
                <ProductReviewBox />
                <ProductReviewBox />
                <ProductReviewBox />
                <ProductReviewBox />
                <ProductReviewBox />
                <ProductReviewBox />
                <ProductReviewBox />
                <ProductReviewBox />
                <ProductReviewBox />
                
            </div>
        </div>
    )
}

export default ProductReviews;