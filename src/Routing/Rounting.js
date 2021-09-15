import React from 'react';
import { Route} from 'react-router-dom'
import Nav from './Nav';
import Home from './Home';
import About from './About';

function Rounting(){
    return(
        <div>
          
                <Nav/>
                <Route path="/home">  <Home/> </Route>
                <Route path="/about"> <About/> </Route>
        </div>
    )
}

export default Rounting;