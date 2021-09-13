import React, { useState } from "react";
import { MemoizedChildThree } from "./ChildThree";


export const ParentThree = () => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('Diana')
    return(
        <div>
            <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
            <button onClick={() => setName('Bruce')}>Change name</button>
            <MemoizedChildThree name={name}/>
              
        </div>
    )
}