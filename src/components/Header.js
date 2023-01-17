import React from "react";

import { Link } from "react-router-dom";

import Search from "./Search";
import { usePrice } from "../hooks/usePrice";
import { MyContext } from "../App";

function Header() {
  const { totalCost, cartItems } = usePrice();
  const { setItemClicked } = React.useContext(MyContext);
  return (
    <div className="header">
      <div className="header__bcg"></div>
      <div className="grid">
        <nav className="header__nav">
          <Link to="/">
            <div onClick={() => setItemClicked(false)} className="header__logo">
              Legran
            </div>
          </Link>
          <ul className="header__center-nav">
            {/* ----------------- future feature ---------------------------*/}
            <Link to="/pizza">
              <li className="header__menu-btn">Menu</li>
            </Link>
            <Link to="/orders">
              <li className="header__delivery-btn">Orders</li>
            </Link>
            {/* <li>
              <Search />
            </li>  */}
          </ul>
          <ul className="header__right-nav">
            {cartItems.length > 0 && (
              <li className="header__total">
                <strong>{totalCost}$</strong>
              </li>
            )}

            <li>
              <Link to="/cart">
                <button className="header__cart-btn">
                  <img src="assets/cart.svg" />
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
