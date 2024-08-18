import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Link} from "react-router-dom";
import '../Forgotpassword/Forgotpassword.css'
function Setpassword() {
  return (
    <div className="mb-3">
      <h2>Set Password</h2>
      <Form className="form">
        <label htmlFor="password" > New Password:</label>
        <input htmlFor="password" placeholder="Password" type="password"></input>
        <label  htmlFor="password">Confirm Password:</label>
        <input htmlFor="password" placeholder="Password" type="password"></input>
        <Button type="submit"  variant="outline-success">
          <Link to="/" >Set</Link>
          </Button>
      </Form>
    </div>
  );
}

export default Setpassword;
