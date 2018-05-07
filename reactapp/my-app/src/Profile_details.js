import React, { Component } from "react";
import ReactDOM from 'react-dom';
import axios from "axios";
//import Form from "./Form";
import NameForm from "./Nameform";

class Profile_details extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: undefined,
        login: undefined,
        html_url: undefined,
        public_repos: undefined,
        followers: undefined,
        following: undefined,
        score: undefined
    };
    this.handleSubmit = this.handleSubmit.bind(this);           // ??
  }


  //const login2 = NameForm.state.value;

  /*getUser = async (e) => {
    e.preventDefault();
    const login = e.target.elements.login.value;
                                                                            //<Form getUser={this.getUser} />
  }*/

  /*componentDidMount() {
    const self = this;
    axios.get("https://api.github.com/users/defunkt"
    //    params: {
    //        login: "mojombo"                            //'{login}'
    //   }
    //}
    ).then(function(response) {
        self.setState({
            name: response.data.name,
            login: response.data.login,
            html_url: response.data.html_url,
            public_repos: response.data.public_repos,
            followers: response.data.followers,
            following: response.data.following,
            score: response.data.public_repos*5 + response.data.followers*3 + response.data.following*(-2)
        });
      })
      .catch(function (error) {
          console.log(error);
      });
  }*/

    handleSubmit(value) {
        let loginname = value;                                                   //getting input here
        let request_url = "https://api.github.com/users/" + loginname;
        const self = this;

        axios.get(request_url)
            .then(function(response) {
                self.setState({
                    name: response.data.name,
                    login: response.data.login,
                    html_url: response.data.html_url,
                    public_repos: response.data.public_repos,
                    followers: response.data.followers,
                    following: response.data.following,
                    score: response.data.public_repos*5 + response.data.followers*3 + response.data.following*(-2)
                });
            })
    }

  render() {
    return (
      <div>
        <div>
            <NameForm onSubmit={this.handleSubmit}/>
        </div>
        <div>
            <br></br>
            <ul>
                <li><h3>Name : {this.state.name}</h3></li>
                <li><h3>Login name : {this.state.login}</h3></li>
                <li><h3>Github URL : {this.state.html_url}</h3></li>
                <li><h3>No. of Repositories : {this.state.public_repos}</h3></li>
                <li><h3>Followers : {this.state.followers}</h3></li>
                <li><h3>Following : {this.state.following}</h3></li>
                <li><h3>My-App Score : {this.state.score}</h3></li>
            </ul>
        </div>
      </div>
    );
  }
}

export default Profile_details;
