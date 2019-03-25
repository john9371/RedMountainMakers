import React, { Component } from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import {Button, Row, Col} from 'react-materialize';
import '../css/PayMe.css'

export default class Payment extends Component{
    constructor(props) {
        super(props);
        this.state ={
             complete: false,
             NAME: '',
             EMAIL: '',
         };
        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
      }

    async submit(ev) {
        let {token} = await this.props.stripe.createToken({name: "Name"});
        let response = await fetch("/charge", {
          method: "POST",
          headers: {"Content-Type": "text/plain"},
          body: token.id
        });
      
        if (response.ok) console.log("Purchase Complete!")
      }

    render() {
    if (this.state.complete) {return <h1>Purchase Complete</h1>}

        return (
            <div className="checkout">
            <h2>Would you like to complete the purchase?</h2>
            <form >
                <input placeholder="Name" name="NAME" type="text" value={this.state.name} onChange={this.handleChange}/>
                <input placeholder="Email" name="EMAIL" type="text" value={this.state.email} onChange={this.handleChange}/>
                <CardElement className="PayMe" style={{
                    base: {
                    iconColor: '#666EE8',
                    color: '#31325F',
                    lineHeight: '40px',
                    fontWeight: 300,
                    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                    fontSize: '12px',
                    '::placeholder': {
                        color: '#CFD7E0',
                    }
                }
            }} />
            <Row>
                <Col s={12} m={12} l={12} style={{display:'flex', justifyContent:'center'}}>
                 <Button onClick={this.submit} className="payMeButton">Send</Button>
                </Col>
            </Row>
            </form>
            </div>
        );
    }
}