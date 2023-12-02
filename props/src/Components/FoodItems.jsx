import React from "react";
import Items from "./Items";
const FoodItems = (Moto) => {
  const food = ["Zubair", "Zaid", "Rahul", "Kumar", "Raju"];

  return (
    <div className="container">
      <h1>list of students</h1>
      {
      food.map((Ghee) => (
        <Items Moto={Ghee} key={Ghee} /> // reciving name should be same
        ))
      }
    </div>
  );
};

export default FoodItems;
