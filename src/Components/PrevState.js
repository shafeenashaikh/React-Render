import React, { useState } from 'react';

function PrevState(){

    const[count,setCount]=useState(1)

    function updateCounter(){
        let rand=Math.floor(Math.random()*10)
        setCount((pre)=>{
            console.log(pre)
           if(pre<5){
               alert("low value")
           }
            return rand
        })
    }
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={updateCounter}>Click me to Update Counter</button>
        </div>
    )
}
export default PrevState