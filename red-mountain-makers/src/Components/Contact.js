import React, { Component } from 'react'
import Image from '../assets/RMMLogo.png'



export default class Contact extends Component {
    render() {
        return (
            <div>
                <h2 className="center">Red Mountain Makers</h2>
                <h5 className="center">Birmingham Alabama’s DIY tech co-operative and makerspace.<br />
                    Come make marvelous things with us!<br /></h5>
                <p className="center">5502 1st Avenue North,<br />
                    Birmingham Alabama 35212<br />
                    United States<br /></p>

                <span class="blue-text text-darken-2"></span><h3 className="center">Get in touch with us!</h3>

                <div className="container">
                    <form action="/action_page.php">
                        <label for="fname">First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your first Name.." />

                        <label for="lname">Last Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                        <Row>
                            <Input s={12} type='select' label="Materialize Select" defaultValue='2'>
                            <select id="state" name="state">
                                <option value="Alabama">Alabama</option>
                                <option value="Florida">Florida</option>
                                <option value="Texas">Texas</option>
                                </select>
                            </Input>
                        </Row>
                        <label for="state">State</label>
                
                     
                    <label for="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: "200px" }}></textarea>

                    <a onclick="Submit({html: 'New Maker'})" class="btn">Submit!</a>
                    </form>
            </div>

            <div className="center" style={{ paddingBottom: "3%" }}>
                <img src={Image} />
            </div>
            </div >
        )
    }
}


