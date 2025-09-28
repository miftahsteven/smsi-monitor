import { H5 } from '../../../AbstractElements';
import React, { Fragment } from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';
import SearchNotFoundClass from "./SearchNotFoundClass";
const NoDataFoundClass = ({ title }) => {
  return (
    <Fragment>
      <Card className="mb-0">
        <CardHeader className="d-flex">
          <H5>{title}</H5>
          <span className="f-14 pull-right mt-0">{'0 Contacts'}</span>
        </CardHeader>
        <CardBody>
        <SearchNotFoundClass />
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default NoDataFoundClass;