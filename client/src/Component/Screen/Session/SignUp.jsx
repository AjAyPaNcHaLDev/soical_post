import React, { useState, useEffect } from "react";
import axios from "axios";
import Config from "../../../Config";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { patternEmail, patternPassword } from "../../Pattern/Pattern";
import InputHelperMsg from "../../HelperMsg/InputHelperMsg";
import CAlert from "../../HelperMsg/CAlert";

const SignUp = () => {
  
  const [form, setForm] = useState({
    Name:"",
    Email: "",
    Password: "",
    Date_Of_Birth:""  
  });
 
  const [smtBtn,SetSmtBtn]=useState(true);
  const [cAlert,SetCAlert]=useState({});

  const changeHandler = (e) => {
    const name = e.target.name;
    switch (name) {
      case "Password":
        setForm({ ...form, [name]: e.target.value });
        break;
      case "Email":
        setForm({ ...form, [name]: e.target.value.toLowerCase() });
        break;
      default:
        setForm({ ...form, [name]: e.target.value.toUpperCase() });
    }
    
  };

  const handleSmt = async (event) => {
    event.preventDefault();
    if(smtBtn){
      await axios
      .post(`${Config.url}signup`, form)
      .then((responce) => {
        console.log(responce)
        SetCAlert({ 
        alert:"success",
        status:responce.status,
        msg:responce.statusText,
        visible:true
        })
      }) 
      .catch((error) => { 
        console.log(error)
        
        SetCAlert({
          msg:error.msg,
          alert:"success",
          status:"ok",
          visible:true
          })
      });
    }
    
  };
  useEffect(() => {  
    return () => { 
    };
  });

  return (
    <React.Fragment>
      <Form style={style.form} onSubmit={(e) => handleSmt(e)}>
        <div style={{ textAlign: "center" }}>
          <Form.Label>Sign Up </Form.Label>
        </div>
        <hr />
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Name </Form.Label>
          <Form.Control
            type="text"
            value={form.Name}
            onChange={(e) => changeHandler(e)}
            name="Name"
            placeholder="Enter Name"
          />
          {form.Name == "" ? (
            <InputHelperMsg title="Please Fill Name" status="error" />
          ) : (
            <InputHelperMsg title={form.Name} status="success" />
          )}
        </Form.Group>{" "}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email </Form.Label>
          <Form.Control
            type="email"
            value={form.Email}
            onChange={(e) => changeHandler(e)}
            name="Email"
            placeholder="Enter email"
          />
          {form.Email == "" ? (
            <InputHelperMsg title="Please Fill Email" status="error" />
          ) : patternEmail.test(form.Email) == false ? (
            <InputHelperMsg
              title="Please use Correct Email Format."
              status="error"
            />
          ) : (
            <InputHelperMsg title={form.Email} status="success" />
          )}
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={form.Password}
            onChange={(e) => changeHandler(e)}
            name="Password"
            placeholder="Password"
          />
          {form.Password == "" ? (
            <InputHelperMsg title="Please Fill Password" status="error" />
          ) : patternPassword.test(form.Password) == false ? (
            <InputHelperMsg
              title="Please use secure Password."
              status="error"
            />
          ) : (
            <InputHelperMsg
              title="Great your Password is Secure."
              status="success"
            />
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="Date_Of_Birth">
          <Form.Label>Date Of Birth</Form.Label>
          <Form.Control
            type="date"
            value={form.Date_Of_Birth}
            onChange={(e) => changeHandler(e)}
            name="Date_Of_Birth"
          />
          {form.Date_Of_Birth == "" ? (
            <InputHelperMsg title="Please Choose Date" status="error" />
          ) : (
            <InputHelperMsg title={form.Date_Of_Birth} status="success" />
          )}
        </Form.Group>
        {}
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <hr />
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
          <Button variant="secondery">Sign In</Button>

          <Button variant="primary" type="submit"  >
            Sign Up
          </Button>
        </div>
      </Form>
      {cAlert.visible==true?<CAlert msg={cAlert.msg} status={cAlert.status} close={()=>{SetCAlert({visible:false})}}/>:null}
    </React.Fragment>
  );
};

const style = {
  error: {
    color: "red",
    padding: 5,
    display: "block",
  },
  success: {
    color: "green",
    padding: 5,
    display: "block",
  },
  form: {
    maxWidth: "600px",
    minWidth: 150,
    margin: "100px  auto 100px auto",
    boxShadow: "1px 1px 25px -10px",
    borderRadius: ".5em",
    padding: "1em",
    borderTop: "10px solid #198754",
  },
};

export default SignUp;
