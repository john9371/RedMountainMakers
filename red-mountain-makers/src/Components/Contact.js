import React from 'react'

function Contact() {
        return (
            <div>

                <h1>RedMountain Makers</h1>
                <ul>
                    <li><a href="#Donate">Donate</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#membership">Membership</a></li>
                    <li><a href="#Our Supporters">Our Supporters</a></li>
                    <li><a href="#classes">Classes</a></li>
                    <li><a className="active" href="#home">Home</a></li>
                </ul>


                <div className="top">

                </div>


                <h2>Red Mountain Makers</h2>
                <h5>Birmingham Alabama’s DIY tech co-operative and makerspace.<br />
                    Come make marvelous things with us!<br />
                    5502 1st Avenue North,<br />
                    Birmingham Alabama 35212<br />
                    United States<br />
                </h5>
                <h3>Go For It!!</h3>

                <div className="container">
                    <form action="/action_page.php">
                        <label for="fname">First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                        <label for="lname">Last Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                        <label for="country">State</label>
                        <select id="state" name="state">
                            <option value="australia">Alabama</option>
                            <option value="canada">Florida</option>
                            <option value="usa">Texas</option>
                        </select>

                        <label for="subject">Subject</label>
                        <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>

                        <input type="submit" value="Submit" />
                    </form>
                </div>

                <div className="pic">
                    <img src="RedMountainMakersLogo.png" />
                </div>
            </div>
        )
    }


export default Contact;