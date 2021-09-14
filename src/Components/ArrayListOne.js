import React from 'react'

function ArrayList(){

    const students = ['Bruce', 'Diana', 'john']
    return(
        <div>
            <h2>Handle array list</h2>
            {
                students.map((data) => <h2>Name is: {data}</h2>)
            }
        </div>
    )
}
export default ArrayList;