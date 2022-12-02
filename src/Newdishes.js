import Card from "./Card";

function Newdishes() {
  const infoNewDish = [
    { src: "/assets/1.png", caption: "Brazilian fish stew", price: "29$" },
    {
      src: "/assets/2.png",
      caption: "Oven-Baked Watercress Bear",
      price: "34$",
    },
    {
      src: "/assets/2.png",
      caption: "Oven-Baked Watercress Bear",
      price: "34$",
    },
  ];
  const infoNewDish1 = infoNewDish.slice(0, 1);
  const infoNewDish2 = infoNewDish.slice(1);
  return (
    <div className="newdishes">
      <div className="newdishes__1blockwrap">
        <h2 className="newdishes__title">Try our NEW dishes</h2>
        <p className="newdishes__para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exe
        </p>

        {infoNewDish1.map((object) => (
          <Card
            src={object.src}
            caption={object.caption}
            price={object.price}
          />
        ))}
      </div>
      {infoNewDish2.map((object) => (
        <Card src={object.src} caption={object.caption} price={object.price} />
      ))}
    </div>
  );
}

export default Newdishes;
