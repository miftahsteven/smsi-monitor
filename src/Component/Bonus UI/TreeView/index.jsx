import React, { Fragment } from "react";
import { Container, Row } from "reactstrap";
import BasicTree from "./BasicTree";
import CheckboxTree from "./CheckboxTree";

const TreeViewContain = () => {
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <BasicTree />
          <CheckboxTree />
        </Row>
      </Container>
    </Fragment>
  );
};

export default TreeViewContain;
