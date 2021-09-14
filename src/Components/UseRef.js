import React, { useRef } from "react";

function UseRef(){

    let inputRef=useRef(null)
    function handleInput()
    {
        console.log('function call')
        inputRef.current.value="100"
        inputRef.current.focus();
    }
    return(
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={handleInput}>Handle Input</button>
        </div>
    )
    
}
export default UseRef;