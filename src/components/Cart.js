import React from "react";

import EmptyCart from "./EmptyCart";
import FilledCart from "./FilledCart";
import ConfirmationPage from "./ConfirmationPage";

import { useNavigate } from "react-router-dom";

function Cart({ cartItems }) {
  const [isOrderComplited, setIsOrderComplited] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);

  /*---------- close btn -----------------*/

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex1">
      <div className="color-wrap">
        <div className="bcg-pink"></div>
        <div className="cart">
          {isOrderComplited ? (
            <ConfirmationPage orderId={orderId} />
          ) : (
            <div className="grid">
              <h1>Cart</h1>
              <div onClick={goBack} className="close-page-btn">
                X
              </div>
              {cartItems.length > 0 ? (
                <FilledCart
                  orderId={orderId}
                  setOrderId={setOrderId}
                  setIsOrderComplited={setIsOrderComplited}
                />
              ) : (
                <EmptyCart />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
