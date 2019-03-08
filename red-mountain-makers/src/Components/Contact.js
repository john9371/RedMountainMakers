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

                        <label for="state">State</label>
                        <input type="text" id="lname" name="lastname" placeholder="state.." />

                        <label for="subject">Subject</label>
                        <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: "200px" }}></textarea>
                    </form>
                </div>
                <form>
                    <label>
                       <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

                <div className="center" style={{ paddingBottom: "3%" }}>
                    <img src={Image} />
                </div>
            </div >

        )
    }
}


