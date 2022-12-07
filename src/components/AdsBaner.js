import React from "react";
function AdsBaner() {
  const [isClicked1, setIsClicked1] = React.useState(false);
  const [isClicked2, setIsClicked2] = React.useState(false);
  const [isClicked3, setIsClicked3] = React.useState(false);
  const changeBtnState1 = () => {
    setIsClicked1(!isClicked1);
    setIsClicked2(false);
    setIsClicked3(false);
  };
  const changeBtnState2 = () => {
    setIsClicked2(true);
    setIsClicked1(false);
    setIsClicked3(false);
  };
  const changeBtnState3 = () => {
    setIsClicked3(true);
    setIsClicked2(false);
    setIsClicked1(false);
  };

  return (
    <div className="ads">
      <div className="ads__wrap">
        <button className="ads__left">
          <div className="ads__left-arrow"></div>
        </button>
        <img
          src="/assets/baner.png"
          alt="-50% All breakfast"
          className="ads__baner"
        />
        <button className="ads__right">
          <div className="ads__right-arrow"></div>
        </button>
        <div className="ads__centerbtn">
          <button
            onClick={changeBtnState1}
            className={`ads__centerbtn-1
           ${isClicked1 ? "ads__centerbtn-1_clicked" : ""}`}
          ></button>
          <button
            onClick={changeBtnState2}
            className={`ads__centerbtn-2
           ${isClicked2 ? "ads__centerbtn-2_clicked" : ""}`}
          ></button>
          <button
            onClick={changeBtnState3}
            className={`ads__centerbtn-3
           ${isClicked3 ? "ads__centerbtn-3_clicked" : ""}`}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default AdsBaner;
