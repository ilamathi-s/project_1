import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Link} from "react-router-dom";
function Signup() {
  return (
    <div className="mb-3">
      <Form>
        <label name="fname">First Name:
        <input name="fname" placeholder="First name"></input></label>
        <label  name="lname">Last Name:
        <input name="lname" placeholder="Last name"></input></label>
        <label  name="mail">Mail id:
        <input name="mail" placeholder="Mail id"></input></label>
        <label  name="password"> Password:
        <input name="password" placeholder="Password"></input></label>
        <Button variant="outline-success" type="submit"> Sign Up</Button>
      </Form>
      <p>Already Have an Account <Link to="/signin" variant="link"  >Sign In</Link></p>
    </div>
  );
}

export default Signup;
