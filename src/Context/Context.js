import React, { Component } from "react";

import { CommonContext } from "./CommonContext";
import Main from "./Main";

class Context extends Component{

    constructor(){
        super();
        this.state={
            color:"green",
            updateColor:this.updateColor
        }
        this.updateColor=()=>{
            this.setState({
                color:'red'
            })
        }
        
    }
    render(){

        return(
            <CommonContext.Provider valu={this.state}>
                <h2>Context API</h2>
                <Main/>
            </CommonContext.Provider>
        )
    }
}
export default Context