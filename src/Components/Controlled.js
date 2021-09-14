import React,{useState} from 'react';


function Controlled(){

    let [val, setVal] = useState("")
    return(
        <div>
            <input type="text" value={val} onChange={(e) => setVal(e.target.value)}/>
            <h2>value : {val}</h2>
        </div>
    )
}
export default Controlled