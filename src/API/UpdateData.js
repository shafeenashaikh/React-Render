import React, { useEffect, useState } from "react";

function UpdateData(){
    const [user,setUser] = useState([])
    const[id,setId] = useState("")
    const[title,setTitle]= useState("")
    const[userId, setUserId] = useState(null)
useEffect(()=>{
    getUsers();
},[])

function getUsers(){
    fetch('https://jsonplaceholder.typicode.com/todos').then((result)=>{
        result.json().then((resp)=>{
            setUser(resp)
            setId(resp[0].id)
            setTitle(resp[0].title)
            setUserId(resp[0].userId)
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
    setUserId(item.userId)
}

function updateUser(){
    let item={id,title,userId}
    fetch(`https://jsonplaceholder.typicode.com/todos/${userId}`,{
       method: 'PUT',
       headers: {
           'Accept':'application/json',
           'Content-Type':'application/json'
       },
       body:JSON.stringify(item)
   }).then((result)=>{
       result.json().then((resp)=>{
           console.log(resp)
           getUsers()
       })
   })
}

    return(
        
        <div>

            <h2>Get API</h2>
            <div>
                <input type="text" value={id} onChange={(e)=>setId(e.target.value)}/><br/><br/>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/><br/><br/>
                <button onClick={updateUser}>Update User</button>
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
export default UpdateData;