import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../App";

function CartItem({
  id,
  src,
  caption,
  price,
  quantity,
  size,
  description,
  ingredients,
}) {
  const { deleteItemFromCart, setCartItems, openAboutPage } =
    React.useContext(MyContext);

  const [quantyItems, setQuantyItems] = React.useState(quantity);

  const plusOneItem = async () => {
    await axios.put("https://638efcb04ddca317d7eb1ec5.mockapi.io/cart/" + id, {
      quantity: quantyItems + 1,
    });
    await axios
      .get("https://638efcb04ddca317d7eb1ec5.mockapi.io/cart")
      .then((resp) => setCartItems(resp.data));

    setQuantyItems(quantyItems + 1);
  };
  const minusOneItem = async () => {
    await axios.put("https://638efcb04ddca317d7eb1ec5.mockapi.io/cart/" + id, {
      quantity: quantyItems - 1,
    });
    await axios
      .get("https://638efcb04ddca317d7eb1ec5.mockapi.io/cart")
      .then((resp) => setCartItems(resp.data));

    setQuantyItems(quantyItems - 1);
  };

  /* -----------About dish----------------------------------*/

  const onClickImg = () => {
    openAboutPage({
      src,
      caption,
      quantity,
      price,
      size,
      description,
      ingredients,
    });
  };

  return (
    <div className="cart__items-wrap">
      <button className="cart__delete" onClick={() => deleteItemFromCart(id)}>
        x
      </button>

      <div className="cart__item">
        <Linkto="about">
          <div className="cart__img-wrap" onClick={onClickImg}>
            <img className="cart__img" src={src} alt={caption} />
          </div>

          <h5 onClick={onClickImg}>{caption}</h5>
        </Link>
        <div className="cart__plus-minus-cover">
          <button
            className="cart__minus"
            onClick={quantyItems > 1 && minusOneItem}
          >
            -
          </button>
          <input
            className="cart__plus-minus-input"
            type="tel"
            value={quantyItems}
          />
          <button className="cart__plus" onClick={plusOneItem}>
            +
          </button>
        </div>
        <p className="cart__price">{price * quantity}$</p>
      </div>
    </div>
  );
}

export default CartItem;
