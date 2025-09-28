import React, { Fragment } from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import { H5 } from "../../../AbstractElements";
import { Examples } from "../../../Constant";
import Timeline1 from "./timeline1";

const TimelineContain = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <H5>
                  {Examples} {"1"}
                </H5>
              </CardHeader>
              <CardBody>
                <Timeline1 />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default TimelineContain;
