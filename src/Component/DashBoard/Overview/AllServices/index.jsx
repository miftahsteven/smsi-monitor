import { H5, P } from '../../../../AbstractElements';
import ServiceContact from './ServiceContact';
import ServiceContactStatus from './ServiceContactStatus';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import React, { Fragment } from 'react';
import { More } from '../../../../Constant';

const AllServices = () => {
  return (
    <Fragment>
      <Col xl="6" className="box-col-12 top-sell-sec des-xl-100">
        <Card>
          <CardHeader className="pb-0">
            <H5>Sebaran Berita Per Daerah</H5>
            <P>Data Dari : 26 - 30 September 2025</P>
          </CardHeader>
          <CardBody>
            <ServiceContact />
          </CardBody>
        </Card>
      </Col>
      {/* <ServiceContactStatus /> */}
    </Fragment>
  );
};
export default AllServices;