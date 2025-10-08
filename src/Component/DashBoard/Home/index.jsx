import { Fragment, useState } from "react";
import { Container, Row } from "reactstrap";
// import PerformanceOverview from './PerformanceOverview/PerformanceOverview';
import AllServices from "./AllServices";
// import NumberOfCalculation from './NumberCalculation';
// import BussinessGrowth from './BusinessGrowth';
// import OurActivities from './OurActivities';
// import NewProduct from './NewProducts/NewProduct';
// import Payment from './Payments';
// import ProductMarketValue from './ProductMarketValue';
import MediaSmsi from "./AllServices/MediaSmsi";
import IndonesiaMap from "./IndonesianMap";
import FilterDate from "./FilterDate";
//import MediaSmsi from './AllServices/MediaSmsi';

const Home = () => {
  const [dataFilterAPI, setDataFilterAPI] = useState(null);

  return (
    <Fragment>
      <Container fluid={true} className="ecommerce-dash">
        <Row className="size-column">
          <IndonesiaMap dataFilterAPI={dataFilterAPI} />
          <FilterDate sentData={setDataFilterAPI} />
          <AllServices dataFilterAPI={dataFilterAPI} />
          <MediaSmsi dataFromAPI={dataFilterAPI} />
        </Row>
      </Container>
    </Fragment>
  );
};
export default Home;
