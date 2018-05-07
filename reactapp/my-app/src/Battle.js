import React, { Component } from "react";
import Form from "./Form";
import axios from "axios";
//import Profile_details from "./Profile_details";

class Battle extends Component {



  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default Battle;
