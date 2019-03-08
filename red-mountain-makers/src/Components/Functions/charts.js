import React, { Companent, Component } from 'react';
import { Bar, Line, Scatter, Pie } from 'react-chartjs-2';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['totalMembers', 'basicMembers', 'premiumMembers', 'membersUnpaid',
                    'NewMembersDec2018', 'NewMembersJan2019', 'NewMembersFeb2019', 'NewMemebrsMar2019'],
                datasets: [
                    { 
                        label: "Members Info",

                        data: [
                            8,
                            5,
                            3,
                            8,
                            2,
                            2,
                            1.2,
                            3
                        ],
                        backgroundColor: [
                            'black',
                            'blue',
                            'black',
                            'blue',
                            'green',
                            'green',
                            'green',
                            'green'
                        ]
                    }
                ]
            }
        }
    }

        render(){
            return (
                <div classname="chart">
                    <Bar
                        data={this.state.chartData}
                        options={{}}
                    />
                </div>
            )
        }
    }

    export default Chart;