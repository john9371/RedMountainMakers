import React, { Component } from 'react'


class Login extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <>
            <div>
                Username:<input className="username login" type="text" required></input>
                Password:<input className="password login" type="password" required></input>
            </div>
            </>
        );
    }
}

export default Login;