import React from 'react';
import {Table} from 'react-bootstrap'

function NestedArrayList(){

    const user = [
        {name: 'John', email: 'John@gmail.com', address: [
            {Hn: 10, city: 'Noida', country: 'Indias'},
            {Hn: 20, city: 'Dalhi', country: 'Indias'}
        ]},
        {name: 'Petter', email: 'Petter@gmail.com', address: [
            {Hn: 30, city: 'Noida', country: 'Indias'},
            {Hn: 60, city: 'Dalhi', country: 'Indias'}
        ]},
        {name: 'Joi', email: 'Joi@gmail.com', address: [
            {Hn: 90, city: 'Noida', country: 'Indias'},
            {Hn: 80, city: 'Dalhi', country: 'Indias'}
        ]}
    ]
    
    return(
        <div>
            <h2>Nested Array List</h2>
            <Table striped variant="dark">
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Address</td>
                    </tr>
                    {
                        user.map((item) =>
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>
                                <Table striped variant="dark">
                                    <tbody>
                                        <tr>
                                            <td>Hn</td>
                                            <td>City</td>
                                            <td>Country</td>
                                        </tr>
                                        {
                                            item.address.map((data) => 
                                            <tr>
                                                <td>{data.Hn}</td>
                                                <td>{data.city}</td>
                                                <td>{data.country}</td>
                                            </tr>
                                            )
                                        }
                                    </tbody>
                                </Table>
                            </td>
                        </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}
export default NestedArrayList