import React from "react";
import { MyContext } from "../App";
import { Link } from "react-router-dom";

function Card({
  ingredients,
  size,
  description,
  src,
  caption,
  price,
  quantity,
}) {
  const { cartItems, onClickPlus, openAboutPage } = React.useContext(MyContext);
  const [added, SetAdded] = React.useState(false);

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

  const cardOnLoad = () => {
    const newArray1 = cartItems.map((item) => item.src);
    if (newArray1.includes(src)) {
      if (added === false) {
        SetAdded(true);
      }
    }
  };

  cartItems.length > 0 && cardOnLoad();

  const addbtnPressed = () => {
    SetAdded(!added);
    onClickPlus({
      src,
      caption,
      price,
      quantity,
      size,
      description,
      ingredients,
    });
  };

  return (
    <figure className="card">
      <div className="card__img-wrap">
        <Linkto="about">
          <img
            onClick={onClickImg}
            src={src}
            alt={caption}
            className="card__img"
          />
        </Link>
        <button
          onClick={addbtnPressed}
          className={`card__addbtn ${added ? `card__addbtn_added` : ""}`}
        >
          <div
            className={
              added ? "card__add-or-check_check" : "card__add-or-check"
            }
          >
            {added ? "✓" : "+"}
          </div>
        </button>
      </div>
      <div className="card__caption-wrap">
        <figcaption>
          <p className="card__caption">{caption}</p>
        </figcaption>
        <span className="card__price">
          <p>{price}$</p>
        </span>
      </div>
    </figure>
  );
}

export default Card;
