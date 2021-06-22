import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import { AboutPage } from './AboutPage';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { NavBar } from './NavBar';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar></NavBar>
                <div className="container">
                    <Switch>
                        <Route exact path="/about" component={AboutPage}></Route>
                        <Route exact path="/login" component={LoginPage}></Route>
                        <Route exact path="/" component={HomePage}></Route>
                        {/* <Route component={HomePage}></Route> */}
                        <Redirect to="/"></Redirect>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}
