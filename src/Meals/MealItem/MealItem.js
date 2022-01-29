import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../Store/CartContext";

const MealItem = (props) => {
  const ctx = useContext(CartContext);
  const price = `£${props.price.toFixed(2)}`;
  const addToCartHander = (enteredAmount) => {
    ctx.addItems({
      id: props.id,
      name: props.name,
      amount: enteredAmount,
      price: props.price,
    });
  };

  return (
    <div className={classes.meal}>
      <div>
        <div>
          <h3>{props.name}</h3>
        </div>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        <div> </div>
      </div>
      <MealItemForm onAddToCart={addToCartHander} />
    </div>
  );
};

export default MealItem;
