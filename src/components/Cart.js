import CartItem from "./CartItem";

function Cart(props) {
  return (
    <div className="cart">
      <h2>Cart</h2>
      <div className="cart__items">
        {props.arr.map((object) => (
          <CartItem
            src={object.src}
            caption={object.caption}
            price={object.price}
          />
        ))}
      </div>

      <div className="cart__details"></div>
    </div>
  );
}

export default Cart;
