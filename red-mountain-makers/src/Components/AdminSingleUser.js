import React, { Component } from 'react';
import SingleUserFunction from './Functions/AdmnSnglUsrFnctn.js';

import Footer from './footer';

export default class user extends Component {

    constructor(props) {
        super(props);
        this.state = {
            personARY: [],
        };
    }

    componentDidMount() {
        fetch(`http://localhost:5000/users/${this.props.match.params.member_id}`)
            .then(res => res.json())
            .then(personFromSite => this.setState({ personARY: personFromSite }));
    }

    render() {
        
        const user = this.state.personARY;

        return (
            <>
                
                <main>
                    <div>
                        <SingleUserFunction user={user} />
                    </div>
                </main>
                <Footer />
            </>
        );
    }
}