import React, { Fragment, useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";
import { H4, P } from "../../../../AbstractElements";
import { ApexRadialbar } from "../../../../Pages/DashBoard/Ecommerce/Ecom_ChartData/SmallCharts";

const NumberOfMeeting = () => {
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
                <ReactApexChart id='chart-update-1' options={ApexRadialbar.options16} series={ApexRadialbar.series} type='radialBar' />
              </div>
              <div className='meeting-details text-center'>
                <H4>28,129</H4>
                <P>Sumber Nasional</P>
                <div className='meeting-rate primary-rate'>
                  <span className='font-primary'>Naik 2.00%</span>
                  <P>(30 Hari)</P>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default NumberOfMeeting;
