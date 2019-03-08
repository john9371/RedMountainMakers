import React, { Companent, Component } from 'react';
import { Bar, Line, Scatter, Pie } from 'react-chartjs-2';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData1: {
                labels: ['totalMembers', 'basicMembers', 'premiumMembers', 'membersUnpaid'],
                datasets: [
                    {
                        label: "Members Info",
                        data: [8, 5, 3.1, 8],
                        backgroundColor: ['rgba(99,99,222)', 'rgba(155,99,132)', 'rgba(155,99,132)', 'rgba(255,99,132)']
                    }
                ]
            }
        }
    }


    render() {
        return (
            <div classname="Charts">
                <div classname="chart">
                    <Bar
                        data={this.state.chartData1}
                        options={{}}
                    />
                </div>
            </div>
        )
    }
}

export default Chart;