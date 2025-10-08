import { H5 } from "../../../../AbstractElements";
import SmsiData from "./SmsiData";
// import ServiceContactStatus from "./ServiceContactStatus";
import { Button, Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import React, { Fragment } from "react";
import { generateSmsiTopAPI } from "../homeServices";
import { toast } from "react-toastify";

const MediaSmsi = ({ dataFromAPI }) => {
  const onClickGenerate = async () => {
    const response = await generateSmsiTopAPI();

    if (response.success) {
      toast.success(response.message, {
        position: "top-right",
      });
    } else {
      toast.error(response.message, {
        position: "top-right",
      });
    }
  };
  return (
    <Fragment>
      <Col xl="6" className="box-col-12 top-sell-sec des-xl-100">
        <Card>
          <CardHeader className="">
            <Row className="d-flex align-items-center">
              <Col md="6">
                <H5>10 Media SMSI</H5>
              </Col>
              <Col md="6">
                <div className="d-flex align-items-center justify-content-end">
                  <Button
                    color="success"
                    className="btn btn-pill btn-air-success btn-sm float-end"
                    onClick={onClickGenerate}
                  >
                    Generate SMSI Top News Now
                  </Button>
                </div>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <SmsiData dataFromAPI={dataFromAPI} />
          </CardBody>
        </Card>
      </Col>
      {/* <ServiceContactStatus /> */}
    </Fragment>
  );
};
export default MediaSmsi;
