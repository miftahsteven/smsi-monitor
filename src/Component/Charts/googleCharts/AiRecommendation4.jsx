import React, { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { DonutChart } from "../../../Constant/index";
import { Chart } from "react-google-charts";
import CommenHeader from "../Commen";

const AiRecommendation2Class = ({ data, pieHole }) => {
  return (
    <Fragment>
      <Col sm='12' xl='12'>
        <Card>
          <CommenHeader title={"Pembinaan Madrasah"} />
          <CardBody className='chart-block'>
            <div className='chart-overflow' id='pie-chart1' style={{ width: "400px", left: 0 }}>
              <Chart
                width={data?.width}
                height={200}
                chartType={data?.chartType}
                loader={<div>{"Loading Chart"}</div>}
                data={data?.data}
                options={(data?.options, { pieHole: pieHole })}
                rootProps={data?.rootProps}
              />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default AiRecommendation2Class;
