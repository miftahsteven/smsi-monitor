import { Col, Container, Row } from "reactstrap";
import SignInForm from "./SignInForm";
import imgg from "../../src/assets/images/login/smsi_background.jpg";

export default function SignIn() {
  return (
    <Container className='p-0' fluid>
      <Row className='m-0'>
        <Col xs={12} className='p-0' style={{ backgroundImage: `url(${imgg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", display: "block" }}>
          <div className='login-card'>
            <SignInForm />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
