import React, { Component } from 'react';

class Rating extends Component {
  render() {
    let n = this.props.children
    return (
      <div className="Rating">
        {n >= 1 ? '★' : '☆'}
        {n >= 2 ? '★' : '☆'}
        {n >= 3 ? '★' : '☆'}
        {n >= 4 ? '★' : '☆'}
        {n >= 5 ? '★' : '☆'}
        {n >= 6 ? '★' : '☆'}
        {n >= 7 ? '★' : '☆'}
        {n >= 8 ? '★' : '☆'}
        {n >= 9 ? '★' : '☆'}
        {n >= 10 ? '★' : '☆'}
      </div>
    );
  }
}

export default Rating;