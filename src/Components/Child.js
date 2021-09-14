import React from 'react'

function ChildData(props){

    const data="Bruce"
    return(
        <div>
         <h2>User Name: </h2>
         <button onClick={()=>props.alert(data)}>Click Me</button>
        </div>
    )
}
export default ChildData;