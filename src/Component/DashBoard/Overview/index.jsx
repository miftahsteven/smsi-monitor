import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import PerformanceOverview from './PerformanceOverview/PerformanceOverview';
import AllServices from './AllServices';
import NumberOfCalculation from './NumberCalculation';
import BussinessGrowth from './BusinessGrowth';
import OurActivities from './OurActivities';
import NewProduct from './NewProducts/NewProduct';
import Payment from './Payments';
import ProductMarketValue from './ProductMarketValue';
import MediaSmsi from './AllServices/MediaSmsi';
import IndonesiaMap from './IndonesianMap';
//import MediaSmsi from './AllServices/MediaSmsi';

const OverviewContain = () => {
  return (
    <Fragment>
      <Container fluid={true} className="ecommerce-dash">
        <Row className="size-column">
          <IndonesiaMap />
          <AllServices />
          <MediaSmsi />
        </Row>
      </Container>
    </Fragment>
  );
};
export default OverviewContain;