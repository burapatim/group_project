import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div>
      LoginPage
      <br />
      <Button type="primary" danger>
        <Link to="/">Homepage</Link>
      </Button>
    </div>
  );
}

export default LoginPage;
