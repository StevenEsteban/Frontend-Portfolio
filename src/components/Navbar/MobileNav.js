import React from 'react'
import { Nav, NavMenu, NavLink } from './Navbar';

const MobileNavigation = () => {
    return (
        <Nav className="MobileNavigation">
        <NavMenu>
            <NavLink className="navlinks" to="/" activeStyle>
                Home
            </NavLink>
            <NavLink className="navlinks" to="/PreviousWork" activeStyle>
                Previous Work
            </NavLink>
            <NavLink className="navlinks" to="/FAQ" activeStyle>
                FAQ
            </NavLink>
            <NavLink className="navbtn" to="/Contact" activeStyle>
                Contact
            </NavLink>
        </NavMenu>
    </Nav>
    )
}

export default MobileNavigation;
