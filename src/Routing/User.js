import React from "react";
import {withRouter} from 'react-router-dom';

function User(prop){
    console.log(prop.match.params.id)
    return(
        <div>
            <h2>Hi this is use no {prop.match.params.id}</h2>
            <h2>Hi this is {prop.match.params.name}</h2>
        </div>
    )
}
export default withRouter(User)