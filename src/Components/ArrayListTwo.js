import React from "react";

function ArrayListTwo(){

    const students = [
        {name: 'Bruce', email:'Beuce@gmail.com', contact: 8888},
        {name: 'Bruce', email:'Beuce@gmail.com', contact: 2222},
        {name: 'Bruce', email:'Beuce@gmail.com', contact: 3333}
    ]
    
    return(
        <div>
            <h2>Handle array with list</h2>
           <table border="1">

               <tr>
                   <td>Name</td>
                   <td>Email</td>
                   <td>Contact</td>
               </tr>
               {
                   students.map((data) =>
                   <tr>
                       <td>{data.name}</td>
                       <td>{data.email}</td>
                       <td>{data.contact}</td>
                   </tr>
                   )
               }
           </table>
        </div>
    )
}
export default ArrayListTwo