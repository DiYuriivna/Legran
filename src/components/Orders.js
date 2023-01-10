import React from "react";
import axios from "axios";

import { Empty } from "./Empty";

import { OrdersItem } from "./OrdersItem";

export const Orders = () => {
  /*-------------get orders massive from server--------*/

  const [orders, setOrders] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("https://638efcb04ddca317d7eb1ec5.mockapi.io/order")
      .then((resp) => setOrders(resp.data));
  }, []);
  return (
    <div className="color-wrap">
      <div className="bcg-pink"></div>
      {orders.length === 0 ? (
        <Empty text="You have no orders yet" linkText="Open menu" />
      ) : (
        <div className="orders-item__wrap">
          {orders.map((item) => (
            <OrdersItem
              id={item.id}
              items={item.items}
              totalCost={item.totalCost}
              adress={item.adress}
              comment={item.comment}
              time={item.time}
              date={item.date}
              orderType={item.orderType}
            />
          ))}
        </div>
      )}
    </div>
  );
};
