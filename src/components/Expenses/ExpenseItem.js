import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExprenseItem.css";

const ExpenseItem = (props) => {
  //first element receive the value of the useState("value")
  //second is a function that needs a paramether as a value eg. setTitle("updated")
  const [title, setTitle] = useState(props.title);

  // function clickHandler() {
  //   setTitle("updated");
  // }

  const clickHandler = () => {
    setTitle("updated");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
