import React, { useState , useMemo, useCallback} from "react";
import { MemoizedChildFour } from "./ChildFour";


export const ParentFour = () => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('Diana')

    const person = {
        fname: 'Bruce',
        lname: 'Wayne'
    }

const memoizedPerson = useMemo(() => person, [])

const handleClick = () => {

}

const memoizedHandleClick = useCallback(handleClick, [])

    console.log('ParentFour Render')
    return(
        <div>
            <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
            <button onClick={() => setName('Bruce')}>Change name</button>
            {/* <MemoizedChildFour name={name} person={memoizedPerson}/> */}
            <MemoizedChildFour name={name} person={memoizedHandleClick}/>

              
        </div>
    )
}