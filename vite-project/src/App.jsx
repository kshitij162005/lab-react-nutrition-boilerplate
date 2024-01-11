import React, { Component } from "react";
import FoodBox from "../src/Components/Foodbox";
import FoodData from "../src/Components/resources/FoodData";
import "../src/App.css"

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      newArr: FoodData,
    };
  }
  render() {
    let { newArr } = this.state;
    let handleChange = (event) => {
      let filteredFood = FoodData.filter((el, i) => {
        return el.name.includes(event.target.value);
      });
      this.setState({ newArr: filteredFood });
    };
    
    return (
      <div>
        <div>
          <input
          className="maininput"
            type="text"
            placeholder="Search Food Here"
            onChange={handleChange}
          />
        </div>
        {newArr.map((el, i) => (
          <FoodBox key={i} {...el} />
        ))}
      </div>
    );
  }
}
