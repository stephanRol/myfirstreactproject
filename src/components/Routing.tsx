import React, { ReactElement } from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import Instruments from './Instruments'
import Home from './Home'
import Theory from './Theory'


export default function Routing(): ReactElement {
    return (
        <Switch>
            <Route path="/Instruments">
                <Instruments />
            </Route>
            <Route path="/theory">
                <Theory />
            </Route>
            <Route path="/home">
                <Home />
            </Route>
            <Route path="/">
                <Redirect to="/home" />
            </Route>
        </Switch>
    )
}