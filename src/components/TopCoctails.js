import Card from "./Card";
const cardCoctails = [
  {
    ingredients:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id semper risus in hendrerit gravida rutrum quisque non tellus.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    size: "10 sm  |  400 gr",
    src: "assets/c1.png",
    srcmob: "assets/c1mob.png 575w, assets/c1.png 1200w",
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
    srcmob: "assets/c2mob.png 575w, assets/c2.png 1200w",
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
    srcmob: "assets/c3mob.png 575w, assets/c3.png 1200w",
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
    srcmob: "assets/c4mob.png 575w, assets/c4.png 1200w",
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
    srcmob: "assets/c5mob.png 575w, assets/c5.png 1200w",
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
                srcmob={object.srcmob}
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
