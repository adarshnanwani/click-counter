import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    counter: 0,
    error: false,
  };

  clickHandler = (val) => {
    const currentCount = this.state.counter;
    const newCount = currentCount + val;
    if (newCount < 0) {
      this.setState({
        counter: 0,
        error: true,
      });
    } else {
      this.setState({
        counter: newCount,
        error: false,
      });
    }
  };
  render() {
    return (
      <div data-test='component-app'>
        <h1 data-test='counter-display'>
          The counter is currently {this.state.counter}
        </h1>
        <button
          data-test='increment-button'
          onClick={() => this.clickHandler(1)}
        >
          Increment
        </button>
        <button
          data-test='decrement-button'
          onClick={() => this.clickHandler(-1)}
        >
          Decrement
        </button>
        {this.state.error && (
          <h4 data-test='error-message'>Counter can't go below zero</h4>
        )}
      </div>
    );
  }
}

export default App;
