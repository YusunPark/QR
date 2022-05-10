import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import styled from "styled-components";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

function Create({ props }) {
  let size = 300;
  let url = `https://chart.googleapis.com/chart?cht=qr&chs=${size}x${size}&chl=%EB%AC%BC%EA%B1%B4%EC%9D%84+%EC%A3%BC%EC%9B%8C%EC%A3%BC%EC%85%94%EC%84%9C+%EA%B0%90%EC%82%AC%ED%95%A9%EB%8B%88%EB%8B%A4.%0D%0A%EC%95%84%EB%9E%98%EC%9D%98+%EC%97%B0%EB%9D%BD%EC%B2%98%EB%A1%9C+%EC%97%B0%EB%9D%BD+%EB%B6%80%ED%83%81%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0D%0A${props[0]}+%0D%0A${props[1]}`;



   
  const onDownloadBtn = () => {
    saveAs(url, "qr.png");
  };

  return (
    <div>
      <p>Hello React!</p>
      {console.log(props)}
      <h2>{props[0]}님의 qr 코드 입니다.</h2>
      <p>아래의 QR코드를 다운로드 하고, 필요한 곳에 붙여서 사용하세요!</p>
      <div>
        <img src={url} alt="qr code" width="400" height="400" />
      </div>

      <Button variant="outline-primary">
        <Link to="/" style={{ textDecoration: "none" }}>
          새로 만들기
        </Link>{" "}
      </Button>
      <Button variant="outline-primary" onClick={onDownloadBtn}>
        이미지 다운로드
      </Button>
    </div>
  );
}

export default Create;
