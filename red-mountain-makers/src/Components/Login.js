import React, { Component } from 'react'
import bcrypt from 'bcrypt'
import { get } from 'http';


class Login extends Component {
    constructor(props) {
        super(props)
        state:
        email: ""
        password: ""
    }


    handleLogin(event) {
        postMessage ("172.16.21.56/users/10")
            .then((response) => {
                return response.json();
            })
            .then((obj) => {
                this.setState({"films": obj})
            }
            );
        bcrypt.compare(this.state.password, hash, function(err, res) {
            // res === true
        });
        // bcrypt.genSalt(10, function (err, salt) {
        //     bcrypt.hash(this.state.password, salt, function (err, hash) {
        //         // Store hash in your password DB.
        //     });
        // });
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    }

    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }
    render() {

        return (
            <form>
                <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} />
                <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} />
                <button type="button" onClick={this.handleLogin}>Login</button>
            </form>);
    }
}

export default Login;