import React from "react";
import { Col, Container, Row } from "reactstrap";
import LoginForm from "./LoginForm";

const LoginSample = () => {
  return (
    <Container className='p-0' fluid>
      <Row className='m-0'>
        <Col xs={12} className='p-0'>
          <div className='login-card1 login-dark'>
            <LoginForm />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginSample;
