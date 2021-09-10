import React, { Component } from "react";
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'


export const Nav = styled.nav `

`

export const NavLink = styled(Link)
`

`

export const Bars = styled(FaBars)
`

`
export const NavMenu = styled.div `
display: flex;
aling-items: center;


@media screen and (max-width: 768px) {
display: none;
}
`

export const NavBtn = styled.nav `
display: flex;
align-items: center;
margin-right: 24px;

@media screen and (max-width: 768px) {
  display: none;
}
`

export const NavBtnLink = styled(Link)
`
// border-radius: 4px;

// padding: 10px 22px;
// color: #fff;
// border: none;
// outline: none;
// cursor: pointer;
// transition: all 0.2s ease-in-out;
// text-decoration: none !important;
// &:hover {
//   transition: all 0.2s ease-in-out;
//   background-color: #fff
//   color: #010606;
// }
`