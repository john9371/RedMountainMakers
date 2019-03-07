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
        // this.handleEmailChange = this.handleEmailChange.bind(this);
        // this.handlePasswordChange = this.handlePasswordChange.bind(this);
        // this.handleLogin = this.handleLogin.bind(this);
    }

    /*
    // handleLogin = (event) => {
    //     // let hashed = "";
    //     // fetch(`172.16.21.56/users/7`)
    //     //     .then((response) => {
    //     //         hashed = response;
    //     //     });
    //     // bcrypt.compare(this.state.password, hashed, function (err, res) {
    //     //     // res === true
    //     // });
    //     bcrypt.genSalt(10, function (err, salt) {
    //         bcrypt.hash(this.state.password, salt, function (err, hash) {
    //             fetch(`172.16.21.56/users/${this.state.email}/${hash}`)
    //         });
    //     });
    // }

    // handleEmailChange = (e) => {
    //     this.setState({ email: e.target.value });
    // }

    // handlePasswordChange = (e) => {
    //     this.setState({ password: e.target.value });
    // }
    // render() {

    //     return (
    //         <form>
    //             <input type="text" name="email" placeholder="Email" onChange={this.handleEmailChange} />
    //             <input type="password" name="password" placeholder="Password" onChange={this.handlePasswordChange} />
    //             <button type="button" onClick={this.handleLogin}>Login</button>
    //         </form>);
    // }
    */

    handleSubmit(e) {
        e.preventDefault();

        // let hashed = "";
        // fetch(`http://172.16.21.56:5000/users/${this.state.email}`, { method: 'post' })
        //     .then((response) => {
        //         let data = response.json();
        //         console.log(data)
        //         hashed = data.password;
        //     })
        //     .then(
        //         bcrypt.compare(this.state.password, hashed, function (err, res) {
        //             //console.log(hashed);
        //             console.log(res);
        //         })
        //             )

        //};

        //    WORKS AS LONG AS API RETURNS CORRECT CORS HEADER
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(this.state.password, salt, function (err, hash) {
                hash = hash.replace(/\//g, "!")
                console.log(`${hash}`);
                fetch(`http://172.16.21.56:5000/users/${this.state.email}/${hash}`, { method: 'put', body: 'Updating Password' })
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