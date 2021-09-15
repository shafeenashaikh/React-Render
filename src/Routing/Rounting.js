import React from 'react';
import { Route} from 'react-router-dom'
import Nav from './Nav';

function Rounting(){
    return(
        <div>
          
                <Nav/>
                <Route path="/home">  <Home/> </Route>
                <Route path="/about"> <About/> </Route>
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