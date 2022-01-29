import React, { useReducer } from "react";
import CartContext from "./CartContext";
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADDITEM") {
    const updatedItems = state.items.concat(action.item);
    const newTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: newTotalAmount,
    };
  }
  return {
    items: ["liver"],
    totalAmount: 10,
  };
  return defaultCartState;
};

const CartContextProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addCartHandler = (item) => {
    dispatchCartState({ type: "ADDEDITEM", item: item });
  };
  const removeCartHandler = (item) => {
    dispatchCartState({ type: "REMOVEITEM", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItems: addCartHandler,
    removeItems: removeCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
