import React from "react";

class PureComponent extends React.PureComponent{

    constructor(){
        super();
        this.state = {
            count:1
        }
    }
    render(){
        console.log('Count render');
        return(
            <div>
                <h2>Pure Components {this.state.count}</h2>
                <button onClick={()=> this.setState({count:this.state.count+1})}>Update Count</button>
            </div>
        )
    }
}
export default PureComponent