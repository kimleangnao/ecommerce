import { useNavigate } from "react-router-dom";
import ItemInCart from "./components/ItemInCart";
import PriceInCart from "./components/PriceInCart";



const Checkout = ({shoppingCart, setShoppingCart}) => {

    const navigate = useNavigate();

    const getPrice = () => {
      

        if(shoppingCart.length > 0){
            let tax = 4.99;
            let shipping = 5;
            let sumPrice = shoppingCart.reduce((acc, cval) => acc + cval.productPrice, 0)
            sumPrice = sumPrice + tax + shipping ;
            return sumPrice;
        }else{
            return 0;
        }
    
    }
    
    const onPurchase = () => {
        //normally we would send this information to back end and they will do stuff with it
        if(shoppingCart.length > 0){
            alert("Order Placed!")
            setShoppingCart([])
            navigate("/search")
        }else{
            alert("No item, add some to cart.")
            navigate("/search")
        }
    
    }
  

    return(
        <div className="checkout">
       

            <div className="checkout_wrapper">
                <div className="checkout_wrapper_info">
                    <div className="checkout_wrapper_info_address">
                        <div className="checkout_wrapper_info_address_title">
                            ADDRESS
                        </div>
                        <div className="checkout_wrapper_info_address_details">
                            <div className="checkout_wrapper_info_address_details_select">
                                <div className="checkout_wrapper_info_address_details_select_circle">
                                    <div className="checkout_wrapper_info_address_details_select_circle_dot">

                                    </div>
                                </div>
                            </div>
                            <div className="checkout_wrapper_info_address_details_info">
                                73 Acacia St. Huntington, NY 11743
                            </div>
                        </div>
                        <div className="checkout_wrapper_info_address_details checkout_wrapper_info_address_details-displayNone">
                            <div className="checkout_wrapper_info_address_details_select">
                                
                            </div>
                            <div className="checkout_wrapper_info_address_details_info">
                                <div className="checkout_wrapper_info_address_details_info_top">
                                    <div className="checkout_wrapper_info_address_details_info_top_address">
                                        <div className="checkout_wrapper_info_address_details_info_top_address_text">
                                            Street Address
                                        </div>
                                        <input type="text" placeholder="73 Volvol st." className="checkout_wrapper_info_address_details_info_top_address_input" />
                                    </div>
                                    <div className="checkout_wrapper_info_address_details_info_top_address">
                                        <div className="checkout_wrapper_info_address_details_info_top_address_text">
                                            APT #
                                        </div>
                                        <input type="text" placeholder="23" className="checkout_wrapper_info_address_details_info_top_address_input" />
                                    </div>
                                </div>
                                <div className="checkout_wrapper_info_address_details_info_bottom">
                                    <div className="checkout_wrapper_info_address_details_info_bottom_city">
                                        <div className="checkout_wrapper_info_address_details_info_bottom_city_text">
                                            City
                                        </div>
                                        <input type="text" placeholder="City name" className="checkout_wrapper_info_address_details_info_bottom_citys_input" />
                                    </div>
                                    <div className="checkout_wrapper_info_address_details_info_bottom_state">
                                        <div className="checkout_wrapper_info_address_details_info_bottom_state_text">
                                            State
                                        </div>
                                        <input type="text" placeholder="CA" className="checkout_wrapper_info_address_details_info_bottom_state_input" />
                                    </div>
                                    <div className="checkout_wrapper_info_address_details_info_bottom_zipcode">
                                        <div className="checkout_wrapper_info_address_details_info_bottom_zipcode_text">
                                           Zip Code
                                        </div>
                                        <input type="text" placeholder="95222" className="checkout_wrapper_info_address_details_info_bottom_zipcode_input" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="checkout_wrapper_info_address_addNewAddress">
                            <button className="checkout_wrapper_info_address_addNewAddress_button ">
                                + New Address
                            </button>
                            <button className="checkout_wrapper_info_address_addNewAddress_button checkout_wrapper_info_address_addNewAddress_button-displayNone">
                                + ADD
                            </button>
                        </div>
                    </div>

                    <div className="checkout_wrapper_info_payment">
                        <div className="checkout_wrapper_info_payment_title">
                            Payment methods
                        </div>
                        <div className="checkout_wrapper_info_payment_card">
                            <div className="checkout_wrapper_info_payment_card_title">
                                John Oliver&apos;s Card
                            </div>
                            <div className="checkout_wrapper_info_payment_card_details">
                                <div className="checkout_wrapper_info_payment_card_details_select">
                              
                                </div>
                                <div className="checkout_wrapper_info_payment_card_details_numbers">
                                    <div className="checkout_wrapper_info_payment_card_details_numbers_accountNumber">
                                        <div className="checkout_wrapper_info_payment_card_details_numbers_accountNumber_title">
                                            Card #0000
                                        </div>
                                        <div className="checkout_wrapper_info_payment_card_details_numbers_accountNumber_box">
                                            ####-####-####-0000
                                        </div>
                                    </div>
                                    <div className="checkout_wrapper_info_payment_card_details_numbers_expDate">
                                        <div className="checkout_wrapper_info_payment_card_details_numbers_expDate_title">
                                            EXP DATE
                                        </div>
                                        <div className="checkout_wrapper_info_payment_card_details_numbers_expDate_box">
                                            11/12
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>

                        <div className="checkout_wrapper_info_payment_card checkout_wrapper_info_payment_card-displayNone">
                            <div className="checkout_wrapper_info_payment_card_title">
                                Register new card
                            </div>
                            <input type="text" placeholder="Cardholder's name" className="checkout_wrapper_info_payment_card_title-input" />
                          
                            <div className="checkout_wrapper_info_payment_card_details">
                                <div className="checkout_wrapper_info_payment_card_details_select">
                              
                                </div>
                                <div className="checkout_wrapper_info_payment_card_details_numbers">
                                    <div className="checkout_wrapper_info_payment_card_details_numbers_accountNumber">
                                        <div className="checkout_wrapper_info_payment_card_details_numbers_accountNumber_title">
                                            Card #
                                        </div>
                                        <input type="text" className="checkout_wrapper_info_payment_card_details_numbers_accountNumber_box" />
                                        
                                    </div>
                                    <div className="checkout_wrapper_info_payment_card_details_numbers_expDate">
                                        <div className="checkout_wrapper_info_payment_card_details_numbers_expDate_title">
                                            EXP DATE
                                        </div>
                                        <input type="text"  className="checkout_wrapper_info_payment_card_details_numbers_expDate_box" />
                                         
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                        <div className="checkout_wrapper_info_payment_buttons">
                            <div className="checkout_wrapper_info_payment_buttons_addBtn">
                                + ADD
                            </div>
                            <div className="checkout_wrapper_info_payment_buttons_saveBtn checkout_wrapper_info_payment_buttons-displayNone">
                                + SAVE
                            </div>
                        </div>
                    </div>

                    <div className="checkout_wrapper_info_products">
                        <div className="checkout_wrapper_info_products_bundle_title">
                            PRODUCTS
                        </div>
                        {
                            shoppingCart.map((item, index) => (
                                <ItemInCart key={index} item={item} />
                            ))
                        }
                    </div>
                </div>
                <div className="checkout_wrapper_details">
                    <div className="checkout_wrapper_details_summary">
                        <div className="checkout_wrapper_details_summary_title">
                            <div className="checkout_wrapper_details_summary_title_text">
                                Products
                            </div>
                            <div className="checkout_wrapper_details_summary_title_price">
                                Price
                            </div>
                        </div>
                        {
                            shoppingCart.map((item, index) => (
                                <PriceInCart key={index} item={item} />
                            ))
                        }
                       
                       {
                        shoppingCart.length > 0 ? (
                            <div className="checkout_wrapper_details_summary_additional">
                                <div className="checkout_wrapper_details_summary_additional_text">
                                    Shipping
                                </div>
                                <div className="checkout_wrapper_details_summary_additional_price">
                                    $ 5.00
                                </div>
                            </div>
                            ) : ""
                       }
                       {
                        shoppingCart.length > 0 ? (
                            <div className="checkout_wrapper_details_summary_additional">
                                <div className="checkout_wrapper_details_summary_additional_text">
                                    Tax
                                </div>
                                <div className="checkout_wrapper_details_summary_additional_price">
                                    $ 4.99
                                </div>
                            </div>
                            ) : ""
                       }
                       
                       
                        <div className="checkout_wrapper_details_summary_total">
                            <div className="checkout_wrapper_details_summary_total_text">
                               TOTAL
                            </div>
                            <div className="checkout_wrapper_details_summary_total_price">
                                $ {getPrice()}
                            </div>
                        </div>

                        <button onClick={() => onPurchase()} className="checkout_wrapper_details_summary_placeOrder">
                            <div className="checkout_wrapper_details_summary_placeOrder_price">
                                $ {getPrice()}
                            </div>
                            <div className="checkout_wrapper_details_summary_placeOrder_text">
                                Place Order
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;