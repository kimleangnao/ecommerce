import { Link } from "react-router-dom";
import Navbar from "./Navbar";


const Cart = () => {
    return(
        <div className="cart">
            <Navbar color="black" />

            <div className="cart_wrapper">
                <div className="cart_wrapper_products">
                    <div className="cart_wrapper_products_title">
                        Your Cart (1)
                    </div>
                    <div className="cart_wrapper_products_card">
                        <div className="cart_wrapper_products_card_image">

                        </div>
                        <div className="cart_wrapper_products_card_details">
                            <p className="cart_wrapper_products_card_details_name">Under Armour Curry Flow 9 Team </p>
                            <p className="cart_wrapper_products_card_details_type">Basketball Shoe </p>
                       
                            <p className="cart_wrapper_products_card_details_colors">Color : Blue, White, Gold </p>
                            <p className="cart_wrapper_products_card_details_price">160 $ </p>
                            <p className="cart_wrapper_products_card_details_amount">Amount: <span className="cart_wrapper_products_card_details_amount_number">1</span> </p>
                        </div>
                    </div>
                </div>
                <div className="cart_wrapper_price">
                    <div className="cart_wrapper_price_title">
                        <p>Products</p>
                        <p>Price</p>
                    </div>
                    <div className="cart_wrapper_price_product">
                        <div className="cart_wrapper_price_product_name">
                            Under Armour Curry Flow 9 Team
                        </div>
                        <div className="cart_wrapper_price_product_price">
                            160.99$
                        </div>
                    </div>
                    <Link to="/checkout" className="cart_wrapper_price_btnCheckout">
                            Checkout
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Cart;