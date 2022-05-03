import React from "react";
import "./App.css";
import { Carousel, Button, Form, Col, Row } from "react-bootstrap";
import styled from "styled-components";

function App() {
  let Img = styled.img`
    padding: 10px;
    height: 20rem;
  `;

  let PaddingDiv = styled.div`
    padding: 20px;
  `;

  let [Number, ChangeNum] = useState('');

  return (
    <div className="App">
      <Carousel variant="dark">
        <Carousel.Item>
          <Img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/01/1c/df/011cdf2a20ced518d3fb2b448e8024f8.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/01/1c/df/011cdf2a20ced518d3fb2b448e8024f8.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/01/1c/df/011cdf2a20ced518d3fb2b448e8024f8.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Form>
        <Form.Group as={Row} className="1">
            <Form.Label column sm="2">
              전화번호
            </Form.Label>
          <Col sm="5">
            <Form.Control onChange={(e)=>{ console.log(e.target.value)}} type="text" id="inputPhoneNum" />
          </Col>
        </Form.Group>
      </Form>
      <PaddingDiv>
        <Button variant="primary">QR 코드 생성하기</Button>
      </PaddingDiv>
    </div>
  );
}

export default App;
