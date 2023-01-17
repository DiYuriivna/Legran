import { useContext } from "react";
import { MyContext } from "../App";

export const MenuDrinkItem = (props) => {
  const { setDrinkItemClicked, setItemClicked } = useContext(MyContext);

  return (
    <div className="menu__item">
      <div
        className="menu__item-wrap"
        onClick={() => {
          setDrinkItemClicked(true);
          setItemClicked(false);
        }}
      >
        <div className="menu__item-img">{props.children}</div>
        {props.capture}
      </div>
    </div>
  );
};
