import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    let content;

    if (this.state.isLoggedIn) {
      content = (
        <div>
          <h2>Welcome, User!</h2>
          <p>✈️ Flight: Chennai → Delhi</p>
          <p>🕒 Time: 08:00 AM</p>
          <p>💺 Price: ₹4,500</p>
          <button onClick={() => alert('Ticket booked!')}>Book Ticket</button>
          <br /><br />
          <button onClick={this.handleLogout}>Logout</button>
        </div>
      );
    } else {
      content = (
        <div>
          <h2>Welcome, Guest!</h2>
          <p>✈️ Flight: Chennai → Delhi</p>
          <p>🕒 Time: 08:00 AM</p>
          <p>💺 Price: ₹4,500</p>
          <p><i>Login to book your ticket</i></p>
          <button onClick={this.handleLogin}>Login</button>
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Flight Ticket Booking App</h1>
        {content}
      </div>
    );
  }
}

export default App;
