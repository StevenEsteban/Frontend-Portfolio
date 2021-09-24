import React from 'react'
import { Nav, Bars, NavMenu, NavLink, NavBtn, NavBtnLink } from './Navbar';


const Navbar = () => {
    return (
        <>
        <div className="blockNav">
        <Nav className ="NavDesktop">
            <NavLink className="navlinks" to ="/">
                <img className="logoimg" src="\img\logo.png" alt="logooo"/>
            </NavLink> 
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
        </div>
        </>
    );
};

export default Navbar
