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
  srcmob,
}) {
  const { cartItems, onClickPlus, openAboutPage } = React.useContext(MyContext);
  const [added, SetAdded] = React.useState(false);

  /* -----------About dish----------------------------------*/

  const onClickImg = () => {
    openAboutPage({
      srcmob,
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
      srcmob,
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
        <Link to="/about">
          <picture>
            <source media="(max-width: 575px)" srcSet={srcmob} sizes="575px" />
            <source srcSet={`${src} 1200w`} sizes="1200px" />
            <img
              src={src}
              className="card__img"
              onClick={onClickImg}
              alt={caption}
            />
          </picture>
        </Link>
        <div
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
        </div>
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
