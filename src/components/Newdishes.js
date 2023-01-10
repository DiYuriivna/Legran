import Card from "./Card";
import React from "react";

import { MyContext } from "../App";

function Newdishes() {
  const { infoNewDish } = React.useContext(MyContext);

  const infoNewDish1 = infoNewDish.slice(0, 1);
  const infoNewDish2 = infoNewDish.slice(1);
  return (
    <div className="grid">
      <div className="newdishes">
        <div className="newdishes__1blockwrap">
          <h2 className="newdishes__title">Try our NEW dishes</h2>
          <p className="newdishes__para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exe
          </p>

          {infoNewDish1.map((object) => (
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
        <div className="newdishes__2blockwrap">
          {infoNewDish2.map((object) => (
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
    </div>
  );
}

export default Newdishes;
