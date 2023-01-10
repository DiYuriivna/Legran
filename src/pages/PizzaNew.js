import React from "react";
import axios from "axios";
import Card from "../components/Card";

export const PizzaNew = () => {
  /*-------------fetch from server pizza items -------------------------------*/

  const [pizzaItems, setPizzaItems] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("https://638efcb04ddca317d7eb1ec5.mockapi.io/Pizza")
      .then((resp) => setPizzaItems(resp.data));
  }, []);

  return (
    // <div className={`pizza ${isDescriptionOpen ? `pizza_fixed` : ""}`}>
    <div className="grid">
      <div className="pizza">
        {pizzaItems.map((object) => (
          <Card
            ingredients={object.ingredients}
            description={object.description}
            size={object.size}
            quantity={object.quantity}
            key={object.caption}
            src={object.src}
            caption={object.caption}
            price={object.price}
          />
        ))}
      </div>
    </div>
  );
};
