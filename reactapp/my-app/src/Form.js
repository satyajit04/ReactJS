import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
        profile1: '',
        profile2: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
                    [event.target.name]: event.target.value
                    //profile2: event.target.value
                  });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.profile1 + '-' + this.state.profile2);
    event.preventDefault();
    if(this.props.onSubmit && typeof this.props.onSubmit === "function"){
      this.props.onSubmit(this.state.profile1);
    }
  }

  render() {
     return (
       <form onSubmit={this.handleSubmit}>
          <label>
            Profile 1 : &nbsp;
          </label>
            <input type="text" name="profile1" placeholder="Login name..." value={this.state.profile1} onChange={this.handleChange} />
          <br></br><br></br>
          <label>
            Profile 2 : &nbsp;
          </label>
            <input type="text" name="profile2" placeholder="Login name..." value={this.state.profile2} onChange={this.handleChange} />
            <br></br><br></br><button>Enter</button>
       </form>
     );
  }
}

export default Form;

/*
const Form = props => (
	<form onSubmit={props.getUser}>
		<input type="text" name="login" placeholder="Login name..."/>
		<button>Enter</button>
	</form>
);
*/
