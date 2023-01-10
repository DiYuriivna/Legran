import React from "react";
import { Route, Routes } from "react-router-dom";
import { ReactComponent as PizzaIcon } from "../menu/pizza_empty.svg";
import MenuBar from "./MenuBar";
import Newdishes from "./Newdishes";
import AdsBaner from "./AdsBaner";
import TopCoctails from "./TopCoctails";
import PopularSection from "./PopularSection";
import { Empty } from "./Empty";

import { Pizza } from "../pages/Pizza";

function Main() {
  return (
    <div className="flex1">
      <MenuBar />

      <Routes>
        <Route path="pizza" element={<Pizza />}></Route>
        <Route
          path="meat"
          element={
            <Empty
              text="Empty for now"
              linkIcon={<PizzaIcon />}
              linkText="Try pizza"
            />
          }
        ></Route>
        <Route
          path="fish"
          element={
            <Empty
              text="Empty for now"
              linkIcon={<PizzaIcon />}
              linkText="Try pizza"
            />
          }
        ></Route>
        <Route
          path="soup"
          element={
            <Empty
              text="Empty for now"
              linkIcon={<PizzaIcon />}
              linkText="Try pizza"
            />
          }
        ></Route>
        <Route
          path="burger"
          element={
            <Empty
              text="Empty for now"
              linkIcon={<PizzaIcon />}
              linkText="Try pizza"
            />
          }
        ></Route>
        <Route
          path="sushi"
          element={
            <Empty
              text="Empty for now"
              linkIcon={<PizzaIcon />}
              linkText="Try pizza"
            />
          }
        ></Route>
        <Route
          path="wok"
          element={
            <Empty
              text="Empty for now"
              linkIcon={<PizzaIcon />}
              linkText="Try pizza"
            />
          }
        ></Route>
        <Route
          path="desert"
          element={
            <Empty
              text="Empty for now"
              linkIcon={<PizzaIcon />}
              linkText="Try pizza"
            />
          }
        ></Route>
        <Route
          path="cold"
          element={
            <Empty
              text="Empty for now"
              linkIcon={<PizzaIcon />}
              linkText="Try pizza"
            />
          }
        ></Route>
        <Route
          path="hot"
          element={
            <Empty
              text="Empty for now"
              linkIcon={<PizzaIcon />}
              linkText="Try pizza"
            />
          }
        ></Route>
        <Route
          path="strong"
          element={
            <Empty
              text="Empty for now"
              linkIcon={<PizzaIcon />}
              linkText="Try pizza"
            />
          }
        ></Route>
        <Route
          path="wine"
          element={
            <Empty
              text="Empty for now"
              linkIcon={<PizzaIcon />}
              linkText="Try pizza"
            />
          }
        ></Route>
        <Route
          path="beer"
          element={
            <Empty
              text="Empty for now"
              linkIcon={<PizzaIcon />}
              linkText="Try pizza"
            />
          }
        ></Route>
        <Route
          path="coctails"
          element={
            <Empty
              text="Empty for now"
              linkIcon={<PizzaIcon />}
              linkText="Try pizza"
            />
          }
        ></Route>
        <Route
          path=""
          element={
            <>
              <AdsBaner />
              <Newdishes />
              <TopCoctails />
              <PopularSection />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default Main;
