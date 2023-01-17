import "../style/order_item_list.css";

export const OrdersItemList = ({ quantity, price, caption }) => {
  return (
    <tr className="order-item-list">
      <td className="order-item-list__caption">{caption}</td>
      <td className="order-item-list__quantity">{quantity}</td>
      <td className="order-item-list__price">{price} $</td>
    </tr>
  );
};
