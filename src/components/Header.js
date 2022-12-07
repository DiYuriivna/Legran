import Search from "./Search";

function Header() {
  return (
    <header className="header">
      <div className="header__bcg"></div>
      <nav className="header__nav">
        <div className="header__logo">Negroni</div>
        <ul className="header__center-nav">
          <li className="header__delivery-btn">Delivery</li>
          <li className="header__menu-btn">Menu</li>
          <li>
            <Search />
          </li>
        </ul>
        <ul className="header__right-nav">
          <li>
            <button className="header__person">
              <img src="/assets/person.svg" />
            </button>
          </li>
          <li>
            <button className="header__cart">
              <img src="/assets/cart.svg" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
