import React, { useState } from "react";

function Hoc(){
    return(
        <div>
            <h2>HOC</h2>
           <HocRed cmp={Counter}/>
           <HocGreen cmp={Counter}/>
           <HocBlue cmp={Counter}/>
        </div>
    )
}

function HocRed(props){
    return(
        <h2 style={{backgroundColor:'red', width: 100}}> Red <props.cmp/></h2>
    )
}

function HocGreen(props){
    return(
        <h2 style={{backgroundColor:'green', width: 100}}> Green <props.cmp/></h2>
    )
}
function HocBlue(props){
    return(
        <h2 style={{backgroundColor:'blue', width: 100}}> Blue <props.cmp/></h2>
    )
}


function Counter(){

    const [count, setCount] = useState(0)
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count+1)}>Update</button>
        </div>
    )
}
export default Hoc;