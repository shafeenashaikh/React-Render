import React, { Component } from 'react'
import { CommonContext } from './CommonContext'

class Footer extends Component{
    render(){
        return(
            <CommonContext.Consumer>
                {
                    ({color})=>(
                        <h1 style={{backgroundColor:color}} className="footer"> Footer Page</h1>
                    )
                }
            </CommonContext.Consumer>
        )
    }
}
export default Footer