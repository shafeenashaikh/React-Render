import React, { Component } from 'react'
import { CommonContext } from './CommonContext'

class UpdateButton extends Component{
    render(){
        return(
            <CommonContext.Consumer>
                {
                    ({updateColor})=>(
                        <div>
                        <button onClick={()=>updateColor('yellow')}>Update Color Yellow</button>
                        <button onClick={()=>updateColor('blue')}>Update Color Blue</button>
                        </div>
                    )
                }
            </CommonContext.Consumer>
        )
    }
}
export default UpdateButton