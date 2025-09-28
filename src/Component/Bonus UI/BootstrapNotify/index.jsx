import React, { Fragment } from "react";
import { Container, Row } from "reactstrap";
import Basic from "./Basic";
import CustomAutocloseClass from "./CustomAutoclose";
import CustomDirectionsClass from "./CustomDirections";

const BootstrapNotifyContain = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Basic />
          <CustomDirectionsClass />
          <CustomAutocloseClass />
        </Row>
      </Container>
    </Fragment>
  );
};

export default BootstrapNotifyContain;
