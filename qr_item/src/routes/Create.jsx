import React from "react";
import { Link } from "react-router-dom";

function Create() {
  return (
    <div>
      <p>Hello React!</p>
      <Link to="/">helloWorld로</Link> <br />
      <Link to="/create">helloWorld/123으로</Link>
    </div>
  );
}

export default Create;
