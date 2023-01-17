import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { MenuItem } from "./MenuItem";
import { MenuDrinkItem } from "./MenuDrinkItem";
import { isMobile } from "react-device-detect";

import { ReactComponent as Burger } from "../menu/burger.svg";
import { ReactComponent as Fish } from "../menu/fish.svg";
import { ReactComponent as Meat } from "../menu/meat.svg";
import { ReactComponent as Soup } from "../menu/soup.svg";
import { ReactComponent as Pizza } from "../menu/pizza.svg";
import { ReactComponent as Sushi } from "../menu/sushi.svg";
import { ReactComponent as Wok } from "../menu/wok.svg";
import { ReactComponent as Desert } from "../menu/desert.svg";

import { ReactComponent as Cold } from "../menu/cold.svg";
import { ReactComponent as Hot } from "../menu/hot.svg";
import { ReactComponent as Strong } from "../menu/strong.svg";
import { ReactComponent as Wine } from "../menu/wine.svg";
import { ReactComponent as Beer } from "../menu/beer.svg";
import { ReactComponent as Coctails } from "../menu/coctails.svg";

import { MyContext } from "../App";

function MenuBar() {
  const {
    isItemClicked,
    setItemClicked,
    isDrinkItemClicked,
    setDrinkItemClicked,
  } = useContext(MyContext);

  // useEffect(() => {
  //   setItemClicked(false);
  //   setDrinkItemClicked(false);
  //   setIsFoodOpen(false);
  //   setDrinkOpen(false);
  // }, []);

  const [isFoodOpen, setIsFoodOpen] = useState(false);
  const [isDrinkOpen, setDrinkOpen] = useState(false);

  const isLinkActive = ({ isActive }) => (isActive ? "active" : "");

  const onFoodHover = () => {
    setIsFoodOpen(true);
    setDrinkOpen(false);
    setDrinkItemClicked(false);
  };

  const onDrinkHover = () => {
    setDrinkOpen(true);
    setIsFoodOpen(false);
    setItemClicked(false);
  };
  const onFoodClick = () => {
    // setIsFoodOpen(true);
    // setDrinkOpen(false);
    setDrinkItemClicked(false);
    setItemClicked(true);
  };
  const onDrinkClick = () => {
    // setDrinkOpen(true);
    // setIsFoodOpen(false);
    setItemClicked(false);
    setDrinkItemClicked(true);
  };

  return (
    <div className="menu">
      <div className="grid">
        <div className="grid-column-span-all">
          <div
            onMouseLeave={() => {
              setDrinkOpen(false);
              setIsFoodOpen(false);
            }}
            className={`menu__wrap ${
              isFoodOpen || isDrinkOpen || isItemClicked || isDrinkItemClicked
                ? `menu__wrap_open`
                : ""
            }`}
          >
            {isFoodOpen || isItemClicked ? (
              <div className="menu__open-food">
                <div className="menu__group">
                  <nav>
                    <NavLink className={isLinkActive} to="/fish">
                      <MenuItem capture="fish">
                        <Fish />
                      </MenuItem>
                    </NavLink>
                    <NavLink className={isLinkActive} to="/meat">
                      <MenuItem capture="meat">
                        <Meat />
                      </MenuItem>
                    </NavLink>
                  </nav>
                </div>
                <div className="menu__group menu__group-three">
                  <nav>
                    <NavLink className={isLinkActive} to="/soup">
                      <MenuItem capture="soup">
                        <Soup />
                      </MenuItem>
                    </NavLink>
                    <NavLink className={isLinkActive} to="/burger">
                      <MenuItem capture="burger">
                        <Burger />
                      </MenuItem>
                    </NavLink>

                    <NavLink className={isLinkActive} to="/pizza">
                      <MenuItem capture="pizza">
                        <Pizza />
                      </MenuItem>
                    </NavLink>
                  </nav>
                </div>
                <div className="menu__group">
                  <nav>
                    <NavLink className={isLinkActive} to="/sushi">
                      <MenuItem capture="sushi">
                        <Sushi />
                      </MenuItem>
                    </NavLink>
                    <NavLink className={isLinkActive} to="/wok">
                      <MenuItem capture="wok">
                        <Wok />
                      </MenuItem>
                    </NavLink>
                  </nav>
                </div>
                <div className="menu__group">
                  <nav>
                    <NavLink className={isLinkActive} to="/desert">
                      <MenuItem capture="desert">
                        <Desert />
                      </MenuItem>
                    </NavLink>
                  </nav>
                </div>
              </div>
            ) : (
              <NavLink className={isLinkActive} to="/pizza">
                <div
                  onClick={onFoodClick}
                  onMouseEnter={isMobile ? () => false : onFoodHover}
                  className={`menu__food ${
                    isDrinkOpen || isDrinkItemClicked ? `menu__food_none` : ""
                  }`}
                >
                  <img className="menu__img" src="assets/food.svg" alt="" />{" "}
                  FOOD
                </div>
              </NavLink>
            )}
            {isDrinkOpen || isDrinkItemClicked ? (
              <div className="menu__open-food menu__open-drink">
                <div className="menu__group">
                  <nav>
                    <NavLink className={isLinkActive} to="/cold">
                      <MenuDrinkItem capture="cold">
                        <Cold />
                      </MenuDrinkItem>
                    </NavLink>
                    <NavLink className={isLinkActive} to="/hot">
                      <MenuDrinkItem capture="hot">
                        <Hot />
                      </MenuDrinkItem>
                    </NavLink>
                  </nav>
                </div>

                <div className="menu__group menu__group-three">
                  <nav>
                    <NavLink className={isLinkActive} to="/strong">
                      <MenuDrinkItem capture="strong">
                        <Strong />
                      </MenuDrinkItem>
                    </NavLink>

                    <NavLink className={isLinkActive} to="/wine">
                      <MenuDrinkItem capture="wine">
                        <Wine />
                      </MenuDrinkItem>
                    </NavLink>

                    <NavLink className={isLinkActive} to="/beer">
                      <MenuDrinkItem capture="beer">
                        <Beer />
                      </MenuDrinkItem>
                    </NavLink>
                  </nav>
                </div>

                <div className="menu__group">
                  <nav>
                    <NavLink className={isLinkActive} to="/coctails">
                      <MenuDrinkItem capture="coctails">
                        <Coctails />
                      </MenuDrinkItem>
                    </NavLink>
                  </nav>
                </div>
              </div>
            ) : (
              <NavLink className={isLinkActive} to="/beer">
                <div
                  onMouseEnter={isMobile ? () => false : onDrinkHover}
                  onClick={onDrinkClick}
                  className={`menu__drink ${
                    isFoodOpen || isItemClicked ? `menu__drink_none` : ""
                  }`}
                >
                  <img className="menu__img" src="assets/drink.svg" alt="" />{" "}
                  DRINKS
                </div>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuBar;
