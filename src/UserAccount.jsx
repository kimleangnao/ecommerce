import NavbarExtend from "./NavbarExtend";
import profileCat from "../resources/images/aiCat.png";
import { useState } from "react";
import MobileNav from "./MobileNav";

const UserAccount = ({ shoppingCart }) => {
  const [switchStateBody, setSwitchStateBody] = useState(false);
  const [changeAddressBtn, setChangeAddressBtn] = useState(false);
  const [address, setAddress] = useState({
    streetName: "4505 Mill Street",
    city: "San Francisco",
    state: "CA",
    zipcode: "94107",
  });

  const [newAddress, setNewAddress] = useState({
    streetName: "",
    city: "",
    state: "",
    zipcode: "",
  });

  const onChangeStreetName = (e) => {
    e.preventDefault();
    setNewAddress((prevAddress) => ({
      ...prevAddress,
      streetName: e.target.value,
    }));
  };
  const onChangeCity = (e) => {
    e.preventDefault();
    setNewAddress((prevAddress) => ({
      ...prevAddress,
      city: e.target.value,
    }));
  };
  const onChangeState = (e) => {
    e.preventDefault();
    setNewAddress((prevAddress) => ({
      ...prevAddress,
      state: e.target.value,
    }));
  };
  const onChangeZipcode = (e) => {
    e.preventDefault();
    setNewAddress((prevAddress) => ({
      ...prevAddress,
      zipcode: e.target.value,
    }));
  };

  const onChangeToNewAddress = (e) => {
    e.preventDefault();
    setAddress({ ...newAddress });
    setChangeAddressBtn(false);
  };

  const stateSwitch = (switchState) => {
    if (switchState) {
      setSwitchStateBody(true);
    } else {
      setSwitchStateBody(false);
    }
  };

  return (
    <div className="userAccount">
      <NavbarExtend
        shoppingCart={shoppingCart}
        colorText="#141414"
        backgroundColor="rgba(170, 225, 237, 0.19)"
      />
      <MobileNav stateSwitch={stateSwitch} />
      <div className="userAccount_wrapper">
        <img
          src={profileCat}
          alt="user-profile"
          className="userAccount_wrapper_profile"
        />
        <div className="userAccount_wrapper_info">
          <div className="userAccount_wrapper_info_nameDOB">
            <div className="userAccount_wrapper_info_nameDOB_name">
              HANN VENDE
            </div>
            <div className="userAccount_wrapper_info_nameDOB_dob">
              3/29/1996
            </div>
          </div>
          <div className="userAccount_wrapper_info_email">
            Hannvende@gmail.com
          </div>
          {changeAddressBtn ? (
            <div>
              <input
                onChange={(e) => onChangeStreetName(e)}
                value={newAddress.streetName}
                type="text"
                className="userAccount_wrapper_info_addressStreet"
                placeholder="Street name"
              />
              <div className="userAccount_wrapper_info_addressExtra">
                <input
                  onChange={(e) => onChangeCity(e)}
                  value={newAddress.city}
                  type="text"
                  placeholder="City"
                  className="userAccount_wrapper_info_addressExtra_city"
                />
                <input
                  onChange={(e) => onChangeState(e)}
                  value={newAddress.state}
                  type="text"
                  placeholder="State"
                  className="userAccount_wrapper_info_addressExtra_state"
                />
                <input
                  onChange={(e) => onChangeZipcode(e)}
                  value={newAddress.zipcode}
                  type="text"
                  placeholder="Zipcode"
                  className="userAccount_wrapper_info_addressExtra_zipcode"
                />
              </div>
            </div>
          ) : (
            <div className="userAccount_wrapper_info_address">
              {address.streetName}, {address.city}, {address.state}{" "}
              {address.zipcode}
            </div>
          )}

          <div className="userAccount_wrapper_info_btns">
            {changeAddressBtn ? (
              <div className="userAccount_wrapper_info_btns_group">
                <button
                  onClick={(e) => onChangeToNewAddress(e)}
                  className="userAccount_wrapper_info_btns_confirm"
                >
                  Confirm
                </button>
                <button
                  onClick={() => setChangeAddressBtn(false)}
                  className="userAccount_wrapper_info_btns_cancel"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={() => setChangeAddressBtn(true)}
                className="userAccount_wrapper_info_btns_changeAddress"
              >
                Change Address
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
