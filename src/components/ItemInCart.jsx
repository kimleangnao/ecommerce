

const ItemInCart = ({item}) => {
    return(
        <div className="cart_wrapper_products_card">
            <div className="cart_wrapper_products_card_image">
                <img src={item.productImage} alt="" className="cart_wrapper_products_card_image_fit" />
            </div>
            <div className="cart_wrapper_products_card_details">
                <p className="cart_wrapper_products_card_details_name">{item.productName}</p>
                <p className="cart_wrapper_products_card_details_type">{item.productType} </p>
            
                <p className="cart_wrapper_products_card_details_colors">Color : {item.productColor} </p>
                <p className="cart_wrapper_products_card_details_price">$ {item.productPrice} </p>
                <p className="cart_wrapper_products_card_details_amount">{item.productGender} {item.productSize} </p>
            </div>
        </div>
    )
}

export default ItemInCart;