function MenuBar() {
  return (
    <div className="menu">
      <div className="menu__wrap">
        <div className="menu__food">
          <img className="menu__img" src="/assets/food.svg" alt="" /> FOOD
        </div>
        <div className="menu__drink">
          <img className="menu__img" src="/assets/drink.svg" alt="" /> DRINKS
        </div>
      </div>
    </div>
  );
}

export default MenuBar;
