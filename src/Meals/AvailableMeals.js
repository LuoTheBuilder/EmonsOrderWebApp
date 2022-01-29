import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = (props) => {
  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Kurma",
      description:
        "Mild. Cooked in a mild sauce with coconut powder and cream.",
      price: 5.5,
    },
    {
      id: "m2",
      name: "Tandoori Special",
      description: "Mild. Marinated in yoghurt and a special blend of spices.",
      price: 6.95,
    },
    {
      id: "m3",
      name: "Vindaloo",
      description:
        "Very hot. Cooked in a hot sauce. Suitable for advanced curry lovers",
      price: 5.95,
    },
    {
      id: "m4",
      name: "Pilau Rice",
      description: "Basmati Rice",
      price: 2.95,
    },
    {
      id: "m5",
      name: "Peshwari Nan",
      description: "A sweet nan with coconut filling.",
      price: 2.5,
    },
    {
      id: "m6",
      name: "Popadom",
      description: "Perfect for dipping.",
      price: 0.7,
    },
  ];

  const mappedMeals = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <ul className={classes.meals}>
      <Card>{mappedMeals}</Card>
    </ul>
  );
};

export default AvailableMeals;
