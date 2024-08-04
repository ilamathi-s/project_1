import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Link} from "react-router-dom";
function Signup() {
  return (
    <div className="mb-3">
      <Form>
        <label for="fname" name="fname">First Name:</label>
        <input name="fname" placeholder="First name"></input>
        <label for="lname" name="lname">Last Name:</label>
        <input name="lname" placeholder="Last name"></input>
        <label for="mail" name="mail">Mail id:</label>
        <input name="mail" placeholder="Mail id"></input>
        <label for="password" name="password"> Password:</label>
        <input name="password" placeholder="Password"></input>
        <Button variant="outline-success" type="submit"> Sign Up</Button>
      </Form>
      <p>Already Have an Account <Link to="signin.js" variant="link" Sign In /></p>
    </div>
  );
}

export default Signup;
