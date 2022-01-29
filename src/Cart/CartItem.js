import React, { useContext } from "react";
import classes from "./CartItem.module.css";
import CartContext from "../Store/CartContext";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const ctx = useContext(CartContext);
  const onAdd = () => {
    ctx.addItems({
      id: props.id,
      name: props.name,
      amount: 1,
      price: props.price,
    });
  };

  const onRemove = () => {
    ctx.addItems({
      id: props.id,
      name: props.name,
      amount: -1,
      price: props.price,
    });
  };

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
