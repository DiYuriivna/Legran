import Card from "./Card";

function PopularSection() {
  let i = 1;
  const infoPopularDish = [
    {
      size: "10 sm  |  400 gr",
      ingredients:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id semper risus in hendrerit gravida rutrum quisque non tellus.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      src: "assets/p1.png",
      srcmob: "assets/p1mob.png 1x, assets/p1mob2x.png 2x",
      caption: "Bruschetta with avocado",
      price: 9,
      quantity: 1,
    },
    {
      size: "10 sm  |  400 gr",
      ingredients:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id semper risus in hendrerit gravida rutrum quisque non tellus.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      src: "assets/p2.png",
      srcmob: "assets/p2mob.png 1x, assets/p2mob2x.png 2x",
      caption: "Beef burger with teriyaki sauce",
      price: 22,
      quantity: 1,
    },
    {
      size: "10 sm  |  400 gr",
      ingredients:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id semper risus in hendrerit gravida rutrum quisque non tellus.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      src: "assets/p3.png",
      srcmob: "assets/p3mob.png 1x, assets/p3mob2x.png 2x",
      caption: "Bolognese with meat balls",
      price: 17,
      quantity: 1,
    },
    {
      size: "10 sm  |  400 gr",
      ingredients:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id semper risus in hendrerit gravida rutrum quisque non tellus.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      src: "assets/p4.png",
      srcmob: "assets/p4mob.png 1x, assets/p4mob2x.png 2x",
      caption: "Tomat spicy soup",
      price: 12,
      quantity: 1,
    },
    {
      size: "10 sm  |  400 gr",
      ingredients:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id semper risus in hendrerit gravida rutrum quisque non tellus.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      src: "assets/p5.png",
      srcmob: "assets/p5mob.png 1x, assets/p5mob2x.png 2x",
      caption: "Beef cheeseburger with bacon ",
      price: 22,
      quantity: 1,
    },
    {
      size: "10 sm  |  400 gr",
      ingredients:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id semper risus in hendrerit gravida rutrum quisque non tellus.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      src: "assets/p7.png",
      srcmob: "assets/p7mob.png 1x, assets/p7mob2x.png 2x",
      caption: "Honey pancakes",
      price: 16,
      quantity: 1,
    },
    {
      size: "10 sm  |  400 gr",
      ingredients:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id semper risus in hendrerit gravida rutrum quisque non tellus.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      src: "assets/p6.png",
      srcmob: "assets/p6mob.png 1x, assets/p6mob2x.png 2x",
      caption: "Brazilian fish stewe",
      price: 29,
      quantity: 1,
    },
  ];
  return (
    <div className="color-wrap">
      <div className="bcg-pink"></div>
      <div className="grid">
        <div className="popular">
          <h2 className="popular__title">The most ordered dishes</h2>
          <p className="popular__para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exe
          </p>
          {infoPopularDish.map((object) => (
            <div className={`popular__p${i++}`}>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularSection;
