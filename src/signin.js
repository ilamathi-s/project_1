import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Link} from "react-router-dom";
function signin() {
  return (
    <div className="mb-3">
      <Form>
        <label for="mail">Mail id:</label>
        <input name="mail" placeholder="Enter valid mail id"></input>
        <label for="password">Password:</label>
        <input name="password" placeholder="Enter valid Password"></input>
        <Button type="submit" variant="outline-success">Sign In</Button>
      </Form>
      <Link to="singup.js" variant="link" New User />
      <Link to="password.js" variant="link" Forget Password />
    </div>
  );
}

export default signin;
