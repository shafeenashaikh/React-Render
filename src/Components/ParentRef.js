import React, { useRef } from "react";
import ChildRef from "./ChildRef";

function ParentRef(){

    let inputRef = useRef(null)
    function updateInput(){
        inputRef.current.value="100"
    }
    return(
        <div>
            <h2>Forward Ref in React</h2>
            <ChildRef ref={inputRef}/>
            <button onClick={updateInput}>Update InputBox</button>
            
        </div>
    )
}
export default ParentRef