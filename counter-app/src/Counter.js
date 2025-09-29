import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialValue || 0
    };

    /**
     * In JavaScript, the value of this inside a function depends on how the function is called, not where it is defined.
     * This ensures this.increment always has the correct context (this pointing to the component instance).
     * Arrow functions don’t have their own this — they inherit it lexically from where they are defined.
      increment = () => {
        console.log(this); // ✅ `this` is always the component instance
      }
     * You're defining increment as a class property using an arrow function, which captures the this from the surrounding context — the class.
     * Make sure the functions (like increment and decrement) always know which object (this) they belong to — in this case, the component.
     * In JavaScript classes, if you don't bind a method, it can forget what this means when it's called (like when a button is clicked). Binding fixes that.
    */


    // Bind methods to `this`
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  }

  decrement() {
    this.setState((prevState) => ({
      count: prevState.count - 1
    }));
  }

  render() {
    return React.createElement('div', { style: { textAlign: 'center' } },
      React.createElement('h2', null, `Count: ${this.state.count}`),
      React.createElement('button', { onClick: this.decrement, style: { marginRight: '10px' } }, '-'),
      React.createElement('button', { onClick: this.increment }, '+')
    );
  }
}

export default Counter;
