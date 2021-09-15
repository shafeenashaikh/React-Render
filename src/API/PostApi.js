import React, { useState } from "react";

function PostApi(){

    const [name,setName] =useState("");
    const [email,setEmail] = useState("");
    const [mobail,setMobail] = useState("");

    function saveUser(){
        console.log(name,email,mobail)
    }
    return(
        <div>
            <h2>Post API</h2>
            <input type=""text value={name} onChange={(e)=>{setName(e.target.value)}} name="name"/><br/><br/>
            <input type=""text value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email"/><br/><br/>
            <input type=""text value={mobail} onChange={(e)=>{setMobail(e.target.value)}} name="mobail"/><br/><br/>
            <button type="button" onClick={saveUser}>Save New User</button>
        </div>
    )
}
export default PostApi