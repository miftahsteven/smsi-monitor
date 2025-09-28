import { Btn } from '../../../../AbstractElements';
import { Password, Submit, Cancel, SimpleInput, Placeholder, Date, Month, Time, ColorPicker, MaximumLength, Textarea, StaticText, Telephone, DateAndTime, Week, Number, URL } from '../../../../Constant';
import React, { Fragment, useState } from 'react';
import { CardBody, CardFooter, Col, Form, Input, Label, Row } from 'reactstrap';

const BasicHtmlForm = () => {
  const [formData, setFormData] = useState({
    simpleInput: '',
    placeholder: '',
    password: '',
    number: '',
    telephone: '91-(999)-999-999',
    url: 'https://getbootstrap.com',
    dateAndTime: '2022-01-19T18:45:00',
    date: '2022-01-01',
    month: '2022-01',
    week: '2022-W09',
    time: '21:45:00',
    color: '#563d7c',
    maxLength: '',
    textarea: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Fragment>
      <Form className="form theme-form base-input">
        <CardBody>
          <Row>
            <Col>
              <Row className="mb-3">
                <Label className="col-sm-3 col-form-label">{SimpleInput}</Label>
                <Col sm="9">
                  <Input
                    className="form-control"
                    type="text"
                    name="simpleInput"
                    value={formData.simpleInput}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <Row className="mb-3">
                <Label className="col-sm-3 col-form-label">{Placeholder}</Label>
                <Col sm="9">
                  <Input
                    className="form-control"
                    type="text"
                    name="placeholder"
                    value={formData.placeholder}
                    placeholder="Type your title in Placeholder"
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <Row className="mb-3">
                <Label className="col-sm-3 col-form-label">{Password}</Label>
                <Col sm="9">
                  <Input
                    className="form-control"
                    type="password"
                    name="password"
                    value={formData.password}
                    placeholder="Password input"
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <Row className="mb-3">
                <Label className="col-sm-3 col-form-label">{Number}</Label>
                <Col sm="9">
                  <Input
                    className="form-control"
                    type="number"
                    name="number"
                    value={formData.number}
                    placeholder="Number"
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <Row className="mb-3">
                <Label className="col-sm-3 col-form-label">{Telephone}</Label>
                <Col sm="9">
                  <Input
                    className="form-control m-input"
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <Row className="mb-3">
                <Label className="col-sm-3 col-form-label">{URL}</Label>
                <Col sm="9">
                  <Input
                    className="form-control"
                    type="url"
                    name="url"
                    value={formData.url}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <Row className="mb-3">
                <Label className="col-sm-3 col-form-label">{DateAndTime}</Label>
                <Col sm="9">
                  <Input
                    className="form-control"
                    type="datetime-local"
                    name="dateAndTime"
                    value={formData.dateAndTime}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <Row className="mb-3">
                <Label className="col-sm-3 col-form-label">{Date}</Label>
                <Col sm="9">
                  <Input
                    className="form-control"
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <Row className="mb-3">
                <Label className="col-sm-3 col-form-label">{Month}</Label>
                <Col sm="9">
                  <Input
                    className="form-control"
                    type="month"
                    name="month"
                    value={formData.month}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <Row className="mb-3">
                <Label className="col-sm-3 col-form-label">{Week}</Label>
                <Col sm="9">
                  <Input
                    className="form-control"
                    type="week"
                    name="week"
                    value={formData.week}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <Row className='mb-3'>
                <Label className="col-sm-3 col-form-label">{Time}</Label>
                <Col sm="9">
                  <Input
                    className="form-control"
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <Row className='mb-3'>
                <Label className="col-sm-3 col-form-label pt-0">{ColorPicker}</Label>
                <Col sm="9">
                  <Input
                    className="form-control-color"
                    type="color"
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <Row className='mb-3'>
                <Label className="col-sm-3 col-form-label">{MaximumLength}</Label>
                <Col sm="9">
                  <Input
                    className="form-control"
                    type="text"
                    name="maxLength"
                    value={formData.maxLength}
                    placeholder="Content must be in 6 characters"
                    maxLength="6"
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <Row className='mb-3'>
                <Label className="col-sm-3 col-form-label pt-0">{StaticText}</Label>
                <Col sm="9">
                  <div className="form-control-static">
                    {'Hello !... This is static text'}
                  </div>
                </Col>
              </Row>
              <Row>
                <Label className="col-sm-3 col-form-label">{Textarea}</Label>
                <Col sm="9">
                  <textarea
                    className="form-control"
                    rows="5"
                    cols="5"
                    name="textarea"
                    value={formData.textarea}
                    placeholder="Default textarea"
                    onChange={handleChange}
                  ></textarea>
                </Col>
              </Row>
            </Col>
          </Row>
        </CardBody>
        <CardFooter className='pt-0'>
          <Col sm="9">
            <Btn attrBtn={{ color: 'primary', type: 'submit', className: 'me-2' }}>{Submit}</Btn>
            <Btn attrBtn={{ color: 'light', type: 'reset' }}>{Cancel}</Btn>
          </Col>
        </CardFooter>
      </Form>
    </Fragment>
  );
};

export default BasicHtmlForm;

