import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Link} from "react-router-dom";
import '../Signin/Signin.css';
function Signin() {
  return (
    <div className="mb-3"> 
      <h2>Sign In</h2>
        <Form className="form" >
          <input htmlFor="mail" placeholder="Enter valid mail id"   required /><br/><br/>
          <input type="password" htmlFor="password" placeholder="Enter valid Password"  required/><br/><br/>
          <Button type="submit" variant="outline-success">Sign In</Button><br/>
          <Link to="/Signup" variant="link"  >New User</Link> 
          <Link to="/Forgotpassword" variant="link" className="spacing">Forget Password</Link>
        </Form>
    </div>
  );
}
export default Signin;
