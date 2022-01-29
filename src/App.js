import { useState } from "react";
import Header from "./Layout/Header";
import Cart from "./Cart/Cart";
import CartContextProvider from "./Store/CartContextProvider";

import Meals from "./Meals/Meals";
function App() {
  const [cartState, setCartState] = useState(false);
  const cartOpenHandler = () => {
    setCartState(true);
  };
  const cartCloseHandler = () => {
    setCartState(false);
  };
  return (
    <CartContextProvider>
      {cartState && <Cart onCartClose={cartCloseHandler} />}
      <Header onShowCart={cartOpenHandler} />
      <Meals />
    </CartContextProvider>
  );
}

export default App;
