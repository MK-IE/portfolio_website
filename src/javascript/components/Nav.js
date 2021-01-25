import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => (
    <nav>
        <NavLink to="/" className="nav-link">
            HOME
        </NavLink>
        <NavLink to="/experience" className="nav-link">
            EXPERIENCE
        </NavLink>
        <NavLink to="/contact" className="nav-link">
            CONTACT
        </NavLink>
    </nav>
);

export default Nav;
