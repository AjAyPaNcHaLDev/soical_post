import React, { Component } from "react";
import { ReactDOM } from "react-dom";

class LifeCycle extends Component {


    constructor(){
        super();
        this.state={
fname:"ajay",
lname:"panchal"
        }
    }

  render() {
    const changehander=()=>{
        this.setState={
            fname:this.fname,
            lname:"panchal ji",
            
        }
            }
    return (<React.Fragment>
    
    <div>{`hii ${this.state.fname} ${this.state.lname} p=${this.props.p}`}</div>
    <button onClick={changehander}>click md</button>
    </React.Fragment>);
  }
}

export default LifeCycle;