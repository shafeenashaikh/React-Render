import React, { useEffect, useRef } from "react";


function PrevChild(props){

    const lastVal=useRef();
    useEffect(()=>{
        lastVal.current=props.count
    })

    const previosProps=lastVal.current
    return(
        <div>
            <h2>current Val {props.count}</h2>
            <h2>Previos Val {previosProps}</h2>
        </div>
    )
}
export default PrevChild