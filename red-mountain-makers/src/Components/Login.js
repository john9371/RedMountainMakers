/***************************************
 * Thanks to user3454914 and Arthur on
 * StackOverflow at the link provided 
 * below for solving the majority of my
 * login problem.
 * https://stackoverflow.com/questions/45683685/react-cannot-read-property-state-of-undefined
***************************************/


import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Admin from './Admin'
//import bcrypt from 'bcryptjs'
//import { request } from 'https';
//import request from 'request'
// import { get } from 'http';
import Footer from './footer';

//const ACCESS_TOKEN = 'access_token';
//const USER_ID = 'user_id';

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

        // window.location = '/Admin';
        //let hashed = "";
        const that = this;
        try {
            fetch("https://cryptic-crag.herokuapp.com/api/v1/login", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                }),
            })
                .then(function (result) {
                    if (result === 'Unauthorized') {
                        let error = 'Email or Password is incorrect';
                        that.setState({ error: error });
                    }
                    return result.json();
                })
                .then(function (result) {
                    that.setState({ token: result.token });
                    that.setState({ redirect: true })
                })

        } catch (errors) {
            console.log(errors);
        }

    };


    handleChange(value, e) {
        this.setState({ [value]: e.target.value })
    }

    render = () => {
        if (this.state.redirect) {
            return <Redirect push to="/Admin" render={(props) => <Admin {...props} isAuthed={true} />} />;
        }

        return (
            <>
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
                <Footer />
            </>
        );
    }
};


export default Login;