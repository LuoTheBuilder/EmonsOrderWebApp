import React, { useReducer } from "react";
import CartContext from "./CartContext";
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADDITEM") {
    const updatedItems = state.items.concat(action.item);
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    if (existingCartItemIndex != -1) {
      updatedItems[existingCartItemIndex].amount += action.item.amount;
      //   console.log(updatedItems[existingCartItemIndex]);
      const newTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
      return {
        items: state.items,
        totalAmount: newTotalAmount,
      };
    }
    const newTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: newTotalAmount,
    };
  }
  return {
    items: [],
    totalAmount: 0,
  };
  return defaultCartState;
};

const CartContextProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addCartHandler = (item) => {
    dispatchCartState({ type: "ADDITEM", item: item });
  };
  const removeCartHandler = (item) => {
    // dispatchCartState({ type: "REMOVEITEM", id: id });
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
