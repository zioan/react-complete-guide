import React from "react";
import "./Card.css";

const Card = (props) => {
  //Composition (children props)
  //this will allow access to classes asigned to the component in parent components
  //ex  <Card className="expense-item">

  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Card;
