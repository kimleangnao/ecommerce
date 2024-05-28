

const PriceInCart = ({item}) => {
    return(
        <div className="cart_wrapper_price_product">
            <div className="cart_wrapper_price_product_name">
                {item.productName}
            </div>
            <div className="cart_wrapper_price_product_price">
                $ {item.productPrice}.00
            </div>
        </div>
    )
}

export default PriceInCart;