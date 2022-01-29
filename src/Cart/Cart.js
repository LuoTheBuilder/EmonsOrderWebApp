import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../Store/CartContext";
import CartItem from "./CartItem";

const Cart = (props) => {
  const ctx = useContext(CartContext);

  const totalAmount = ctx.items.reduce(
    (total, currentvalue) =>
      (total = total + currentvalue.amount * currentvalue.price),
    0
  );

  const CartItems = (
    <ul className={classes["cart-items"]}>
      {ctx.items.map((item) => (
        <li>
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
          />
        </li>
      ))}
    </ul>
  );
  return (
    <Modal>
      <h1>Your Cart</h1>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`£${totalAmount.toFixed(2)}`}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onCartClose} className={classes["button--alt"]}>
          Close
        </button>
        <button className={classes.button}>order</button>
      </div>
    </Modal>
  );
};

export default Cart;
