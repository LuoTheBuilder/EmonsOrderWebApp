import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mainImage from "../assets/meals2.jfif";
import logoImage from "../assets/emonslogoBW.png";
import HeaderCartButton from "../Cart/HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div>
          <img className={classes.logo} src={logoImage} />
        </div>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mainImage} />
      </div>
    </Fragment>
  );
};

export default Header;
