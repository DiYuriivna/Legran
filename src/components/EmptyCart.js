function EmptyCard() {
  return (
    <div className="cart__empty-wrap">
      <img src="..assets/tray-top.svg" alt="" className="cart__tray-img-top" />
      <div className="cart__empty-text">
        :( <br />
        Cart is empty{" "}
      </div>
      <img
        src="..assets/tray-bottom.svg"
        alt=""
        className="cart__tray-img-bottom"
      />
    </div>
  );
}

export default EmptyCard;
