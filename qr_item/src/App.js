import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Carousel, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import Create from "./routes/Create";
import Background from "./img/Screenshot_56.png";



let CenterForm = styled.div`
  text-align: left;
  padding-left: 3rem;
  padding-right: 3rem;
`;

let BgImg = styled.div`
  height: 100vh;
  background-image: url(${Background});
  background-size: 100% 100%;
`;

let CardDiv = styled.div`
 
  margin: 15px;
  height: 20rem;
  background-color: #56545436;
`;

function App() {
  let [name, submitName] = useState("");
  let [phone, submitPhone] = useState("");

  let navigate = useNavigate();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <BgImg>
              <Carousel variant="dark">
                <Carousel.Item>
                  <CardDiv />
                  <Carousel.Caption>
                    <h5>분실물</h5>
                    <p>나만의 QR코드를 부착하여 분실물을 쉽게 찾아보세요. </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <CardDiv />
                  <Carousel.Caption>
                    <h5>미아 방지</h5>
                    <p>
                      소중한 아이에게 부모님의 연락처를 가진 QR코드를
                      선물해주세요.{" "}
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
              <CenterForm>
                <Form>
                  <h4>QR 생성을 위해서 정보를 입력해주세요!</h4>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label column sm="3">
                      이름
                    </Form.Label>
                    <Form.Control
                      className="input-box"
                      onChange={(e) => {
                        submitName(e.target.value);
                        console.log(e.target.value);
                        console.log(name);
                      }}
                      type="text"
                      id="inputName"
                      placeholder="Name"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="forNumber">
                    <Form.Label column sm="3">
                      전화번호
                    </Form.Label>
                    <Form.Control
                      className="input-box"
                      onChange={(e) => {
                        submitPhone(e.target.value);
                      }}
                      type="text"
                      id="inputPhoneNum"
                      placeholder="Phone Number"
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    onClick={() => {
                      navigate("/create");
                    }}
                    type="submit"
                  >
                    QR 코드 생성하기
                  </Button>
                </Form>
              </CenterForm>
            </BgImg>
          }
        />
        <Route
          path="/create"
          element={
            <BgImg>
              <Create props={[name, phone]} />
            </BgImg>
          }
        />
      </Routes>
    </>
  );
}

export default App;
