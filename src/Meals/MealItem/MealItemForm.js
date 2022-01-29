import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount1 = amountInputRef.current.value;
    const enteredAmount = +enteredAmount1;

    if (enteredAmount <= 0) {
      setAmountIsValid(false);
      return;
    }
    setAmountIsValid(true);
    props.onAddToCart(enteredAmount);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input ref={amountInputRef} label="Amount" type="text" placeholder="0" />
      <button>+ Add</button>
      {!amountIsValid && <p>That isn't Valid!</p>}
    </form>
  );
};

export default MealItemForm;
