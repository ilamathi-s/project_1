import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Link} from "react-router-dom";
function Password() {
  return (
    <div className="mb-3">
      <Form>
        <label  htmlFor="mail"> Mail id
        <input htmlFor="mail" placeholder="Mail id"></input></label>
        <label htmlFor="password"> New Password:
        <input htmlFor="password" placeholder="Password"></input></label>
        <label  htmlFor="password">Confirm Password:
        <input htmlFor="password" placeholder="Password"></input></label>
        <Button type="submit"  variant="outline-success">
          <Link to="/signin" >Set</Link>
          </Button>
      </Form>
    </div>
  );
}

export default Password;
