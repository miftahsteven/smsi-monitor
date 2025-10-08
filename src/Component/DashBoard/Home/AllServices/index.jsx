import { H5 } from "../../../../AbstractElements";
import ServiceContact from "./ServiceContact";
// import ServiceContactStatus from "./ServiceContactStatus";
import { Button, Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import React, { Fragment } from "react";
// import { More } from "../../../../Constant";
import { generateTopLocalAPI } from "../homeServices";
import { toast } from "react-toastify";

const AllServices = ({ dataFilterAPI }) => {
  const data = dataFilterAPI;

  const onClickGenerate = async () => {
    const response = await generateTopLocalAPI();

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
          <CardHeader className="pb-0">
            <Row className="d-flex align-items-center">
              <Col md="6">
                <H5>Sebaran Berita Per Daerah</H5>
                <span>Data Dari : {data?.data?.periode ?? "-"}</span>
              </Col>
              <Col md="6">
                <div className="d-flex align-items-center justify-content-end">
                  <Button
                    color="success"
                    className="btn btn-pill btn-air-success btn-sm float-end"
                    onClick={onClickGenerate}
                  >
                    Generate Top Local News Now
                  </Button>
                </div>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <ServiceContact dataFilterAPI={dataFilterAPI} />
          </CardBody>
        </Card>
      </Col>
      {/* <ServiceContactStatus /> */}
    </Fragment>
  );
};
export default AllServices;
