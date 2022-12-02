// import React, { useState } from "react";

function Search() {
  //   const [classN, setclassN] = useState("0");
  return (
    <form className="header__search-wrap" action="">
      <button className="header__search-btn">
        <img src="/assets/search.svg" />
      </button>
      <button className="header__delete-btn">X</button>
      <input className="header__search" placeholder="Search..." type="search" />
    </form>
  );
}

export default Search;
