import React,{useState} from "react";
import { Navigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Link} from "react-router-dom";
import '../Signup/Signup.css';
import {toast} from 'react-toastify'
function Signup() {
    const [fname,setFname]=useState("");
    const [lname,setLname]=useState("");
    const [mailid,setMailid]=useState("");
    const [password,setPassword]=useState("");
    const handlesubmit=(e)=>{
      e.preventDefault();
      let regobj={fname,lname,mailid,password};
      fetch("http://localhost:3000/Signup",{
           method:"POST",
           headers:{'content-type':'application/json'},
           body:JSON.stringify(regobj)
      }).then((res)=>{
           toast.success('Signed up successfully')
           Navigate('/Signin');
      }).catch((err)=>{
          toast.error('Failed:'+err.message);
      });
    }
 
  return (
    <div className="mb-3">
      <h2>Sign Up</h2>
      <Form className="form" onSubmit={handlesubmit}>
        <input value={fname} onChange={e=> setFname(e.target.value)} placeholder="First name"></input>
        <input value={lname} onChange={e=> setLname(e.target.value)}  placeholder="Last name"></input>
        <input  value={mailid} onChange={e=> setMailid(e.target.value)}  placeholder="Mail id"></input>
        <input  value={password} onChange={e=> setPassword(e.target.value)}  placeholder="Password" type="password"></input>
        <Button variant="outline-success" type="submit"> Sign Up</Button>
        <p>Already Have an Account<Link to="/Signin" variant="link">Sign In</Link> </p>
      </Form>
      
      
       
    </div>
  );
}

export default Signup;
