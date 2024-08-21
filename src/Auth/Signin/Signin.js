import React,{useState} from "react";
import Axios from 'axios' 
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Link} from "react-router-dom";
import '../Signin/Signin.css';
function Signin() {
  const [mail,setMail]=useState("");
  const [password,setPassword]=useState("");

  const [email,setEmail]=useState("");
  const [passWord,setPassWord]=useState("");
  const Signin = () =>{
    Axios.post('http://localhost:3000/Signin', {
      email: mail,
      password: password }).then((res) => {console.log(res);});

  }
  const Login = () =>{
    Axios.post('http://localhost:3000/Signin', {
      email: email,
      password: passWord }).then((res) => {console.log(res);});

  }
  return (
    <div className="mb-3"> 
        <Form className="form">
        <h2 >Sign In</h2>
          <input type="text" onChange={(m) => {setMail(m.target.value); setEmail(m.target.value);}}  htmlFor="mail" placeholder="Mail id"   required /><br/><br/>
          <input type="password" onChange={(p) => {setPassword(p.target.value); setPassWord(p.target.value);}}  htmlFor="password" placeholder="Password"  required/><br/><br/>
          <Button type="submit" onClick={() => {Signin(); Login();}} variant="outline-success">Sign In</Button><br/>
          <Link to="/Signup" variant="link"  >New User</Link> 
          <Link to="/Forgotpassword" variant="link" className="spacing">Forget Password</Link>
        </Form>

    </div>
  );
}
export default Signin;
