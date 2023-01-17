import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { MyContext } from "../App";

import TextareaAutosize from "react-textarea-autosize";
import { usePrice } from "../hooks/usePrice";
import CartItem from "./CartItem";
import DropDownTime from "./DropDownTime";
import axios from "axios";

function FilledCart({ setIsOrderComplited, setOrderId }) {
  const { totalCost } = usePrice();

  const { setCartItems, cartItems } = React.useContext(MyContext);

  /*------switch orderType -----------------------------------------------*/
  const [isDelivery, setIsDelivery] = React.useState(true);
  const deliveryOn = () => setIsDelivery(true);
  const deliveryOf = () => setIsDelivery(false);

  /*-------------- object with part of form data(only data-time and order type)--------------*/
  const [formData, setFormData] = React.useState({
    date: "Today",
    time: "12:00",
    orderType: "Delivery",
  });

  useEffect(() => {
    const orderType = ` ${isDelivery ? "delivery" : "Take away"}`;
    setFormData({ ...formData, ...{ orderType } });
  }, [isDelivery]);



  /*--------------------------- CONFIRMATION ------------------------------------------------------------*/

  const { register, handleSubmit } =
    useForm(); /* pakage to get part of form data */

  const [isLoading, setIsLoading] =
    React.useState(false); /* disabling confirm btn */

  const delay = (ms) =>
    new Promise((resolve) =>
      setTimeout(resolve, ms)
    ); /*mockApi to not block for lots requests*/

  const confirmation = async (data) => {
    setIsLoading(true); /* disable confirm btn */
    try {
      /*------ post order data to server  ---------------------------*/

      const obj = await axios.post(
        "https://638efcb04ddca317d7eb1ec5.mockapi.io/order",
        { ...data, ...formData, items: cartItems, totalCost }
      );

      setOrderId(obj.data.id); /*get orderId for confirmatio page*/

      /*------delete items from cart -----------------------------------------------*/

      for (let i = 0; cartItems.length > i; i++) {
        const item = cartItems[i];
        await axios.delete(
          `https://638efcb04ddca317d7eb1ec5.mockapi.io/cart/${item.id}`
        );
        await delay(100);
      }
      setCartItems([]);
      setIsOrderComplited(true);
    } catch (error) {
      alert("Failed to place an order :(");
    }
    setIsLoading(false);
  };

  /*************************************************************************************************** */

  return (
    <>
      {/* --------------------------------- LEFT ITEMS---------------------------------- */}
      <div className="cart__items">
        {cartItems.map((object) => (
          <CartItem
            size={object.size}
            description={object.description}
            ingredients={object.ingredients}
            quantity={object.quantity}
            src={object.src}
            caption={object.caption}
            price={object.price}
            id={object.id}
          />
        ))}
        {cartItems.length > 0 && (
          <div className="cart__total-price">
            total <strong> {totalCost} $</strong>
          </div>
        )}
      </div>

      {/* --------------------------------- RIGHT DETAILS---------------------------------- */}

      <form className="cart__details" onSubmit={handleSubmit(confirmation)}>
        {/* ----------------------------------------SWITCH BUTTON------------------------------------------------------- */}
        <div className="cart__details-wrap">
          <h2>Order type</h2>
          <div className="cart__switch">
            <div
              className={`cart__delivery ${
                isDelivery ? "cart__delivery_on" : ""
              }`}
              onClick={deliveryOn}
            >
              Delivery
            </div>
            <div
              className={`cart__take-away ${
                !isDelivery ? "cart__delivery_on" : ""
              }`}
              onClick={deliveryOf}
            >
              Take away
            </div>
          </div>
          {/*-------------------------------- delivery adress ----------------------------------- */}

          {isDelivery && (
            <>
              <label htmlFor="adress">
                <h2>Delivery address</h2>
              </label>
              <TextareaAutosize
                required
                className="cart__adress"
                minLength={5}
                minRows={2}
                {...register("adress")}
                id="adress"
                placeholder="13 S College Avenue, Remington 43933 United States"
              />
            </>
          )}
          <DropDownTime
            formData={formData}
            setFormData={setFormData}
            register={register}
            isDelivery={isDelivery}
          />

          <textarea
            placeholder="Add your comment here ..."
            {...register("comment")}
            className="cart__comment"
            rows="3"
          ></textarea>
        </div>
        <div className="cart__wrap-btn">
          <button
            type="submit"
            disabled={isLoading}
            className="btn"
            // onClick={confirmation}
          >
            Confirm
          </button>
        </div>
      </form>
    </>
  );
}

export default FilledCart;

