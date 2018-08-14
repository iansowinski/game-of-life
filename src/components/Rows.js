import React, { Component } from 'react';
import './Rows.css';

class Row extends Component {
  render() {
    const NumberList = (props) => {
      const numbers = this.props.arr;
        const listItems = numbers.map((number, index) => {
          if (number === 1) {
            return <div key={index.toString()} className="full"></div>
          } else {
            return <div key={index.toString()} className="empty"></div>
          }
      });
      return <div className="Row">{listItems}</div>
    };
    return (
      <NumberList numbers={this.props.arr} />
    );
  }
}

class Rows extends Component {
  render() {
    const NumberList = (props) => {
      const numbers = this.props.arr;
      const listItems = numbers.map((number, index) => {
        return <Row key={index.toString()} arr={number}></Row>
      });
      return <div>{listItems}</div>
    }
    return (
      <NumberList numbers={this.props.arr}></NumberList>
    )
  }
}

export default Rows;
