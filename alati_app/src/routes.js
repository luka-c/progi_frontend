import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";


export default function Routess() {
    return (
        <Switch>
            <Route path="/" exact={true}>
                <Login/>
            </Route>
            <Route path="/register" exact={true}>
                <Register/>
            </Route>
        </Switch>
    )
}
