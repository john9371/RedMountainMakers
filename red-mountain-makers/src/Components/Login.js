import React, { Component } from 'react'
import bcrypt from 'bcryptjs'
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


    handleLogin = (event) => {
        // let hashed = "";
        // fetch(`172.16.21.56/users/7`)
        //     .then((response) => {
        //         hashed = response;
        //     });
        // bcrypt.compare(this.state.password, hashed, function (err, res) {
        //     // res === true
        // });
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(this.state.password, salt, function (err, hash) {
                fetch(`172.16.21.56/users/${this.state.email}/${hash}`)
            });
        });
    }

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
    }

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value });
    }
    render() {

        return (
            <form>
                <input type="text" name="email" placeholder="Email" onChange={this.handleEmailChange} />
                <input type="password" name="password" placeholder="Password" onChange={this.handlePasswordChange} />
                <button type="button" onClick={this.handleLogin}>Login</button>
            </form>);
    }
}

export default Login;