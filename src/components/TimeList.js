function TimeList({ dropDown, array, changeTime }) {
  return (
    <div className="cart__drop-down-wrap">
      <button className="cart__close-drop-down" onClick={dropDown}>
        x
      </button>
      <ul className="cart__time-list">
        {array.map((i) => (
          <li id={i} onClick={changeTime}>
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TimeList;
