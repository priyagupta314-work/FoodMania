import React, { useState } from "react";
import "./styles.css";

const foodOptions = {
  North: ["Stuffed Paratha", "Puri Sabzi", "Poha", "Chole Bhature"],
  East: ["Khar", "Sandesh", "Kelli Chana"],
  West: ["Undhiyu", "Thepla"],
  South: ["Dosa", "Idli", "Lemon Rice"]
};
const zoneList = ["North", "South", "East", "West"];
export default function App() {
  const [zoneFood, setZoneFood] = useState("");
  function zoneClickHandler(zone) {
    var zoneFood = foodOptions[zone];
    setZoneFood(zoneFood);
    console.log(zoneFood);
  }
  // below statement was added as
  // map function didn't work on zoneFood
  var foodList = Object.values(zoneFood);

  return (
    <div className="App">
      <h1> 😋 Food Mania</h1>
      <p> Check out some delicous food options in India </p>
      <ul>
        {" "}
        {zoneList.map((zone) => (
          <li
            id="zones"
            onClick={() => zoneClickHandler(zone)}
            style={{
              listStyle: "none",
              display: "inline",
              padding: "0.5rem",
              cursor: "pointer"
            }}
          >
            {zone}
          </li>
        ))}{" "}
      </ul>
      <hr />
      <h3>
        {" "}
        {foodList.map((item) => (
          <li
            style={{
              listStyle: "none",
              padding: "0.5rem",
              borderStyle: "solid",
              margin: "1rem 10%"
            }}
          >
            {" "}
            {item}
          </li>
        ))}{" "}
      </h3>
    </div>
  );
}
