import React, { Companent, Component } from 'react';
import { Bar, Line, Scatter, Pie } from 'react-chartjs-2';

class Chart2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData2: {
                labels: ['NewMembersDec2018', 'NewMembersJan2019', 'NewMembersFeb2019', 'NewMemebrsMar2019'],
                datasets: [
                    {
                        label: "New Membership Info",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: 'rgba(75,192,192,1)',
                        data: [2, 2, 1.2, 3],
                    }
                ]
            }
        }
    }
    render(){
        return (
            <div classname="Charts">
                <div classname="chart">
                    <Line
                        data={this.state.chartData2}
                        options={{}}
                    />
                </div>
            </div>
        )
    }
}

export default Chart2;