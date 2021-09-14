import React from'react';
import {Table} from 'react-bootstrap'

function ArrayListThree(){

    const studednts = [
        {name:'Bruce', email:'Bruce@gmail.com', contact: 7777},
        {name:'Diana', email:'Diana@gmail.com', contact: 9999},
        {name:'sam', email:'sam@gmail.com', contact: 5555}
    ]
    return(
        <div>
            <h2>Handle list with Bootstrap table</h2>
            <Table striped>
                <tbody>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Contact</td>
                </tr>
                {
                    studednts.map((data,i) =>
                    <tr key={i}>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.contact}</td>
                    </tr>
                    )
                }
                </tbody>
            </Table>
        </div>
    )
}
export default ArrayListThree