import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col } from "reactstrap";
import { H4, Image, P } from "../../../AbstractElements";
import { AskQuestion } from "../../../Constant";
import deletee from "../../../assets/images/dashboard/mirage-delete.png";

const AskQnA = () => {
  return (
    <Fragment>
      <Col xl='4' md='6' className='des-xl-50 box-col-6 help-sec-main'>
        <Card className='o-hidden help-sec'>
          <CardBody className='p-0'>
            <div className='help-desk text-center'>
              <div className='help-profile'>
                <div className='round-animation'>
                  <i></i>
                  <i></i>
                </div>
                <Image
                  attrImage={{
                    className: "img-fluid img-100",
                    src: `${deletee}`,
                  }}
                />
              </div>
              <H4 attrH4={{ className: "font-light" }}>Have a any question</H4>
              <P attrPara={{ className: "font-light" }}>Lorem ipsum is simply dummy text of the printing and typesetting industry.</P>
              <Link className='btn btn-light' to={`${process.env.PUBLIC_URL}/faq`}>
                {AskQuestion}
              </Link>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default AskQnA;
