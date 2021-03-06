import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <img className="logomenu" src="\img\logo.png" alt="logooo"/>
      {/* <div className="SocialM"> */}
      <a className="spacing" href="/">
        Home
      </a>
      <a href="/PreviousWork">
        Previous Work
        </a>
        {/* <a href="/FAQ">
        FAQ
        </a> */}
      <a href="/Contact">
        <span role="img" aria-label="contact">&#x1f4e9;</span>
        Contact
        </a>
        {/* </div> */}
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;