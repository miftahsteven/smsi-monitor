import { H5 } from '../../../../AbstractElements';
import SmsiData from './SmsiData';
import ServiceContactStatus from './ServiceContactStatus';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import React, { Fragment } from 'react';
import { More } from '../../../../Constant';

const MediaSmsi = () => {
  return (
    <Fragment>
      <Col xl="6" className="box-col-12 top-sell-sec des-xl-100">
        <Card>
          <CardHeader className="pb-0">
            <H5>10 Media SMSI</H5>
          </CardHeader>
          <CardBody>
            <SmsiData />
            <div className="text-center">
              <a className="f-w-700 btn-more" href="#javascript">{More}...</a>
            </div>
          </CardBody>
        </Card>
      </Col>
      {/* <ServiceContactStatus /> */}
    </Fragment>
  );
};
export default MediaSmsi;