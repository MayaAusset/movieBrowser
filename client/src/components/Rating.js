import React, { Component } from "react";

class Rating extends Component {
  render() {
    let note = Math.floor(this.props.children);
    let hearts = [];

    for (let heartsDisplayed = 0; heartsDisplayed < 10; heartsDisplayed++) {
      if (heartsDisplayed < note) {
        hearts.push("💚");
      } else {
        hearts.push("🤍");
      }
    }
    return (
      <div className="Rating">
        <p>{hearts}</p>
      </div>
    );
  }
}

export default Rating;
