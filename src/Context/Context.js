import React, { Component } from 'react'
import { CommonContext } from './CommonContext'
import Footer from './Footer'
import Header from './Header'
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
        <Header/>
        <h2>Context API</h2>
        <Main/>
        <UpdateButton/>
        <Footer/>
      </CommonContext.Provider>
        )
    }
}
export default Context