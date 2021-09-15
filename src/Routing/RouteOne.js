import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'

function RouteOne(){
    return(
        <div>
            <Router>
                <Link to="/">Home</Link><br />
                <Link to="/about">About</Link>
                <Switch>
                <Route path="/" exact={true}><Home/></Route>
                <Route path="/about"><About/></Route>
                <Route path="*"><PageNotFound/></Route>
               </Switch>
            </Router>
        </div>
    )
}

function Home(){
    return(
        <div>
            <h2>Home Page</h2>
            <p>This is my Home Page</p>
        </div>
    )
}

function About(){
    return(
        <div>
            <h2>About Page</h2>
            <p>This is my About Page</p>
        </div>
    )
}

function PageNotFound(){
    return(
        <div>
            <h2>404 Page</h2>
            <p>This page Not Found</p>
        </div>
    )
}
export default RouteOne;