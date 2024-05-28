import { Link } from "react-router-dom";
import ItemInCart from "./components/ItemInCart";
import PriceInCart from "./components/PriceInCart";



const Cart = ({shoppingCart}) => {
    return(
        <div className="cart">
      

            <div className="cart_wrapper">
                <div className="cart_wrapper_products">
                    <div className="cart_wrapper_products_title">
                        Your Cart ({shoppingCart.length})
                    </div>
                    {
                        shoppingCart.map((item, index) => (
                            <ItemInCart key={index} item={item} />
                        ))  
                    }
                   
                </div>
                <div className="cart_wrapper_price">
                    <div className="cart_wrapper_price_title">
                        <p>Products</p>
                        <p>Price</p>
                    </div>
                    {
                        shoppingCart.map((item, index) => (
                            <PriceInCart key={index} item={item} />
                        ))
                      
                    }
                    
                    
                    <Link to="/checkout" className="cart_wrapper_price_btnCheckout">
                            Checkout
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Cart;