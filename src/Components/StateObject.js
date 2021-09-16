import React, { useState } from "react";

function StateObject(){

    const[data,setData]=useState({name:'John', age:25})
    return(
        <div>

            <input type="text/" valu={data.name}  placeholder="enter name"
            onChange={(e)=>setData({...data, name: e.target.value})}/><br/><br/>

            <input type="text/" valu={data.age}  placeholder="enter age"
            onChange={(e)=>setData({...data, age: e.target.value})}/><br/>


            <h2>{data.name}</h2>
            <h2>{data.age}</h2>
        </div>
    )
}
export default StateObject