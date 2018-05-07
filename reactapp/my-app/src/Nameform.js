import React, { Component } from "react";

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    if(this.props.onSubmit && typeof this.props.onSubmit === "function"){
      this.props.onSubmit(this.state.value);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Login name..." value={this.state.value} onChange={this.handleChange} />
        <button>Enter</button>
      </form>
    );
  }
}

export default NameForm;
