// import cart from "./public/assets/cart.svg";
// import person from "./public/assets/person.svg";
// import search from "./public/assets/search.svg";

// function Header() {
//   <header className="header">
//     <div className="header__bcg"></div>
//     <nav className="header__nav">
//       <div className="header__logo">Negroni</div>
//       <ul className="header__center-nav">
//         <li className="header__delivery-btn">Delivery</li>
//         <li className="header__menu-btn">Menu</li>
//         <li>
//           <form className="header__search-wrap" action="">
//             <button className="header__search-btn">
//               <img src={search} />
//             </button>
//             <input
//               className="header__search"
//               placeholder="Search..."
//               type="search"
//             />
//           </form>
//         </li>
//       </ul>
//       <ul className="header__right-nav">
//         <li>
//           <button className="header__person">
//             <img src={person} />
//           </button>
//         </li>
//         <li>
//           <button className="header__cart">
//             <img src={cart} />
//           </button>
//         </li>
//       </ul>
//     </nav>
//   </header>;
// }

// export default Header;
import Search from "./Search";

function Header() {
  return (
    <header className="header">
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
