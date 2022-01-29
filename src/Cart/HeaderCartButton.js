import classes from "./HeaderCartButton.module.css";
import CartIcon from "./cartIcon";
import CartContext from "../Store/CartContext";
import { useContext } from "react";

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);

  const numberOfItems = ctx.items.reduce((curNumber, item) => {
    console.log(item.name + item.amount);
    return curNumber + item.amount;
  }, 0);
  return (
    <button onClick={props.onClick} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
