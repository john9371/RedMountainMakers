import React, { Component } from 'react';
import SingleUserFunction from './Functions/AdmnSnglUsrFnctn.js';

export default class person extends Component {

    constructor(props) {
        super(props);
        this.state = {
            personARY: [],
        };
    }

    componentDidMount() {
        fetch(`'http://localhost:5000/users/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(personFromSite => this.setState({ personARY: personFromSite }));
    }

    render() {
        const user = this.state.personARY;
        return (
            <>
                <main>
                    <div>
                        <SingleUserFunction oneUser={user} />
                    </div>
                </main>
            </>
        );
    }
}