import React from "react";
import Form from "react-bootstrap/Form";
const InputHelperMsg=(props)=>{
    const {status,title}=props;
    return(<React.Fragment>
      <Form.Text   style={style[status] }>{title}</Form.Text>
      </React.Fragment>);
  }
  const style={
    error:{
    color:"red",
    padding:5,
    display:"block"
    }
    ,
    success:{
    color:"green",
    padding:5,
    display:"block"
    }}
  export default InputHelperMsg;