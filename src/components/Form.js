import React, { Component } from "react";
import MainButton from './MainButton';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.showEntry = this.showEntry.bind(this);
  }

  handleClick(msg) {
    alert(msg);
  }

  showEntry() {
    alert(this.state.value);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        value
      };
    });
  }

  render() {
    const msg = 'This is life';

    return (
      <form>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <br/>
        <br />
        <MainButton name={'Click Me'} onClick={this.handleClick.bind(this, msg)} />
        <br/>
        <MainButton name={'What did I enter'} onClick={this.showEntry} />
      </form>
    );
  }
}

export default Form;

// We must tell our React component to hook itself into the HTML document
// const wrapper = document.getElementById("container");
// wrapper ? ReactDOM.render(<Form />, wrapper) : false;