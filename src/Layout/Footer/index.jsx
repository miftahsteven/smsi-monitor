import { P } from "../../AbstractElements";
import React, { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";

const Footer = () => {
  return (
    <Fragment>
      <footer className="footer">
        <Container fluid={true} className="p-0">
          <Row className="m-0">
            <Col md="6" className="footer-copyright p-0">
              <P attrPara={{ className: "mb-0" }}>
                Copyright 2025 © Recommedia All rights reserved.
              </P>
            </Col>
            <Col md="6" className="col-md-6 p-0">
              <P attrPara={{ className: "pull-right mb-0" }}>
                SMSI Media Insight
              </P>
            </Col>
          </Row>
        </Container>
      </footer>
    </Fragment>
  );
};
export default Footer;
