import React,{useState} from "react";
import {toast} from 'react-toastify';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Link} from "react-router-dom";
import '../Signin/Signin.css';

function Signin() {
  const [mail,setMail]=useState("");
  const [password,setPassword]=useState("");
  const ProceedLogin = (e)=>{
    e.preventDefault();
    if(validate()){
        fetch("http://localhost:3000/Signin"+mail).then((res)=>{
          return res.json();
        }).then((resp)=>{
          console.log(resp)
        }).catch((err)=>{
          toast.error("Login Failed due to :"+err.message);
        });
    }
  }
  const validate=()=>{
    let result=true;
    if(mail==='' || mail===null){
      result=false;
      toast.warning('Please enter mail id');
    }
    if(password==='' || password===null){
      result=false;
      toast.warning('Please enter password');
    }
    return result;
  }
  return (
    <div className="mb-3"> 
        <Form className="form" onSubmit={ProceedLogin}>
        <h2 >Sign In</h2>
          <input type="text" name="mail"
          value={mail} 
          onChange={e=>setMail(e.target.value)} 
          placeholder="Mail id"   required 
          /><br/><br/>
          <input type="password" name="password"
          value={password} 
          onChange={e=>setPassword(e.target.value)} 
          placeholder="Password"  required
          /><br/><br/>
          <Button type="submit"  variant="outline-success">Sign In</Button><br/>
          <Link to='/Signup' variant="link"  >New User</Link> 
          <Link to="/Forgotpassword" variant="link" className="spacing">Forget Password</Link>
        </Form>

    </div>
  );
}
export default Signin;
