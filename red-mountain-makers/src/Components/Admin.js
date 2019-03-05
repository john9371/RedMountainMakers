import React, { Component } from 'react'
import Image from './RedMountainMakersLogo.png'
import Style from '../css/style.css'
import AllUsersFunction from './Functions/AdminUsers.js'
const cors = require('cors')
var app = express()
app.use(cors())

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usersARY: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(usersFromSite => this.setState({ usersARY: usersFromSite }));
    }

        render() {
            const  users  = this.state.usersARY;
            return (
                <>
                    <h1>USERS</h1>
                    <ul>
                        {users.map(name => {
                            return <li key={name.member_id}>
                            <AllUsersFunction name={name} />
                            </li>
                        })}
                    </ul>
                </>

            );
        }
}
