import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Link} from "react-router-dom";
import '../Signup/Signup.css'
function Signup() {
  return (
    <div className="mb-3">
      <h2>Sign Up</h2>
      <Form className="form">
        <label htmlFor="fname">First Name:</label>
        <input htmlFor="fname" placeholder="First name"></input>
        <label  htmlFor="lname">Last Name:</label>
        <input htmlFor="lname" placeholder="Last name"></input>
        <label  htmlFor="mail">Mail id:</label>
        <input htmlFor="mail" placeholder="Mail id"></input>
        <label  htmlFor="password"> Password:</label>
        <input htmlFor="password" placeholder="Password" type="password"></input>
        <Button variant="outline-success" type="submit"> Sign Up</Button>
        <p>Already Have an Account<Link to="/" variant="link">Sign In</Link> </p>
      </Form>
      
      
       
    </div>
  );
}

export default Signup;
