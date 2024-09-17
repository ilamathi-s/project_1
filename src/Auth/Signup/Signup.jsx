import React,{useState} from "react";
import axios from 'axios';
import {  useNavigate } from "react-router-dom";
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
    const navigate=useNavigate();
    const handlesubmit=(e)=>{
      e.preventDefault();
      let regobj={
      fullName: `${fname} ${lname}`,
      email:mailid,
      password:password};
      axios.post('http://localhost:3001/api/auth/signup', regobj)
    .then((response) => {
      if (response.status === 200) {
        toast.success('Signed up successfully');
        navigate('/Signin');
      }
    })
    .catch((error) => {
      if (error.response && error.response.data) {
        toast.error('Failed: ' + error.response.data.message || "Sign up failed");
      } else {
        toast.error('Failed: ' + error.message);
      }
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
