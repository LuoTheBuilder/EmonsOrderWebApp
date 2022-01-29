import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const CartItems = (
    <ul className={classes["cart-items"]}>
      {[
        { id: "ch1", name: "Chicken Kurma", amount: 2, price: 5.5 },
        { id: "ch2", name: "Pilau Rice", amount: 2, price: 2.95 },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>21.95</span>
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
