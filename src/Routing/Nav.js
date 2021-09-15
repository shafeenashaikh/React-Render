import React from "react";
import {Link} from 'react-router-dom'

function Nav(){
    return(
        <div>
                <Link to="/about"> About Page</Link><br/>
                <Link to="/contact"> Contact Page</Link><br/>
                <Link to="/"> Home Page</Link>
        </div>
    )
}
export default Nav