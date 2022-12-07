import Card from "./Card";
const cardCoctails = [
  { src: "/assets/c1.png", caption: "Negroni", price: "12$" },
  {
    src: "/assets/c2.png",
    caption: "Cosmopolitan",
    price: "16$",
  },
  {
    src: "/assets/c3.png",
    caption: "Mojito",
    price: "15$",
  },
  {
    src: "/assets/c4.png",
    caption: "Rainbow Paradise",
    price: "18$",
  },
  {
    src: "/assets/c5.png",
    caption: "Margarita",
    price: "15$",
  },
];

function TopCoctails() {
  return (
    <div className="coctail-section">
      <h2>Top coctails</h2>
      <div className="coctail-section__cards">
        {cardCoctails.map((object) => (
          <Card
            key={object.caption}
            src={object.src}
            caption={object.caption}
            price={object.price}
          />
        ))}
      </div>
    </div>
  );
}

export default TopCoctails;
