import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Link} from "react-router-dom";
import '../Forgotpassword/Forgotpassword.css'
function Password() {
  return (
    <div className="mb-3">
      <h2>Forgot Password</h2>
      <Form className="form">
        <label  htmlFor="mail"> Mail id</label>
        <input htmlFor="mail" placeholder="Mail id"></input>
        <Button type="submit"  variant="outline-success">
          <Link to="/Setpassword" >Send</Link>
          </Button>
      </Form>
    </div>
  );
}

export default Password;
