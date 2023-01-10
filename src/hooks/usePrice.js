import React from "react";
import { MyContext } from "../App";

export const usePrice = () => {
  const { cartItems } = React.useContext(MyContext);

  const totalCost = cartItems.reduce(
    (prev, obj) => obj.price * obj.quantity + prev,
    0
  );

  return { totalCost, cartItems };
};
