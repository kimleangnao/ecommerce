const UserPaymentAddCard = ({
  newCard,
  onChangeBankName,
  onChangeBankNumber,
  onChangeExpirationDate,
  onChangeSecurityCode,
  onChangeUserName,
  onChangeCardType,
}) => {
  console.log(newCard);
  return (
    <div className="userPayment_wrapper_card">
      <div className="userPayment_wrapper_card_detail">
        <input
          onChange={(e) => onChangeBankName(e)}
          type="text"
          className="userPayment_wrapper_card_detail_bankNameInput"
          placeholder="Bank name"
          value={newCard.bankName}
        />
        <input
          onChange={(e) => onChangeBankNumber(e)}
          type="text"
          className="userPayment_wrapper_card_detail_accountNumberInput"
          placeholder="Account number"
          value={newCard.bankNumber}
        />
        <p className="userPayment_wrapper_card_detail_dateAndSecCodeInput">
          <input
            onChange={(e) => onChangeExpirationDate(e)}
            type="text"
            className="userPayment_wrapper_card_detail_dateAndSecCodeInput_expireDate"
            placeholder="Expire date"
            value={newCard.bankExpirationDate}
          />
          <input
            onChange={(e) => onChangeSecurityCode(e)}
            type="text"
            className="userPayment_wrapper_card_detail_dateAndSecCodeInput_secCode"
            placeholder="Sec code"
            value={newCard.bankSecurityCode}
          />
        </p>
        <input
          onChange={(e) => onChangeUserName(e)}
          type="text"
          className="userPayment_wrapper_card_detail_nameInput"
          placeholder="Name on card"
          value={newCard.bankUsername}
        />
      </div>
      <div className="userPayment_wrapper_card_btns">
        <div className="userPayment_wrapper_card_btns_group">
          <button className="userPayment_wrapper_card_btns_group_btn userPayment_wrapper_card_btns_group_btn_active">
            <i className="fa-solid fa-check"></i>
          </button>
          <button className="userPayment_wrapper_card_btns_group_btn userPayment_wrapper_card_btns_group_btn_delete">
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
        <input
          onChange={(e) => onChangeCardType(e)}
          type="text"
          className="userPayment_wrapper_card_btns_textInput"
          placeholder="Type"
          value={newCard.bankCardType}
        />
      </div>
    </div>
  );
};

export default UserPaymentAddCard;
