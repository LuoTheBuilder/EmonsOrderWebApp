import { useState } from "react";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";
import Cart from "./Cart/Cart";
import CartContextProvider from "./Store/CartContextProvider";
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
      <h2>Let's get started!</h2>
    </CartContextProvider>
  );
}

export default App;
