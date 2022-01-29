import React from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input label="Amount" type="text" placeholder="0" />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
