import React from "react";
import { NavLink, Link } from "react-router-dom";
class Header extends React.Component {
 render() {
    return (
    <nav>
            <div className="logo">
                <NavLink to="/" exact activeClassName="active">
                    <h1>City of Windsor</h1>
                </NavLink>
                <h2>Open Data Portal</h2>
                <NavLink to="/creation">Login</NavLink>  
            </div>
            <div className="nav-search">
                <ul className="nav-links">
                    <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/search">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/learnmore">Learn More</NavLink></li>
                </ul>
            </div>
        </nav>
            );
        }
}

export default Header;