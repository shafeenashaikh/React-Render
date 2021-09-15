import React, { useEffect, useState } from "react";

function GetApi(){
    const [data,setData] = useState([])
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos').then((result)=>{
        result.json().then((resp)=>{
            // console.log('result',resp)
            setData(resp)
        })
    })
},[])



function deleteUser(id){

   fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
       method: 'DELETE'
   }).then((result)=>{
       result.json().then((resp)=>{
           console.log(resp)
       })
   })
}

console.log(data)
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
                    data.map((item,i) => 
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