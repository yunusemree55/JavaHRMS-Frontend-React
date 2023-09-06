import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

function SignedOut() {
  return (
    <>
      <Link to="/register">
        <Button color="blue">Kayıt Ol</Button>
      </Link>

      <Link to="/login">
        <Button color="green" style={{ marginLeft: "10px" }}>
          Giriş Yap
        </Button>
      </Link>
    </>
  );
}

export default SignedOut;
 