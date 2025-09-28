import React, { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import { Card, CardBody, CardHeader, Col, Form } from "reactstrap";
import { H5 } from "../../../AbstractElements";
import CommonFileUpload from "../../../CommonElements/CommonFileUpload";
import { MultiImageUpload } from "../../../Constant";

const Dropzone2 = () => {
  return (
    <Fragment>
      <Col sm="12">
        <Card>
          <CardHeader className="pb-0">
            <H5>{MultiImageUpload}</H5>
          </CardHeader>
          <CardBody>
            <Form>
              <ToastContainer />
              <div className="dz-message needsclick">
                <CommonFileUpload multiple />
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default Dropzone2;
