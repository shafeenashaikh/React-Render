import React, { useRef } from 'react';


function UnControlled(){

    let inputRef=useRef(null)
    let inputRef2=useRef(null)

    function submitForm(e){
        e.preventDefault()
        console.log('input field 1', inputRef.current.value)
        console.log('input field 2', inputRef2.current.value)

    }
    return(
        <div>
            <form onSubmit={submitForm}>
            <input type="text" ref={inputRef}/><br/><br/>
            <input type="text" ref={inputRef2}/><br/><br/>
            <button>Submit</button>
            </form>
        </div>
    )
}
export default UnControlled;