import { Link } from "react-router-dom";

const ShoeCase = ({ id, prod }) => {
  return (
    <Link to={`/search/${id}`} className="search_body_display_wrapper_item">
      <div className="search_body_display_wrapper_item_image">
        <img
          src={prod.productColors[0].productImage}
          alt="not found"
          className="search_body_display_wrapper_item_image_product"
        />
      </div>
      <div className="search_body_display_wrapper_item_title">
        {prod.productName}
      </div>
      <div className="search_body_display_wrapper_item_type">
        {prod.productType}
      </div>
      <div className="search_body_display_wrapper_item_price">
        $ {prod.productPrice}
      </div>
      <div className="search_body_display_wrapper_item_button">
        View Details
      </div>
    </Link>
  );
};

export default ShoeCase;
