import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, Form } from 'reactstrap';
import { H5 } from '../../../AbstractElements';
import CommonFileUpload from '../../../CommonElements/CommonFileUpload';
import { CustomFileUpload } from '../../../Constant';

const Dropzone5 = () => {
  return (
    <Fragment>
      <Col sm="12">
        <Card>
          <CardHeader className="pb-0">
            <H5>{CustomFileUpload}</H5>
          </CardHeader>
          <CardBody>
            <Form>
              <div className="dz-message needsclick">
                <CommonFileUpload />
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default Dropzone5;