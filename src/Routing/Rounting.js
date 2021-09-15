import React from 'react';
import { Route} from 'react-router-dom'
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function Rounting(){
    return(
        <div>
          
                <Nav/>
                <Route path="/about"> <About/> </Route>
                <Route path="/contact"> <Contact/> </Route>
                <Route path="/" exact>  <Home/> </Route>
        </div>
    )
}

export default Rounting;