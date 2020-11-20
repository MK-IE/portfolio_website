import React from "react";
import NavBar from "./NavBar";

const Header = ({ firstName, secondName, subHeading }) => (
    <div className="h-100 center-x center-y">
        <NavBar />
        <div className="text-center">
            <h1>
                {firstName} <span className="main-highlight">{secondName}</span>
            </h1>
            <h2 className="mt-1">{subHeading}</h2>
            <div className="mt-1">
                <a
                    className="mr-1"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/MarcinKrzykowski"
                    title="My personal github"
                >
                    <i className="circle-icon fab fa-github-square"></i>
                </a>
                <a
                    className="ml-1 mr-1"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/marcin-krzykowski-7711b01b4/"
                    title="My linkedin"
                >
                    <i class="circle-icon fab fa-linkedin"></i>
                </a>
                <a
                    className="ml-1"
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:marcin.krzykowski.2018@mumail.ie"
                    title="Email me marcin.krzykowski.2018@mumail.ie"
                >
                    <i class="circle-icon fas fa-envelope"></i>
                </a>
            </div>
        </div>
    </div>
);

export default Header;
