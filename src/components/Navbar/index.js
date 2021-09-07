import React from 'react'
import { Nav, Bars, NavMenu, NavLink, NavBtn, NavBtnLink } from './Navbar';



const Navbar = () => {
    return (
        <>
        <Nav>
            <NavLink className="navlinks" to ="/">
                <h1>logo</h1>
            </NavLink>
            <Bars />
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
        </>
    );
};

export default Navbar
