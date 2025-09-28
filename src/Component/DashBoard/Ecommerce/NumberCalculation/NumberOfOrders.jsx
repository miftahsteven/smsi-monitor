import React, { Fragment, useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";
import { H4, P } from "../../../../AbstractElements";
import { ApexRadialbar3 } from "../../../../Pages/DashBoard/Ecommerce/Ecom_ChartData/SmallCharts";

const NumberOfOrders = () => {
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    let timer = setTimeout(() => setDisplay(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!display) {
    return <Fragment></Fragment>;
  }
  return (
    <Fragment>
      <Col sm='4' className='des-sm-100'>
        <Card>
          <CardBody>
            <div className='redial-block'>
              <div className='redial-chart'>
                <ReactApexChart id='chart-update' options={ApexRadialbar3.options} series={ApexRadialbar3.series} type='radialBar' />
              </div>
              <div className='meeting-details text-center'>
                <H4>955456</H4>
                <P>Number of Order</P>
                <div className='meeting-rate success-rate'>
                  <span className='font-success'>84.00%</span>
                  <P>(30 days)</P>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default NumberOfOrders;
