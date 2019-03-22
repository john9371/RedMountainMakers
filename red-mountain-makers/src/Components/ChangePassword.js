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

        //WORKS AS LONG AS API RETURNS CORRECT CORS HEADER
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(this.state.password, salt, function (err, hash) {
                hash = hash.replace(/\//g, "!")
                console.log(`${hash}`);
                fetch(`https://red-mountain-makers.herokuapp.com/users/${this.state.email}/${hash}`, { method: 'put', body: 'Updating Password' })
                    .catch(error => console.log(error));
            }.bind(this));
        }.bind(this));
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

                    New Password:
    
                    <input type="password" placeholder="New Password" value={this.state.password} onChange={this.handleChange.bind(this, 'password')} />

                    <input type='checkbox' value="Remember me" />

                    <input type="submit" value="Sign in" />
                </form>
            </div>
        );
    }
};


export default Login;