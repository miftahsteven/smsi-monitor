import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import AnnuallyEarnings from './AnnuallyEarnings';
import Calender from './Calender';
import GreetingProject from './GreetingProject';
//import ManageInvoice from './ManageInvoice';
import ReportingKPI from './ReportingKPI';
import VisitorsCountries from './VisitorsCountries';

const KpiReportingContain = () => {
  return (
    <Fragment>
      <Container fluid={true} className="project-dash">
        <Row className="size-column">
          {/* <GreetingProject /> */}
          {/* <Calender /> */}
          {/* <AnnuallyEarnings /> */}
          {/* <VisitorsCountries /> */}
          <ReportingKPI />
        </Row>
      </Container>
    </Fragment>
  );
};
export default KpiReportingContain;