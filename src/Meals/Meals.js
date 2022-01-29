import React, { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";
import classes from "./Meals.module.css";
import MenuSelect from "./MealItem/MenuSelect";
const Meals = (props) => {
  return (
    <Fragment>
      <div className={classes.leftbar}>
        <MenuSelect />
      </div>
      <div className={classes.rightbar}>
        <MealsSummary />
        <AvailableMeals />
      </div>
    </Fragment>
  );
};

export default Meals;
