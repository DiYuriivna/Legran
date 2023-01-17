import React, { useEffect } from "react";
import axios from "axios";
import { Route, Routes, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Main from "./components/Main";

import { Form } from "./components/Form";
import { AboutDish } from "./pages/AboutDish";
import { ScrollToTop } from "./components/ScrollToTop";
import { Orders } from "./components/Orders";

import Newdishes from "./components/Newdishes";
import AdsBaner from "./components/AdsBaner";
import TopCoctails from "./components/TopCoctails";
import PopularSection from "./components/PopularSection";
import { Empty } from "./components/Empty";
import { ReactComponent as PizzaIcon } from "./menu/pizza_empty.svg";
import MenuBar from "./components/MenuBar";
import { Pizza } from "./pages/Pizza";

export const MyContext = React.createContext();

function App() {
  /*------------ menu bar ----------*/
  const [isItemClicked, setItemClicked] = React.useState(false);
  const [isDrinkItemClicked, setDrinkItemClicked] = React.useState(false);

  const location = useLocation(); /* swapping menu bar on main page */
  useEffect(() => {
    if (location.pathname === "/") {
      if (isItemClicked) {
        setItemClicked(false);
      } else if (isDrinkItemClicked) {
        setDrinkItemClicked(false);
      }
    }
  }, [location]);

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
          {/* <Route exact path="/" element={<Main />}></Route> */}
          <Route
            exact
            path="/"
            element={
              <>
                <MenuBar />
                <AdsBaner />
                <Newdishes />
                <TopCoctails />
                <PopularSection />
              </>
            }
          ></Route>
          <Route
            exact
            path="/beer"
            element={
              <>
                <MenuBar />
                <Empty
                  text="Empty for now"
                  linkIcon={<PizzaIcon />}
                  linkText="Try pizza"
                />
              </>
            }
          ></Route>
          <Route
            exact
            path="/pizza"
            element={
              <>
                <MenuBar />{" "}
                <Pizza
                  setItemClicked={setItemClicked}
                  setDrinkItemClicked={setDrinkItemClicked}
                />
              </>
            }
          ></Route>
          <Route
            exact
            path="/meat"
            element={
              <>
                <MenuBar />
                <Empty
                  text="Empty for now"
                  linkIcon={<PizzaIcon />}
                  linkText="Try pizza"
                />
              </>
            }
          ></Route>
          <Route
            exact
            path="/fish"
            element={
              <>
                <MenuBar />
                <Empty
                  text="Empty for now"
                  linkIcon={<PizzaIcon />}
                  linkText="Try pizza"
                />
              </>
            }
          ></Route>
          <Route
            exact
            path="/soup"
            element={
              <>
                <MenuBar />
                <Empty
                  text="Empty for now"
                  linkIcon={<PizzaIcon />}
                  linkText="Try pizza"
                />
              </>
            }
          ></Route>
          <Route
            exact
            path="/burger"
            element={
              <>
                <MenuBar />
                <Empty
                  text="Empty for now"
                  linkIcon={<PizzaIcon />}
                  linkText="Try pizza"
                />
              </>
            }
          ></Route>
          <Route
            exact
            path="/sushi"
            element={
              <>
                <MenuBar />
                <Empty
                  text="Empty for now"
                  linkIcon={<PizzaIcon />}
                  linkText="Try pizza"
                />
              </>
            }
          ></Route>
          <Route
            exact
            path="/wok"
            element={
              <>
                <MenuBar />
                <Empty
                  text="Empty for now"
                  linkIcon={<PizzaIcon />}
                  linkText="Try pizza"
                />
              </>
            }
          ></Route>
          <Route
            exact
            path="/desert"
            element={
              <>
                <MenuBar />
                <Empty
                  text="Empty for now"
                  linkIcon={<PizzaIcon />}
                  linkText="Try pizza"
                />
              </>
            }
          ></Route>
          <Route
            exact
            path="/cold"
            element={
              <>
                <MenuBar />
                <Empty
                  text="Empty for now"
                  linkIcon={<PizzaIcon />}
                  linkText="Try pizza"
                />
              </>
            }
          ></Route>
          <Route
            exact
            path="/hot"
            element={
              <>
                <MenuBar />
                <Empty
                  text="Empty for now"
                  linkIcon={<PizzaIcon />}
                  linkText="Try pizza"
                />
              </>
            }
          ></Route>
          <Route
            exact
            path="/strong"
            element={
              <>
                <MenuBar />
                <Empty
                  text="Empty for now"
                  linkIcon={<PizzaIcon />}
                  linkText="Try pizza"
                />
              </>
            }
          ></Route>
          <Route
            exact
            path="/wine"
            element={
              <>
                <MenuBar />
                <Empty
                  text="Empty for now"
                  linkIcon={<PizzaIcon />}
                  linkText="Try pizza"
                />
              </>
            }
          ></Route>

          <Route
            exact
            path="/coctails"
            element={
              <>
                <MenuBar />
                <Empty
                  text="Empty for now"
                  linkIcon={<PizzaIcon />}
                  linkText="Try pizza"
                />
              </>
            }
          ></Route>

          <Route exact path="/form" element={<Form />}></Route>
          <Route
            exact
            path="/cart"
            element={<Cart cartItems={cartItems} />}
          ></Route>
          <Route
            exact
            path="/about"
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
          <Route exact path="/orders" element={<Orders />}></Route>
        </Routes>
        <Footer />
      </MyContext.Provider>
    </>
  );
}

export default App;
