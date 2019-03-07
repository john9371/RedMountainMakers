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

export default class App extends Component {
    render() {
        return (
            <div>
                <body>
                    <br></br>
                    <h3>Classes at the Space</h3>
                    <div id="content" className="page-wrap">
                        <li><a className="black-text text-darken-2" href="#"> Tool Training: WoodShop 101</a></li>
                        <li><a className="black-text text-darken-2" href="#">Tool Training: Learn to Wield</a></li>
                        <li><a className="black-text text-darken-2" href="#">Tool Training: 3D Printers</a></li>
                        <li><a className="black-text text-darken-2" href="#">Tool Training: 3D Modeling</a></li>
                        <li><a className="black-text text-darken-2" href="#">Programming and Hardware</a></li>
                        <li><a className="black-text text-darken-2" href="#">Fibers!</a></li>
                        <li><a className="black-text text-darken-2" href="#">Bike Technology</a></li>
                        <li><a className="black-text text-darken-2" href="#">Wearable Technology</a></li>
                        <li><a className="black-text text-darken-2" href="#">Ceramics</a></li>
                        <li><a className="black-text text-darken-2" href="#">Cosplay!</a></li>
                    </div>
                </body>
            </div>
        );
    }
}

