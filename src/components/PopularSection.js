import Card from "./Card";

function PopularSection() {
  let i = 1;
  const infoPopularDish = [
    { src: "/assets/p1.png", caption: "Bruschetta with avocado", price: "9$" },
    {
      src: "/assets/p2.png",
      caption: "Beef burger with teriyaki sauce",
      price: "22$",
    },
    {
      src: "/assets/p3.png",
      caption: "Bolognese with meat balls",
      price: "17$",
    },
    {
      src: "/assets/p4.png",
      caption: "Tomat spicy soup",
      price: "12$",
    },
    {
      src: "/assets/p5.png",
      caption: "Beef cheeseburger with bacon ",
      price: "22$",
    },
    {
      src: "/assets/p6.png",
      caption: "Honey pancakes",
      price: "16$",
    },
    {
      src: "/assets/p7.png",
      caption: "Brazilian fish stewe",
      price: "29$",
    },
  ];
  return (
    <div className="popular">
      <h2>The most ordered dishes</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exe
      </p>
      {infoPopularDish.map((object) => (
        <div className={`popular__p${i++}`}>
          <Card
            key={object.caption}
            src={object.src}
            caption={object.caption}
            price={object.price}
          />
        </div>
      ))}
    </div>
  );
}

export default PopularSection;
