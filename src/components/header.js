import React from "react";
import { NavLink, Link } from "react-router-dom";

// Header component
class Header extends React.Component {
 render() {
    return (
    <nav>
            <div className="logo">
                <NavLink to="/" exact activeClassName="active">
                <h1>City of Windsor</h1>
                </NavLink>
                <h1>Open Data Portal</h1>
                <NavLink to="/creation">Login</NavLink>  
            </div>
            <div className="nav-search">
                <ul className="nav-links">
                    <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/learnmore">Learn More</NavLink></li>
                </ul>
            </div>
        </nav>
            );
        }
}

export default Header;