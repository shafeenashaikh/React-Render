import React, { useState } from "react";
import PrevChild from "./PrevChild";

function PrevStateOne(){

    const[count,setCount]=useState(0)
    return(
        <div>
            <PrevChild count={count}/>
            <button onClick={()=>setCount(Math.floor(Math.random()*10))}>Update Counter</button>
        </div>
    )
}
export default PrevStateOne