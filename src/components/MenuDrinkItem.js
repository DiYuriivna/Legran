import { useContext } from "react";
import { MyContext } from "../App";

export const MenuDrinkItem = (props) => {
  const { setDrinkItemClicked, setItemClicked } = useContext(MyContext);

  return (
    <div
      onClick={() => {
        setDrinkItemClicked(true);
        setItemClicked(false);
      }}
      className="menu__item"
    >
      <div className="menu__item-wrap">
        <div className="menu__item-img">{props.children}</div>
        {props.capture}
      </div>
    </div>
  );
};
