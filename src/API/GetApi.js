import React, { useEffect, useState } from "react";

function GetApi(){
    const [data,setData] = useState([])
useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts/1").then((result)=>{
        result.json().then((resp)=>{
            // console.log('result',resp)
            setData(resp)
        })
    })
},[])

console.log(data)
    return(
        <div>
            <h2>Get API</h2>
            
        </div>
    )
}
export default GetApi