import { Link } from "react-router-dom";


const DisplayProduct = ({product}) => {
    return(
        <div className="displayProduct">
            <Link to={`/search/${product.id}`} className="displayProduct_image">
                <img src={product.productColors[0].productImage} alt={product.title} className="displayProduct_image_fit"/>
            </Link>
            <div className="displayProduct_text">
                <Link to={`/search/${product.id}`} className="displayProduct_text_name">
                    {product.productName}
                </Link>
              
                <p className="displayProduct_text_price">
                    ${product.productPrice}
                </p>
            </div>
        </div>
    )
}

export default DisplayProduct;