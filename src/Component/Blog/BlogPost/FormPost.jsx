import { Title, Type, Category, Content, Text, Audio, Video, Image } from '../../../Constant';
import React, { Fragment, useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import SimpleMDE from 'react-simplemde-editor';

const FormPost = () => {
  const [text, setText] = useState(`Enter Your Message...`);
  const handleChange = () => {
    setText('Enter Your Message...');
  };
  const data = [
    { name: 'Lifestyle' },
    { name: 'Travel' }
  ];
  return (
    <Fragment>
      <Form className="row needs-validation">
        <Col sm="12">
          <FormGroup>
            <Label for="validationCustom01">{Title}:</Label>
            <Input className="form-control" id="validationCustom01" type="text" placeholder="Post Title" required="" />
            <div className="valid-feedback">{'Looks good!'}</div>
          </FormGroup>
          <FormGroup>
            <Label>{Type}:</Label>
            <div className="m-checkbox-inline">
              <Label for="edo-ani">
                <Input className="radio_animated" id="edo-ani" type="radio" name="rdo-ani" />{Text}
              </Label>
              <Label for="edo-ani1">
                <Input className="radio_animated" id="edo-ani1" type="radio" name="rdo-ani" />{Image}
              </Label>
              <Label for="edo-ani2">
                <Input className="radio_animated" id="edo-ani2" type="radio" name="rdo-ani" defaultChecked />{Audio}
              </Label>
              <Label for="edo-ani3">
                <Input className="radio_animated" id="edo-ani3" type="radio" name="rdo-ani" />{Video}
              </Label>
            </div>
          </FormGroup>
          <FormGroup>
            <div className="col-form-Label">{Category}:
              <Typeahead
                id="multiple-typeahead"
                className="mt-2"
                clearButtons
                labelKey="name"
                multiple
                options={data}
                placeholder="Select Your Name...."
              />
            </div>
          </FormGroup>
          <div className="email-wrapper">
            <div className="theme-form">
              <FormGroup>
                <Label>{Content}:</Label>
                <SimpleMDE id="editor_container" onChange={handleChange} value={text} options={{   autofocus: true,   spellChecker: false }}/>
              </FormGroup>
            </div>
          </div>
        </Col>
      </Form>
    </Fragment>
  );
};
export default FormPost;