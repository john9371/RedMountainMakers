import React from 'react'
import ReactDOM from 'react-dom'
import Logo from '../assets/RMMLogo.png'
import { SideNav, SideNavItem, Button, Navbar, NavItem } from 'react-materialize'
var LogoImp = <img src={Logo} style={{height: 60, paddingLeft: 40}} />
function navbar() {
    return (
        <>
            <Navbar brand={LogoImp} style={{position: 'absolute'}} className=" black" right >
                    <NavItem className="#d50000 red-text" right href="http://rmm-i-am-bham.herokuapp.com/">Home</NavItem>
                    <NavItem className="#d50000 red-text" right href="http://rmm-i-am-bham.herokuapp.com/Classes">Classes We Offer</NavItem>
                    <NavItem className="#d50000 red-text" right href="http://rmm-i-am-bham.herokuapp.com/Membership">Membership</NavItem>
                    <NavItem className="#d50000 red-text" right href="http://rmm-i-am-bham.herokuapp.com/Supporters">Donate</NavItem>
            </Navbar>
        </>
    )
}



export default navbar