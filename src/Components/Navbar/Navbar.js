import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h3 className="logo">20181ISE0041 | KOUSHAL </h3>
            <ul className="nav-links">
                <Link to="/" className="Home">
                    <li>Home</li>
                </Link>

                <Link to="/About" className="About">
                    <li>About</li>
                </Link>

                <Link to="/Contact" className="Contact">
                    <li>Contact</li>
                </Link>



            </ul>
        </nav>
    )



}

export default Navbar;