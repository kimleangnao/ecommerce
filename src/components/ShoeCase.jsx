import { Link } from "react-router-dom";


const ShoeCase = ({id, image4}) => {
    return(
        <Link to={`/search/${id}`} className="search_body_display_wrapper_item">
            <div className="search_body_display_wrapper_item_image">
                <img src={image4} alt="not found" className="search_body_display_wrapper_item_image_product" />
                
            </div>
            <div className="search_body_display_wrapper_item_title">
                Sabrina 1 `Family Bonds`
            </div>
            <div className="search_body_display_wrapper_item_type">
                Basketball Shoe
            </div>
            <div className="search_body_display_wrapper_item_price">
                120$
            </div>

            <div className="search_body_display_wrapper_item_button">
                ADD TO CART
            </div>
        </Link>
    )
}

export default ShoeCase;