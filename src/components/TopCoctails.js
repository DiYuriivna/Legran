import Card from "./Card";
const cardCoctails = [
  {
    ingredients:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id semper risus in hendrerit gravida rutrum quisque non tellus.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    size: "10 sm  |  400 gr",
    src: "assets/c1.png",
    caption: "Negroni",
    price: 12,
    quantity: 1,
  },
  {
    ingredients:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id semper risus in hendrerit gravida rutrum quisque non tellus.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    size: "10 sm  |  400 gr",
    src: "assets/c2.png",
    caption: "Cosmopolitan",
    price: 16,
    quantity: 1,
  },
  {
    ingredients:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id semper risus in hendrerit gravida rutrum quisque non tellus.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    size: "10 sm  |  400 gr",
    src: "assets/c3.png",
    caption: "Mojito",
    price: 15,
    quantity: 1,
  },
  {
    ingredients:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id semper risus in hendrerit gravida rutrum quisque non tellus.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    size: "10 sm  |  400 gr",
    src: "assets/c4.png",
    caption: "Rainbow Paradise",
    price: 18,
    quantity: 1,
  },
  {
    ingredients:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id semper risus in hendrerit gravida rutrum quisque non tellus.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    size: "10 sm  |  400 gr",
    src: "assets/c5.png",
    caption: "Margarita",
    price: 15,
    quantity: 1,
  },
];

function TopCoctails() {
  return (
    <div className="color-wrap">
      <div className="bcg-black"></div>
      <div className="coctail-section grid">
        <h2>Top coctails</h2>
        <div className="coctail-section__cards-wrap">
          <div className="coctail-section__cards">
            {cardCoctails.map((object) => (
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
    </div>
  );
}

export default TopCoctails;
