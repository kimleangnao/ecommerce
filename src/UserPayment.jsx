import { useState } from "react";
import UserPaymentCard from "./components/UserPaymentCard";
import NavbarExtend from "./NavbarExtend";
import UserPaymentAddCard from "./components/UserPaymentAddCard";
import MobileNav from "./MobileNav";

const UserPayment = ({ shoppingCart }) => {
  const [userPaymentInfo, setUserPaymentInfo] = useState([
    {
      cardId: 2525,
      bankName: "Bank Of America",
      bankNumber: "4444 4444 4444 4444",
      bankExpirationDate: " 4/27",
      bankSecurityCode: "333",
      bankUsername: "Brian Neo",
      bankCardType: "DEBIT",
      bankCardActive: true,
    },
  ]);
  const [newCard, setNewCard] = useState({
    cardId: "",
    bankName: "",
    bankNumber: "",
    bankExpirationDate: "",
    bankSecurityCode: "",
    bankUsername: "",
    bankCardType: "",
    bankCardActive: false,
  });
  const [addNewCard, setAddNewCard] = useState(false);

  const onChangeAddNewCard = (e) => {
    e.preventDefault();
    setAddNewCard(!addNewCard);
  };

  const onChangeBankName = (e) => {
    e.preventDefault();
    setNewCard((prev) => ({ ...prev, bankName: e.target.value }));
  };

  const onChangeBankNumber = (e) => {
    e.preventDefault();
    setNewCard((prev) => ({ ...prev, bankNumber: e.target.value }));
  };

  const onChangeExpirationDate = (e) => {
    e.preventDefault();
    setNewCard((prev) => ({ ...prev, bankExpirationDate: e.target.value }));
  };

  const onChangeSecurityCode = (e) => {
    e.preventDefault();
    setNewCard((prev) => ({ ...prev, bankSecurityCode: e.target.value }));
  };

  const onChangeUserName = (e) => {
    e.preventDefault();
    setNewCard((prev) => ({ ...prev, bankUsername: e.target.value }));
  };

  const onChangeCardType = (e) => {
    e.preventDefault();
    setNewCard((prev) => ({ ...prev, bankCardType: e.target.value }));
  };

  const onChangeSubmitCard = (e) => {
    e.preventDefault();
    let randomId = Math.floor(Math.random() * 1000000);
    newCard.cardId = randomId;
    setUserPaymentInfo((prev) => [...prev, { ...newCard }]);
    console.log(newCard);
    setAddNewCard(false);
  };

  const switchPaymentCard = (e, targetId) => {
    e.preventDefault();

    console.log(userPaymentInfo);
    let updatedCard = userPaymentInfo.map((card) => {
      if (card.cardId == targetId) {
        return { ...card, bankCardActive: !card.bankCardActive };
      } else {
        return { ...card, bankCardActive: false };
      }
    });
    console.log(updatedCard);
    setUserPaymentInfo(updatedCard);
  };

  const deletePaymentCard = (e, cardId) => {
    e.preventDefault();
    console.log(cardId);
    console.log(userPaymentInfo);
    let filteredCards = userPaymentInfo.filter((card) => card.cardId != cardId);
    setUserPaymentInfo(filteredCards);
  };

  const [switchStateBody, setSwitchStateBody] = useState(false);

  const stateSwitch = (switchState) => {
    if (switchState) {
      setSwitchStateBody(true);
    } else {
      setSwitchStateBody(false);
    }
  };

  return (
    <div
      className={
        switchStateBody ? "userPayment userPayment_hidden" : "userPayment"
      }
    >
      <NavbarExtend
        shoppingCart={shoppingCart}
        colorText="#141414"
        backgroundColor="rgba(170, 225, 237, 0.19)"
      />
      <MobileNav stateSwitch={stateSwitch} />
      <div className="userPayment_wrapper">
        <h2>PAYMENT(S)</h2>

        {userPaymentInfo.length > 0
          ? userPaymentInfo.map((card, index) => (
              <UserPaymentCard
                card={card}
                key={index}
                switchPaymentCard={switchPaymentCard}
                deletePaymentCard={deletePaymentCard}
              />
            ))
          : ""}
        {addNewCard ? (
          <UserPaymentAddCard
            newCard={newCard}
            onChangeBankName={onChangeBankName}
            onChangeBankNumber={onChangeBankNumber}
            onChangeExpirationDate={onChangeExpirationDate}
            onChangeSecurityCode={onChangeSecurityCode}
            onChangeUserName={onChangeUserName}
            onChangeCardType={onChangeCardType}
          />
        ) : (
          ""
        )}

        {addNewCard ? (
          <button
            onClick={(e) => onChangeSubmitCard(e)}
            className="userPayment_wrapper_btnAdd"
          >
            ADD
          </button>
        ) : (
          <button
            onClick={(e) => onChangeAddNewCard(e)}
            className="userPayment_wrapper_btnAdd"
          >
            ADD NEW CARD
          </button>
        )}
      </div>
    </div>
  );
};

export default UserPayment;
