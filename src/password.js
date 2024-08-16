import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Link} from "react-router-dom";
function Password() {
  return (
    <div className="mb-3">
      <Form>
        <label  name="mail"> Mail id
        <input name="mail" placeholder="Mail id"></input></label>
        <label name="password"> New Password:
        <input name="password" placeholder="Password"></input></label>
        <label  name="password">Confirm Password:
        <input name="password" placeholder="Password"></input></label>
        <Button><Link to="/signin" type="submit" variant="outline-success">Set</Link></Button>
      </Form>
    </div>
  );
}

export default Password;
