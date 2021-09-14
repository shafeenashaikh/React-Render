import React from "react";

import User from "./User";

function ReuseLoop(){

    const user = [
        {name: 'Bruce', email: 'bruce@gmail.com', contact: 9999},
        {name: 'sam', email: 'sam@gmail.com', contact: 9999},
        {name: 'jai', email: 'jai@gmail.com', contact: 9999}
    ]
    return(
        <duv>
            <h2>Reuse Components</h2>
           
            {
                user.map((item,i) =>
               <User data={item}/>
                )
            }
        </duv>
    )
}
export default ReuseLoop;