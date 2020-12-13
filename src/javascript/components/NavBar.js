import React from "react";

const NavBar = () => {
    const DATE = new Date();
    const DAYS = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];

    const MONTHS = [
        "jan",
        "feb",
        "mar",
        "apr",
        "may",
        "jun",
        "jul",
        "aug",
        "sep",
        "oct",
        "nov",
        "dec",
    ];

    const DAY = DATE.getDay();
    const MONTH = DATE.getMonth();
    const DAY_OF_MONTH = DATE.getDate();

    return (
        <div className="ma-4 row">
            <h3>
                <em>{DAYS[DAY]}</em>, {`${DAY_OF_MONTH} ${MONTHS[MONTH]}`}
            </h3>
            <div className="ml-auto">
                <a
                    className="mr-1"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/InferNovac"
                    title="My personal github"
                >
                    Github
                </a>
                <a
                    className="ml-1 mr-1"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/marcin-krzykowski-7711b01b4/"
                    title="My linkedin"
                >
                    LinkedIn
                </a>
                <a
                    className="ml-1"
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:marcin.krzykowski.2018@mumail.ie"
                    title="Email me marcin.krzykowski.2018@mumail.ie"
                >
                    Email
                </a>
            </div>
        </div>
    );
};

export default NavBar;
