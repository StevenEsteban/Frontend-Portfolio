import React from 'react'
import { Nav, Bars, NavMenu, NavLink, NavBtn, NavBtnLink } from './Navbar';



const Navbar = () => {
    return (
        <>
        <Nav>
            <NavLink to ="/">
                <h1>logo</h1>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/" activeStyle>
                    Home
                </NavLink>
                <NavLink to="/PreviousWork" activeStyle>
                    Previous Work
                </NavLink>
                <NavLink to="/FAQ" activeStyle>
                    FAQ
                </NavLink>
                <NavLink to="/Contact" activeStyle>
                    Contact
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/Contact-me-now">Contact now</NavBtnLink>
            </NavBtn>
        </Nav>
        </>
    );
};

export default Navbar
