import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      Homepage
      <br />
      <Button type="primary" danger>
        <Link to="/Login">LoginPage</Link>
      </Button>
    </div>
  );
}
