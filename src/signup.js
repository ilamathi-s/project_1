import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Link} from "react-router-dom";
function Signup() {
  return (
    <div className="mb-3">
      <Form>
        <label htmlFor="fname">First Name:
        <input htmlFor="fname" placeholder="First name"></input></label>
        <label  htmlFor="lname">Last Name:
        <input htmlFor="lname" placeholder="Last name"></input></label>
        <label  htmlFor="mail">Mail id:
        <input htmlFor="mail" placeholder="Mail id"></input></label>
        <label  htmlFor="password"> Password:
        <input htmlFor="password" placeholder="Password"></input></label>
        <Button variant="outline-success" type="submit"> Sign Up</Button>
      </Form>
      <p>Already Have an Account <Link to="/" variant="link">Sign In</Link> </p>
      
       
    </div>
  );
}

export default Signup;
