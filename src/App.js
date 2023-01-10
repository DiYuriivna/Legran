import React from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Main from "./components/Main";

import { Form } from "./components/Form";
import { AboutDish } from "./pages/AboutDish";
import { ScrollToTop } from "./components/ScrollToTop";
import { Orders } from "./components/Orders";

export const MyContext = React.createContext();

function App() {
  const [isItemClicked, setItemClicked] = React.useState(false);
  const [isDrinkItemClicked, setDrinkItemClicked] = React.useState(false);

  const [cartItems, setCartItems] = React.useState(
    []
  ); /* Massive items in the cart */
  const [infoNewDish, setInfoNewDish] = React.useState([]);

  /*-------------- Ask server for cards massives---------------------------*/
  React.useEffect(() => {
    axios
      .get("https://638efcb04ddca317d7eb1ec5.mockapi.io/items")
      .then((resp) => setInfoNewDish(resp.data));
    axios
      .get("https://638efcb04ddca317d7eb1ec5.mockapi.io/cart")
      .then((resp) => setCartItems(resp.data));
  }, []);

  /*-------------- Add and delete cards from cart  ---------------------------*/

  const onClickPlus = (product) => {
    const srcs = cartItems.map((el) => el.src);
    srcs.includes(product.src) ? remove(product) : addToCart(product);
  };

  const addToCart = async (product) => {
    await axios.post(
      "https://638efcb04ddca317d7eb1ec5.mockapi.io/cart",
      product
    );
    await axios
      .get("https://638efcb04ddca317d7eb1ec5.mockapi.io/cart")
      .then((resp) => setCartItems(resp.data));
  };

  const remove = (product) => {
    const newArr = cartItems.map((item) => item.src);

    const index = newArr.indexOf(product.src);
    const id = cartItems[index].id;

    deleteItemFromCart(id);
  };

  const deleteItemFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    axios.delete(`https://638efcb04ddca317d7eb1ec5.mockapi.io/cart/${id}`);
  };
  /*---------------------Open About PAge------------------------------------*/
  const [itemObject, setItemObject] = React.useState({});

  const openAboutPage = async (obj) => {
    setItemObject(obj);
  };

  /*------------------- RETURN ------------------------------*/

  return (
    <>
      <MyContext.Provider
        value={{
          itemObject,
          onClickPlus,
          cartItems,
          setCartItems,
          infoNewDish,
          setInfoNewDish,
          addToCart,
          remove,
          deleteItemFromCart,
          openAboutPage,
          isItemClicked,
          setItemClicked,
          isDrinkItemClicked,
          setDrinkItemClicked,
        }}
      >
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="" element={<Main />}></Route>
          <Route path="form" element={<Form />}></Route>
          <Route path="cart" element={<Cart cartItems={cartItems} />}></Route>
          <Route
            path="about"
            element={
              <AboutDish
                setItemObject={setItemObject}
                itemObject={itemObject}
                ingredients={itemObject.ingredients}
                size={itemObject.size}
                price={itemObject.price}
                src={itemObject.src}
                caption={itemObject.caption}
                description={itemObject.description}
                onClickPlus={onClickPlus}
                quantity={itemObject.quantity}
              />
            }
          ></Route>
          <Route path="orders" element={<Orders />}></Route>
        </Routes>
        <Footer />
      </MyContext.Provider>
    </>
  );
}

export default App;
