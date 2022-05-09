import React from "react";
import { Link } from "react-router-dom";


function Create({props}) {

  return (
    <div>
      <p>Hello React!</p>
      {console.log(props)}
      <div>{props[0]}님의 qr 코드 입니다.</div>
      <div>{props[1]}</div>

      

      <Link to="/">helloWorld로</Link> <br />
      <Link to="/create">helloWorld/123으로</Link>
    </div>
  );
}

export default Create;
