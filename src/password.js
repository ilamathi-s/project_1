import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Link} from "react-router-dom";
function password() {
  return (
    <div className="mb-3">
      <Form>
        <label for="mail" name="mail"> Mail id</label>
        <input name="mail" placeholder="Mail id"></input>
        <label for="password" name="password"> New Password:</label>
        <input name="password" placeholder="Password"></input>
        <label for="password" name="password">Confirm Password:</label>
        <input name="password" placeholder="Password"></input>
        <Button><Link to="signin" type="submit" variant="outline-success">Set</Link></Button>
      </Form>
    </div>
  );
}

export default password;
