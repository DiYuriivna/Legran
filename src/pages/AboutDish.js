import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AboutDish = ({
  setItemObject,
  itemObject,
  src,
  caption,
  price,
  quantity,
  size,
  description,
  ingredients,
  onClickPlus,
}) => {
  Object.keys(itemObject).length !== 0
    ? axios.put(
        "https://638efcb04ddca317d7eb1ec5.mockapi.io/about/1",
        itemObject
      )
    : axios
        .get("https://638efcb04ddca317d7eb1ec5.mockapi.io/about")
        .then((resp) => setItemObject(resp.data[0]));

  const [isAdded, setIsAdded] = React.useState(false);
  const addbtnPressed = () => {
    setIsAdded(!isAdded);
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

  /*---------- close btn -----------------*/
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex1">
      <div className="color-wrap">
        <div className="bcg-pink"></div>
        <div className="grid">
          <div className="about__wrap">
            <div className="about__img-wrap">
              <div className="about__size">{itemObject.size}</div>
              <img
                className="about__img"
                src={itemObject.src}
                alt={itemObject.caption}
              />
            </div>
            <div className="about__description">
              <div className="about__title-description-wrap">
                <h2 className="about__title">{itemObject.caption}</h2>
                <p className="about__description-para">
                  {itemObject.description}
                </p>
              </div>
              <div className="about__ingredients">
                <h3 className="about__ingredients-header">INGREDIENTS</h3>
                <p>{itemObject.ingredients}</p>
              </div>
              <div className="about__descriprion-bottom">
                <p className="about__price">{itemObject.price}$</p>
                <button
                  onClick={addbtnPressed}
                  className={`btn ${isAdded ? `btn_about_added` : ""}`}
                >
                  {isAdded ? " Added" : "+ Add to cart"}
                </button>
              </div>
            </div>
            <div onClick={goBack} className="about__close">
              X
            </div>
          </div>
        </div>
        {/* </div>{" "} */}
        */}
      </div>
    </div>
  );
};
