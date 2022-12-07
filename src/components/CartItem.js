function CartItem(props) {
  return (
    <div className="cart__item">
      <img src={props.src} alt={props.caption} />
      <h5>{props.caption}</h5>
      <div>
        <button>+</button>
        <span>1</span>
        <button>-</button>
      </div>
      <p>{props.price}</p>
    </div>
  );
}

export default CartItem;
