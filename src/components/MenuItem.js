import { useContext } from "react";
import { MyContext } from "../App";

export const MenuItem = ({ capture, children }) => {
  const { setItemClicked, setDrinkItemClicked } = useContext(MyContext);

  const menuItemOnClick = () => {
    setItemClicked(true);
    setDrinkItemClicked(false);
  };
  return (
    <div onClick={menuItemOnClick} className="menu__item">
      <div className="menu__item-wrap">
        <div className="menu__item-img">{children}</div>
        {capture}
      </div>
    </div>
  );
};
