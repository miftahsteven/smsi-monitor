import React, { Fragment, useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import DatePicker from "react-datepicker";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { H6 } from "../../../../AbstractElements";
import { CompanyName, Location, Period, Position, YourExperience } from "../../../../Constant";

const ExperienceClass = () => {
  const [startDate2, setStartDate2] = useState(new Date());
  const [startDate3, setStartDate3] = useState(new Date());

  const handleChange2 = (date) => {
    setStartDate2(date);
  };

  const handleChange3 = (date) => {
    setStartDate3(date);
  };

  return (
    <Fragment>
      <H6 attrH6={{ className: "mb-0" }}>{YourExperience}</H6>
      <Form className="theme-form">
        <Row>
          <Col xl="6" className="xl-100">
            <FormGroup>
              <Label htmlFor="exampleFormControlInput7">
                {Location}:<span className="font-danger">*</span>
              </Label>
              <Input className="form-control" id="exampleFormControlInput7" type="text" placeholder="Enter Location" />
            </FormGroup>
          </Col>
          <Col xl="6" className="xl-100">
            <Label className="col-form-label text-end pt-0">
              {Period}:<span className="font-danger">*</span>
            </Label>
            <Row>
              <Col sm="6">
                <FormGroup>
                  <DatePicker className="form-control" selected={startDate2} onChange={handleChange2} />
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <DatePicker className="form-control" selected={startDate3} onChange={handleChange3} />
                </FormGroup>
              </Col>
            </Row>
          </Col>
          <Col xl="6" className="xl-100">
            <div className="col-form-label pt-0">
              {Position}:<span className="font-danger">*</span>
            </div>
            <FormGroup>
              <Typeahead id="basic-typeahead" labelKey="name" options={["Web Designer", "Graphic Designer", "UI Designer", "UI/UX Designer"]} placeholder="Enter Position" />
            </FormGroup>
          </Col>
          <Col xl="6" className="xl-100">
            <FormGroup>
              <div className="col-form-label pt-0">
                {CompanyName}:<span className="font-danger">*</span>
              </div>
              <Input className="form-control" type="text" placeholder="Enter Company Name" />
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </Fragment>
  );
};
export default ExperienceClass;
