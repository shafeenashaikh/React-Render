import React,{Component, createRef} from "react";

class Ref extends Component{

    constructor(){
        super();
        this.inputRef=createRef();
    }

    componentDidMount(){
        // console.log(this.inputRef.current.value="100")
    }

    getVal(){
        console.log(this.inputRef.current.value)
    }
    render(){
        return(
            <div>
                <h2>Ref in React</h2>
                <input type="text" ref={this.inputRef}/>
                <button onClick={()=>this.getVal()}>Check Ref</button>
            </div>
        )
    }
}
export default Ref;