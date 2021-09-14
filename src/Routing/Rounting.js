import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

function Rounting(){
    return(
        <div>
            <Router>
                <Link to="/home"> Home Page</Link><br/>
                <Link to="/about"> About Page</Link>
                <Route path="/home">  <Home/> </Route>
                <Route path="/about"> <About/> </Route>
                
            </Router>
        </div>
    )
}

function Home(){
    return(
        <div>
            <h1>Home Page</h1>
            <p>This is home page of website</p>
        </div>
    )
}

function About(){
    return(
        <div>
            <h1>About Page</h1>
            <p>This is home About of website</p>
        </div>
    )
}
export default Rounting;