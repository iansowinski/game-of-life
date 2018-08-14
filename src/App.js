import React, { Component } from 'react';
import Rows from './components/Rows'
import './App.css';

class App extends Component {
  render() {
    const generateTable = (x, y) => {
      return Array(x).fill(Array(y).fill(0));
    };
    const arr = generateTable(20, 20);
    return (
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Rows arr={arr}></Rows>
      </div>
    );
  }
}

export default App;
