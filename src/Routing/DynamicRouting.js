import React from "react";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import User from "./User";

function DynamicRouting(){

    let users = [
        {name: 'Bruce', id:1, email:'bruce@gmail.com'},
        {name: 'Diana', id:2, email:'diana@gmail.com'},
        {name: 'sam', id:3, email:'sam@gmail.com'},
        {name: 'Petter', id:4, email:'petter@gmail.com'},
        {name: 'Jai', id:5, email:'jai@gmail.com'}
    ]
    return(
        <div>
            <Router>
            <h2>React Dynamic Routing</h2>
            {
                users.map((item) => 
                <div>
                    <Link to={"/user/"+item.id+"/"+item.name}><h2>{item.name}</h2></Link>
                </div>
                )
            }
            <Route path="/user/:id/:name"><User/></Route>
            </Router>
        </div>
    )
}
export default DynamicRouting;