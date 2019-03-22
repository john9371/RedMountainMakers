import React, { Component } from 'react'
import Glow from '../assets/glow red.jpg'
import Building from '../assets/building red.jpg'
import Room from '../assets/classroom.jpg'
import { Card, Col, Row, Collapsible } from 'react-materialize'



export default class Membership extends Component {
    render() {
        return (
            <div class="row">
                <div class="col s12"><h2>Membership</h2></div>
                <div class="col s6"><h2>How to become a Maker</h2>
            Come Tour the space! We have open ours Tuesday, Thursday, and Sunday 6:30pm - 9:00pm
            Become a Basic Member, its super easy! Purchase your membership here!

            Since an important part of the maker space philosophy is trust, we want to get a sense of who you are.
            You will also want to evaluate our community to see if it's a good fit for you as well. This is why all members start out as basic members.
            Once you've been out for a few meetings, you can apply to become a Full Maker Membership.</div>
                <div class="col s6"><h2>Full Members must also fulfill the following responsibilities:</h2>
            A member must thoughtfully contribute to Red Mountain Makers’s direction and policies.
            A member must pay the monthly fee as determined by the board of directors.
            At the time a member's eligibility expires, he must forfeit his or her method of entry in addition to any other property owned by Red Mountain Makers to a member of the board of directors or an agent designated by the board of directors for this purpose.

            By Becoming a Member you agree to all rules, laws, policies and waivers that apply</div>
            </div>

            
        )
    }
}


