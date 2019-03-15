import React, { Component } from 'react'
//import Image from './RedMountainMakersLogo.png'
import Style from '../css/style.css'
import AllUsersFunction from './Functions/AdminUsers.js'
import DataFunction from './Functions/dataFunction.js'
import Chart from './Functions/charts';
import Chart2 from './Functions/charts2';
import ChartFunction from './Functions/charts2'

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usersARY: [],
            dataARY: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/admin')
            .then(res => res.json())
            .then(dataFromSite => this.setState({ dataARY: dataFromSite }));
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(usersFromSite => this.setState({ usersARY: usersFromSite }));
    }

    render() {
        const users = this.state.usersARY;
        const data = this.state.dataARY;
        return (
            <>
                <h1 style={{ textAlign: 'center' }}> ~Admin Page~ </h1>
                <br></br>
                <div>
                    {/* </div><ChartFunction data={chartData}/>  */}
                </div>
                <div>
<<<<<<< HEAD
                    <Chart />
=======
                    {/* <Chart chart.js /> */}
>>>>>>> fd7ae82817b7de0b9ce3c16ed029acb505827ba6
                    <Chart2 />
                </div>
                <br></br>
                <h3 style={{ textAlign: 'center' }}>UsersAnalysis</h3>
                <ul style={{ textAlign: 'center' }}>
                    {data.map(info => {
                        return <li key={info.update_id}>
                            <DataFunction info={info} />
                        </li>
                    })}
                </ul>
                <ul style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
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
