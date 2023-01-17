import { OrdersItemList } from "./OrderItemList";

import "../style/orders_item.css";

export const OrdersItem = ({
  id,
  items,
  totalCost,
  comment,
  time,
  orderType,
  date,
  adress,
}) => {
  return (
    <>
      <div className=" grid">
        <div className="orders-item__header-wrap">
          <h2 className="orders-item__header">Order #{id}</h2>
          <div className="orders-item__total">
            <p>total cost</p>
            <p className="orders-item__total-price">{totalCost} $</p>
          </div>
        </div>
        <hr className="orders-item__hr" />

        <div className="orders-item">
          {/* -------------------- left --------------------------------- */}
          <table className="orders-item__left-wrap">
            <tbody>
              {items.map((item) => (
                <OrdersItemList
                  quantity={item.quantity}
                  price={item.price}
                  caption={item.caption}
                />
              ))}
            </tbody>
          </table>
          {/* -------------------- right --------------------------------- */}
          <table className="orders-item__right-wrap">
            <tbody>
              <tr>
                <td>Order type: </td>
                <td>{orderType}</td>
              </tr>
              {adress != "" && (
                <tr>
                  <td>Delivery adress:</td>
                  <td>{adress} </td>
                </tr>
              )}
              <tr>
                <td>Order ready:</td>
                <td>
                  {date} at {time}
                </td>
              </tr>
              {comment != "" && (
                <tr>
                  <td>Your comment:</td>
                  <td>{comment} </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
