import React, { useEffect, useState } from "react";

function GetApi(){
    const [user,setUser] = useState([])
useEffect(()=>{
    getUsers();
},[])

function getUsers(){
    fetch('https://jsonplaceholder.typicode.com/todos').then((result)=>{
        result.json().then((resp)=>{
            setUser(resp)
        })
    })
}

console.log(user)
function deleteUser(id){

   fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
       method: 'DELETE'
   }).then((result)=>{
       result.json().then((resp)=>{
           console.log(resp)
           getUsers()
       })
   })
}

console.log(user)
    return(
        <div>
            <h2>Get API</h2>
            <table border="1">
                <tr>
                    <td>UserId</td>
                    <td>ID</td>
                    <td>Title</td>
                   
                </tr>
                {
                    user.map((item,i) => 
                    <tr key={i}>
                    <td>{item.userId}</td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td><button onClick={()=>deleteUser(item.id)}>Delete</button></td>
                </tr>
                    )
                }
            </table>
        </div>
    )
}
export default GetApi