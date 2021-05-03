/** @format */

import React, { useState, useEffect } from "react";
import loadable from "@loadable/component";

import { commerce } from "./lib/commerce";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Cart from "./Cart/Cart";

const Secondpage = loadable(() => import("./secondpage/Secondpage"));
const Firstpage = loadable(() => import("./Firstpage/Firstpage"));
const Thirdpage = loadable(() => import("./thirdpage/Thirdpage"));
const Fortpage = loadable(() => import("./forthpage/Forthpage"));
const Fifthpage = loadable(() => import("./Fifthpage/Fifthpage"));
const Checkout = loadable(() => import("./checkout/Checkout"));
const Contact = loadable(() => import("./contact/Contact"));
const Shoes = loadable(() => import("./ShoeItems/Shoes"));
const AllShoe = loadable(() => import("./Allshoe/AllShoe"));
const Itemselected = loadable(() => import("./SelectedItem/Itemselected"));

require("dotenv").config();

function App() {
  const [products, setProducts] = useState([]);
  const [items, setItem] = useState({});
  const [cart, setCart] = useState([]);
  const [sidebar, setSidebar] = useState(false);
  const [order, setOrder] = useState({});
  const [error, setError] = useState("");

  function handleBars(x) {
    if (x === true) {
      return setSidebar(true);
    }
    setSidebar(!sidebar);
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const fetchProducts = async () => {
    const data = await commerce.products.list();

    setProducts(data.data);
  };
  const retrieveProduct = async (productId) => {
    const item = await commerce.products.retrieve(productId);
    setItem(item);
  };
  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    setCart(cart);
  };
  const addToCart = async (id, quantity) => {
    const addToCart = await commerce.cart.add(id, quantity);
    setCart(addToCart.cart);
  };

  const updateToCart = async (product_id, quantity) => {
    const updateToCart = await commerce.cart.update(product_id, { quantity });
    setCart(updateToCart.cart);
  };
  const deleteItem = async (product_id) => {
    const deletedItem = await commerce.cart.remove(product_id);
    setCart(deletedItem.cart);
  };
  const emptyCart = async () => {
    const cart2 = await commerce.cart.empty();
    setCart(cart2.cart);
  };

  const handleCapture = async (checkouttokenId, newOrder) => {
    try {
      const capture = await commerce.checkout.capture(
        checkouttokenId,
        newOrder
      );
      setOrder(capture);
      console.log(capture);
    } catch (error) {
      setError(error.data.error.message);
    }
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Firstpage
            getProduct={retrieveProduct}
            cart={cart}
            handleBars={handleBars}
            sidebar={sidebar}
          />
          <Secondpage handleToCart={addToCart} handleBars={handleBars} />
          <Thirdpage handleToCart={addToCart} />
          <Fortpage handleToCart={addToCart} />
          <Fifthpage handleToCart={addToCart} />
          <Shoes />
          <Contact />
        </Route>
        <Route path="/items/cart" exact>
          <Cart
            cart={cart}
            handleToUpdate={updateToCart}
            deleteItem={deleteItem}
            emptyCart={emptyCart}
          />
        </Route>
        <Route path="/items/checkout" exact>
          <Checkout
            cart={cart}
            handleCapture={handleCapture}
            order={order}
            error={error}
          />
        </Route>
        <Route path="/items" exact>
          <AllShoe
            getProduct={retrieveProduct}
            products={products}
            handleToCart={addToCart}
            cart={cart}
          />
        </Route>
        <Route items={items} path="/items/:id" exact>
          <Itemselected />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
