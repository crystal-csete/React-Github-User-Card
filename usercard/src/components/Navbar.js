import React from "react";
import "./Navbar.css";
import logo from '../svg/github-brands.svg'


const Navbar = () => (
  <div className="navbar">
    <a className="link" href="https://github.com/" target="_blank" rel="noreferrer">Github<img src={logo} alt="github logo" /></a> 
  </div>
)

export default Navbar;