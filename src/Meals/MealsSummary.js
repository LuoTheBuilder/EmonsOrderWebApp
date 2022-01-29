import classes from "./MealsSummary.module.css";
import logoimage from "../assets/emonslogoBW.png";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <img className={classes.logoimage} src={logoimage} />
      <h2>Emon's Indian Takeaway</h2>
      <p>12 Shirley Road, Southampton, SO15 3EU</p>
      <p>
        Southampton's premier curry house, specializing in spice and Tandoori
        dishes. Let the spice ROAR!
      </p>
    </section>
  );
};

export default MealsSummary;
