import React, { useEffect, useState } from "react";

function PreFilled(){
    const [user,setUser] = useState([])
    const[id,setId] = useState("")
    const[title,setTitle]= useState("")
useEffect(()=>{
    getUsers();
},[])

function getUsers(){
    fetch('https://jsonplaceholder.typicode.com/todos').then((result)=>{
        result.json().then((resp)=>{
            setUser(resp)
            setId(resp[0].id)
            setTitle(resp[0].title)
        })
    })
}


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

function selectUser(id){
    console.log(user[id-1])
    let item=user[id-1]
    setId(item.id)
    setTitle(item.title)
}

console.log(user)
    return(
        
        <div>

            <h2>Get API</h2>

            
            <div>
                <input type="text" value={id}/><br/><br/>
                <input type="text" value={title}/><br/><br/>
                <button>Update User</button>
            </div>


            <table border="1">
                <tr>
                
                    <td>ID</td>
                    <td>Title</td>
                    <td>Operations</td>
                   
                </tr>
                {
                    user.map((item,i) => 
                    <tr key={i}>
                   
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td><button onClick={()=>deleteUser(item.id)}>Delete</button></td>
                    <td><button onClick={()=>selectUser(item.id)}>Update</button></td>
                </tr>
                    )
                }
            </table>
               
        </div>
    )
}
export default PreFilled;