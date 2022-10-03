import { useState } from "react";

import Header from "./components/layout/Header";
import Meals from "./components/meals/Meals";
import Cart from "./components/cart/Cart";
import "./App.css";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const showCartHandler = () => {
    setCartIsVisible(true);
  };
  const hideCartHandler = () => {
    setCartIsVisible(false);
  };

  return (
    <CartProvider>
      {cartIsVisible && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
