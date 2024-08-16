import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Link} from "react-router-dom";
function Signin() {
  return (
    <div className="mb-3">
         
      <Form>
        <label htmlFor="mail">Mail id:
        <input htmlFor="mail" placeholder="Enter valid mail id"></input></label>
        <label htmlFor="password">Password:
        <input htmlFor="password" placeholder="Enter valid Password"></input></label>
        <Button type="submit" variant="outline-success">Sign In</Button>
      </Form>
      <Link to="/signup" variant="link" style={{ marginRight: '10px' }} >New User</Link> 
      <Link to="/password" variant="link">Forget Password</Link>
     
    </div>
    
  );
}

export default Signin;
