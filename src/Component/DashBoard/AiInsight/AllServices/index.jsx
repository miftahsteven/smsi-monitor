import { H5 } from '../../../../AbstractElements';
import ServiceContact from './ServiceContact';
import ServiceContactStatus from './ServiceContactStatus';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import React, { Fragment, useContext } from 'react';
import { More } from '../../../../Constant';
import AiRecommendation1 from '../../../Charts/googleCharts/AiRecommendation1';
import AiRecommendation2 from '../../../Charts/googleCharts/AiRecommendation2';
import AiRecommendation3 from '../../../Charts/googleCharts/AiRecommendation3';
import AiRecommendation4 from '../../../Charts/googleCharts/AiRecommendation4';

import GoogleContext from '../../../../_helper/GoogleChart';

const AllServices = () => {
  const chartData = useContext(GoogleContext);
  return (
    <Fragment>
      <Col xl="8" className="box-col-12 top-sell-sec des-xl-100">
        <Row>
          <Col sm='12' xl='6'>
            <AiRecommendation1 data={chartData.googleChart.SentimentChart} pieHole={0.4} />
          </Col>
          <Col sm='12' xl='6'>
            <AiRecommendation2 data={chartData.googleChart.SentimentChart2} pieHole={0.4} />
          </Col>
        </Row>
        <Row>
          <Col sm='12' xl='6'>
            <AiRecommendation3 data={chartData.googleChart.SentimentChart3} pieHole={0.4} />
          </Col>
          <Col sm='12' xl='6'>
            <AiRecommendation4 data={chartData.googleChart.SentimentChart4} pieHole={0.4} />
          </Col>
        </Row>
      </Col>
    </Fragment>
  );
};
export default AllServices;