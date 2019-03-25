import React from 'react'
import ReactDOM from 'react-dom'
import Logo from '../assets/RMMLogo.png'
import NavCss from '../css/nav.css'
import { Navbar, Button, NavItem, SideNav, SideNavItem} from 'react-materialize'
var LogoImp = <img src={Logo} style={{ height: 60, paddingLeft: 40 }} />
function navbar() {
    return (
        <>
            <Navbar className=" #757575 grey darken-1" right>
                <NavItem className="#d50000 red-text" href="http://rmm-i-am-bham.herokuapp.com/">Home</NavItem>
                <NavItem className="#d50000 red-text" href="http://rmm-i-am-bham.herokuapp.com/Classes">Classes We Offer</NavItem>
                <NavItem className="#d50000 red-text" href="http://rmm-i-am-bham.herokuapp.com/Membership">Membership</NavItem>
                <NavItem className="#d50000 red-text" href="http://rmm-i-am-bham.herokuapp.com/Supporters">Donate</NavItem>
            </Navbar>

            {/* <SideNav trigger={<Button>SIDE NAV DEMO</Button>} className="naver #757575 grey darken-1 hide-on-l-and-up">
                <SideNavItem className="#d50000 red-text" href="http://rmm-i-am-bham.herokuapp.com/">Home</SideNavItem>
                <SideNavItem className="#d50000 red-text" href="http://rmm-i-am-bham.herokuapp.com/Classes">Classes We Offer</SideNavItem>
                <SideNavItem className="#d50000 red-text" href="http://rmm-i-am-bham.herokuapp.com/Membership">Membership</SideNavItem>
                <SideNavItem className="#d50000 red-text" href="http://rmm-i-am-bham.herokuapp.com/Supporters">Donate</SideNavItem>
            </SideNav> */}
        </>
    )
}


export default navbar