import React, { useMemo, useState } from "react";

function UseMemo(){

    const [count, setCount] =useState(0)
    const [item, setItem] = useState(10)

    const multiCountMemo = useMemo(function multiCount(){
        console.log('multicount')
        return count*5
    },[count])
    return(
        <div>
            <h2>UseMemo in React</h2>
            <h2>Count - {count}</h2>
            <h2>Item - {item}</h2>
            <h2>{multiCountMemo}</h2>
            <button onClick={() => setCount(count+1)}>Update Count</button>
            <button onClick={() => setItem(item*10)}>Update Item</button>
        </div>
    )
}
export default UseMemo