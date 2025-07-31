import React, { Component } from 'react';
import './App.css'; 

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: '',
      euro: ''
    };
  }

  handleChange = (e) => {
    this.setState({ rupees: e.target.value });
  };

  handleSubmit = () => {
    const rate = 0.01;
    const euro = this.state.rupees * rate;
    this.setState({ euro: euro.toFixed(2) });
  };

  render() {
    return (
      <div className="currency-box">
        <h2>Currency Convertor !!!</h2>
        <input
          type="number"
          placeholder="Enter amount in Rupees"
          value={this.state.rupees}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Convert</button>
        <h3>Equivalent in Euro: € {this.state.euro}</h3>
      </div>
    );
  }
}

export default CurrencyConvertor;
