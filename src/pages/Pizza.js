import React, { useEffect } from "react";
import { Div } from "../components/Div";

export const Pizza = ({ setItemClicked, setDrinkItemClicked }) => {
  const [pizzaItems] = React.useState([
    {
      divCapture: "Top ordering",
      items: [
        {
          size: "10 sm  |  400 gr",
          ingredients:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id semper risus in hendrerit gravida rutrum quisque non tellus.",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          src: "assets/pizza/Prosciutto.png",
          srcmob:
            "assets/pizza/Prosciuttomob.png 575w, assets/pizza/Prosciutto.png 1200w",
          caption: "Prosciutto e funghi",
          price: 25,
          quantity: 1,
        },
        {
          size: "10 sm  |  400 gr",
          ingredients:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id semper risus in hendrerit gravida rutrum quisque non tellus.",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          src: "assets/pizza/Detroit.png",
          srcmob:
            "assets/pizza/Detroitmob.png 575w, assets/pizza/Detroit.png 1200w",
          caption: "Detroit-Style",
          price: 18,
          quantity: 1,
        },
      ],
    },
    {
      divCapture: "Classic",
      items: [
        {
          size: "10 sm  |  400 gr",
          ingredients:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id semper risus in hendrerit gravida rutrum quisque non tellus.",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          src: "assets/pizza/Margarita.png",
          srcmob:
            "assets/pizza/Margaritamob.png 575w, assets/pizza/Margarita.png 1200w",
          caption: "Margarita",
          price: 15,
          quantity: 1,
        },
        {
          size: "10 sm  |  400 gr",
          ingredients:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id semper risus in hendrerit gravida rutrum quisque non tellus.",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          src: "assets/pizza/Fiori.png",
          srcmob:
            "assets/pizza/Fiorimob.png 575w, assets/pizza/Fiori.png 1200w",
          caption: "Fiori di zucca",
          price: 26,
          quantity: 1,
        },
        {
          size: "10 sm  |  400 gr",
          ingredients:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id semper risus in hendrerit gravida rutrum quisque non tellus.",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          src: "assets/pizza/Vegetariana.png",
          srcmob:
            "assets/pizza/Vegetarianamob.png 575w, assets/pizza/Vegetariana.png 1200w",
          caption: "Vegetariana",
          price: 18,
          quantity: 1,
        },
        {
          size: "10 sm  |  400 gr",
          ingredients:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id semper risus in hendrerit gravida rutrum quisque non tellus.",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          src: "assets/pizza/Apizza.png",
          srcmob:
            "assets/pizza/Apizzamob.png 575w, assets/pizza/Apizza.png 1200w",
          caption: "Apizza",
          price: 16,
          quantity: 1,
        },
        {
          size: "10 sm  |  400 gr",
          ingredients:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id semper risus in hendrerit gravida rutrum quisque non tellus.",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          src: "assets/pizza/Padellino.png",
          srcmob:
            "assets/pizza/Padellinomob.png 575w, assets/pizza/Padellino.png 1200w",
          caption: "Al padellino",
          price: 22,
          quantity: 1,
        },
      ],
    },
    {
      divCapture: "Spicy",
      items: [
        {
          size: "10 sm  |  400 gr",
          ingredients:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id semper risus in hendrerit gravida rutrum quisque non tellus.",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          src: "assets/pizza/Pugliese.png",
          srcmob:
            "assets/pizza/Pugliesemob.png 575w, assets/pizza/Pugliese.png 1200w",
          caption: "Pugliese",
          price: 20,
          quantity: 1,
        },
        {
          size: "10 sm  |  400 gr",
          ingredients:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id semper risus in hendrerit gravida rutrum quisque non tellus.",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          src: "assets/pizza/Stuffed.png",
          srcmob:
            "assets/pizza/Stuffedmob.png 575w, assets/pizza/Stuffed.png 1200w",
          caption: "Stuffed",
          price: 23,
          quantity: 1,
        },
      ],
    },
    {
      divCapture: "Vegeterian",
      items: [
        {
          size: "10 sm  |  400 gr",
          ingredients:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id semper risus in hendrerit gravida rutrum quisque non tellus.",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          src: "assets/pizza/Fiori.png",
          srcmob:
            "assets/pizza/Fiorimob.png 575w, assets/pizza/Fiori.png 1200w",
          caption: "Fiori di zucca",
          price: 18,
          quantity: 1,
        },
        {
          size: "10 sm  |  400 gr",
          ingredients:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id semper risus in hendrerit gravida rutrum quisque non tellus.",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          src: "assets/pizza/Vegetariana.png",
          srcmob:
            "assets/pizza/Vegetarianamob.png 575w, assets/pizza/Vegetariana.png 1200w",
          caption: "Vegetariana",
          price: 22,
          quantity: 1,
        },
        {
          size: "10 sm  |  400 gr",
          ingredients:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id semper risus in hendrerit gravida rutrum quisque non tellus.",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          src: "assets/pizza/Apizza.png",
          srcmob:
            "assets/pizza/Apizzamob.png 575w, assets/pizza/Apizza.png 1200w",
          caption: "Apizza",
          price: 16,
          quantity: 1,
        },
        {
          size: "10 sm  |  400 gr",
          ingredients:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id semper risus in hendrerit gravida rutrum quisque non tellus.",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          src: "assets/pizza/Padellino.png",
          srcmob:
            "assets/pizza/Padellinomob.png 575w, assets/pizza/Padellino.png 1200w",
          caption: "Al padellino",
          price: 22,
          quantity: 1,
        },
      ],
    },
  ]);
  useEffect(() => {
    setItemClicked(true);
    setDrinkItemClicked(false);
  }, []);
  return (
    <div className="pizza">
      {pizzaItems.map((obj) => (
        <Div divCapture={obj.divCapture} items={obj.items} />
      ))}
    </div>
  );
};
