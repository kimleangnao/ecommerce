import Navbar from "./Navbar";



const Checkout = () => {
    return(
        <div className="checkout">
            <Navbar showCart={true} color="black"  />

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
                                Cardholder Name's Card
                            </div>
                            <div className="checkout_wrapper_info_payment_card_details">
                                <div className="checkout_wrapper_info_payment_card_details_select">
                              
                                </div>
                                <div className="checkout_wrapper_info_payment_card_details_numbers">
                                    <div className="checkout_wrapper_info_payment_card_details_numbers_accountNumber">
                                        <div className="checkout_wrapper_info_payment_card_details_numbers_accountNumber_title">
                                            Card #
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
                        <div className="checkout_wrapper_info_products_bundle">
                            <div className="checkout_wrapper_info_products_bundle_picture">

                            </div>
                            <div className="checkout_wrapper_info_products_bundle_details">
                                <p className="checkout_wrapper_info_products_bundle_details_title">Under Armour Curry Flow 9 Team</p>
                                <p className="checkout_wrapper_info_products_bundle_details_type">Basketball Shoe</p>
                                <p className="checkout_wrapper_info_products_bundle_details_colors">Colors : Blue, White, Gold</p>
                                <p className="checkout_wrapper_info_products_bundle_details_price">160 $</p>
                                <p className="checkout_wrapper_info_products_bundle_details_amount">Amount: <span className="checkout_wrapper_info_products_bundle_details_amount_number">1</span></p>
                            </div>
                        </div>
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
                        <div className="checkout_wrapper_details_summary_product">
                            <div className="checkout_wrapper_details_summary_product_text">
                                Under Armour Curry Flow 9 Team 
                            </div>
                            <div className="checkout_wrapper_details_summary_product_price">
                                160 $
                            </div>
                        </div>
                        <div className="checkout_wrapper_details_summary_additional">
                            <div className="checkout_wrapper_details_summary_additional_text">
                                Shipping
                            </div>
                            <div className="checkout_wrapper_details_summary_additional_price">
                               5.00 $ 
                            </div>
                        </div>
                        <div className="checkout_wrapper_details_summary_additional">
                            <div className="checkout_wrapper_details_summary_additional_text">
                                Tax
                            </div>
                            <div className="checkout_wrapper_details_summary_additional_price">
                                4.99 $ 
                            </div>
                        </div>
                        <div className="checkout_wrapper_details_summary_total">
                            <div className="checkout_wrapper_details_summary_total_text">
                               TOTAL
                            </div>
                            <div className="checkout_wrapper_details_summary_total_price">
                                169.99 $
                            </div>
                        </div>

                        <div className="checkout_wrapper_details_summary_placeOrder">
                            <div className="checkout_wrapper_details_summary_placeOrder_price">
                                169.99 $
                            </div>
                            <div className="checkout_wrapper_details_summary_placeOrder_text">
                                Place Order
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;