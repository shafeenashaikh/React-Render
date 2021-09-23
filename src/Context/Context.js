import React, { Component } from 'react'
import { CommonContext } from './CommonContext'
import Main from './Main'
import UpdateButton from './UpdateButton'
class Context extends Component{

    constructor(){
        super()

        this.updateColor=(color)=>{
            this.setState({
              color:color
            })
          }
        this.state={
          color:"green",
          updateColor:this.updateColor
        }
       
      } 
    render(){
        return(
            <CommonContext.Provider value={this.state}>
        <h2>Context API</h2>
        <Main/>
        <UpdateButton/>
      </CommonContext.Provider>
        )
    }
}
export default Context