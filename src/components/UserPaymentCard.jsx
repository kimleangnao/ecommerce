const UserPaymentCard = ({ card, switchPaymentCard, deletePaymentCard }) => {
  return (
    <div className="userPayment_wrapper_card">
      <div className="userPayment_wrapper_card_detail">
        <p className="userPayment_wrapper_card_detail_bankName">
          {card ? card.bankName : "UNDEFINED"}
        </p>
        <p className="userPayment_wrapper_card_detail_accountNumber">
          {card ? card.bankNumber : "UNDEFINED"}
        </p>
        <p className="userPayment_wrapper_card_detail_dateAndSecCode">
          <span>Expiring Date : {card ? card.bankExpirationDate : ""}</span>{" "}
          <span>SEC: {card ? card.bankSecurityCode : ""}</span>
        </p>
        <p className="userPayment_wrapper_card_detail_name">
          {card ? card.bankUsername : ""}
        </p>
      </div>
      <div className="userPayment_wrapper_card_btns">
        <div className="userPayment_wrapper_card_btns_group">
          <button
            onClick={(e) => switchPaymentCard(e, card.cardId)}
            className={`${
              card
                ? card.bankCardActive
                  ? "userPayment_wrapper_card_btns_group_btn userPayment_wrapper_card_btns_group_btn_active"
                  : "userPayment_wrapper_card_btns_group_btn"
                : ""
            } `}
          >
            <i className="fa-solid fa-check"></i>
          </button>

          <button
            onClick={(e) => deletePaymentCard(e, card.cardId)}
            className="userPayment_wrapper_card_btns_group_btn userPayment_wrapper_card_btns_group_btn_delete"
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
        <em className="userPayment_wrapper_card_btns_text">
          {card ? card.bankCardType : ""}
        </em>
      </div>
    </div>
  );
};

export default UserPaymentCard;
