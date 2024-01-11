import React, { Component } from "react";
import "../Components/resources/foodbox.css";

export default class Foodbox extends Component {
  constructor() {
    super();
    this.state = {
      countNo: 0,
      countcal: 0,
    };
  }
  render() {
    let { countNo, countcal } = this.state;
    let handleQuantity = (event) => {
      this.setState({ countNo: event.target.value });
    };
    let handleCalories = () => {
      this.setState({ countcal: this.props.cal * countNo });
    };
    return (
      <>
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={this.props.img} width={"300px"} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{this.props.name}</strong> <br />
                  <small>{this.props.cal}</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input"
                    type="number"
                    placeholder="Enter the Number"
                    onChange={handleQuantity}
                  />
                </div>
                <div className="control">
                  <button className="button is-info" onClick={handleCalories}>
                    +
                  </button>
                </div>
              </div>
            </div>
          </article>
          <div>
            <h2>
              {countNo} {this.props.name} = {countcal} Calories
            </h2>
          </div>
        </div>
      </>
    );
  }
}
