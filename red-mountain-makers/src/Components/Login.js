/***************************************
 * Thanks to user3454914 and Arthur on
 * StackOverflow at the link provided 
 * below for solving the majority of my
 * login problem.
 * https://stackoverflow.com/questions/45683685/react-cannot-read-property-state-of-undefined
***************************************/


import React, { Component } from 'react'
import bcrypt from 'bcryptjs'
import { request } from 'https';
//import request from 'request'

// import { get } from 'http';


class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        };
    }


    handleSubmit(e) {
        e.preventDefault();

        window.location = '/Admin';
        //let hashed = "";
        // fetch(`https://red-mountain-makers.herokuapp.com/users/${this.state.email}`, { method: 'post' })
        //     .then((response) => {
        //         let data = response.json();
        //         console.log(data)
        //         hashed = data.password;
        //         return hashed;
        //     })
        //     .then((hashed) => {
        //         bcrypt.compare(this.state.password, hashed, function (err, res) {
        //             console.log(hashed);
        //             //console.log(res);
        //         })
        //     })

    };


    handleChange(value, e) {
        this.setState({ [value]: e.target.value })
    }

    render = () => {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    Email:
                    <input type="text" placeholder="Email" value={this.state.email} onChange={this.handleChange.bind(this, 'email')} />

                    Password:
    
                    <input type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange.bind(this, 'password')} />

                    <input type='checkbox' value="Remember me" />

                    <input type="submit" value="Sign in" />
                </form>
            </div>
        );
    }
};


export default Login;