import React, { Component } from "react";

import { CommonContext } from "./CommonContext";

class Main extends Component{

    render(){

        return(
            <CommonContext.Consumer>
               {
                  ({color})=>(
                      <h1>Hello, this is main page</h1>
                  )
               }
            </CommonContext.Consumer>
        )
    }
}
export default Main