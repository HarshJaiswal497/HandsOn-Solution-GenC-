import React, { Component } from 'react';
import './App.css';
import CurrencyConvertor from './CurrencyConvertor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      message: ''
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  increase = () => {
    this.increment();
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayWelcome = (msg) => {
    this.setState({ message: msg });
  };

  handleClick = (e) => {
    alert("I was clicked");
    console.log("Click on me Event: ", e);
  };
  handleClickWelcome = (e) => {
    alert("welcome");
    console.log("Say Welcome Event: ", e);
  };

  render() {
    return (
      <div className="App">
        <h1>React Event Handling Example</h1>

        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.increase}>Increase</button>
        <button onClick={this.decrement}>Decrease</button>

        <hr />

        <button onClick={this.handleClickWelcome}>Say Welcome</button>

        <hr />

        <button onClick={this.handleClick}>Click on me</button>

        <hr />

        <CurrencyConvertor />

        <h3>{this.state.message}</h3>
      </div>
    );
  }
}

export default App;
