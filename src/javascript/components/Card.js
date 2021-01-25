import React from "react";
import { Switch, Route } from "react-router-dom";
import Profile from "./Profile";
import Experience from "./Experience";
import Nav from "./Nav";

const Card = () => (
    <div id="card">
        <div id="card-inside">
            <Switch>
                <Route exact path="/">
                    <Profile />
                </Route>
                <Route exact path="/experience">
                    <Experience />
                </Route>
                <Route exact path="/contact"></Route>
            </Switch>
            <Nav />
        </div>
    </div>
);

export default Card;
