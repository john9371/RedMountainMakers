import React, { Component } from 'react';
import '../css/App.css';
import '../css/materialize.css'
var classes;
var tokenReq = {
    host: "eventbriteapi.com",
    path: "/v3/users/me/?token=GS3SVXQ6SKYYRQXFQL36",
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer token"
    }
};
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: []
        };
    }
    componentDidMount() {
        fetch("eventbriteapi.com/v3/users/13587733967/?token=FHLUZYFIPS7BLMZVXO")
            .then((response) => {
                return response.json();
            })
            .then((people) => {
                console.log(people)
            });
    }
    render() {
        return (
            <div>
                <h3>Classes at the Space</h3>
                <div id="content" className="page-wrap">
                    {this.state.people.map}
                </div>
            </div>
        );
    }
}

export default App;