import React, { Component } from 'react';
import './App.css';
import './css/materialize.css'
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
                this.setState({people})
            });
    }
    render() {
        return (


            <body>
                <div className="navbar-fixed">
                    <nav className="#d50000 red accent-4 z-depth-4" role="navigation">
                        <div className="nav-wrapper container"><a id="logo-container" href="#" className="brand-logo black-text text-darken-2">logo</a>
                            <ul className="right hide-on-med-and-down">
                                <li><a className="black-text text-darken-2" href="#">Class We Offer</a></li>
                                <li><a className="black-text text-darken-2" href="#">Membership</a></li>
                                <li><a className="black-text text-darken-2" href="#">Contact</a></li>
                            </ul>
                        </div>
                        <ul id="nav-mobile" className="sidenav">
                            <li><a className="black-text text-darken-2" href="#">Navbar Link</a></li>
                            <li><a className="black-text text-darken-2" href="#">Navbar Link</a></li>
                            <li><a className="black-text text-darken-2" href="#">Navbar Link</a></li>
                        </ul>
                        <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    </nav>
                </div>
                <link src = "">eventBriteFuckery</link>
                <br></br>
                <h3>Classes at the Space</h3>
                <div id="content" className="page-wrap">
                    {this.state.people.map(v =>{
                    <li><a className="black-text text-darken-2" href="#">{v}</a></li>
                    })}
                </div>
            </body>
        );
    }
}

export default App;
