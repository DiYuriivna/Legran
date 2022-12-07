import React from "react";

function Card({ src, caption, price, onClickPlus }) {
  const [added, SetAdded] = React.useState(false);

  const addbtnPressed = () => {
    SetAdded(!added);
    onClickPlus({ src, caption, price });
  };

  return (
    <figure className="card">
      {" "}
      <div className="card__img-wrap">
        {" "}
        <img src={src} alt={caption} className="card__img" />
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
        <figcaption className="card__caption">{caption}</figcaption>{" "}
        <span className="card__price">{price}</span>
      </div>
    </figure>
  );
}

export default Card;
