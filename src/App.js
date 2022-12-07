import Header from "./components/Header";
import Newdishes from "./components/Newdishes";
import MenuBar from "./components/MenuBar";
import AdsBaner from "./components/AdsBaner";
import TopCoctails from "./components/TopCoctails";
import PopularSection from "./components/PopularSection";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import React from "react";
import axios from "axios";

function App() {
  const [cartItems, setCartItems] = React.useState([]);
  const [infoNewDish, setInfoNewDish] = React.useState([]);
  React.useEffect(() => {
    // fetch("https://638efcb04ddca317d7eb1ec5.mockapi.io/items")
    //   .then((resp) => resp.json())
    //   .then((json) => setInfoNewDish(json));
    axios
      .get("https://638efcb04ddca317d7eb1ec5.mockapi.io/items")
      .then((resp) => console.log("123"));
  }, []);

  return (
    <>
      <Header />
      <Cart arr={cartItems} />
      <MenuBar />
      <AdsBaner />
      <Newdishes
        infoNewDish={infoNewDish}
        // nax={(product) => {
        //   const srcs = cartItems.map((el) => el.src);
        //   console.log(srcs.includes(product.src));
        // }}
        nax={(product) => {
          const srcs = cartItems.map((el) => el.src);
          const index = srcs.indexOf(product.src);
          srcs.includes(product.src)
            ? cartItems.splice(index, 1)
            : setCartItems([...cartItems, product]);
          console.log(cartItems);
          // console.log(product);
          // console.log(cartItems.includes(product));
        }}
      />
      <TopCoctails />
      <PopularSection />
      <Footer />
    </>
  );
}

export default App;
