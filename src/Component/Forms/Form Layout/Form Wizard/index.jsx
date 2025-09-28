import React, { Fragment, useState } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, Button, Badge } from "reactstrap";
import { H5 } from "../../../../AbstractElements";
import { FormWizardWithIcon } from "../../../../Constant";
import Registration from "./Registration";
import Email from "./Email";
import Birthdate from "./Birthdate";

const FormWizardContain = () => {
  const [step, setStep] = useState(0);

  const handleStepChange = (newStep) => {
    setStep(newStep);
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return <Registration />;
      case 1:
        return <Registration />;
      case 2:
        return <Email />;
      case 3:
        return <Birthdate />;
      default:
        return null;
    }
  };

  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col>
            <Card>
              <CardHeader className='pb-0'>
                <H5 className='m-0'>{FormWizardWithIcon}</H5>
              </CardHeader>
              <CardBody>
                <div className='step-indicators'>
                  <ul className='list-unstyled d-flex justify-content-evenly'>
                    <Badge className={step === 1 ? "active" : ""} onClick={() => handleStepChange(1)}>
                      Step 1
                    </Badge>
                    <Badge className={step === 2 ? "active" : ""} onClick={() => handleStepChange(2)}>
                      Step 2
                    </Badge>
                    <Badge className={step === 3 ? "active" : ""} onClick={() => handleStepChange(3)}>
                      Step 3
                    </Badge>
                  </ul>
                </div>
                <div className='step-content'>{renderStep()}</div>
                <div className='step-navigation d-flex justify-content-between mt-4'>
                  {step > 1 && (
                    <Button color='secondary' onClick={() => handleStepChange(step - 1)}>
                      Previous
                    </Button>
                  )}
                  {step < 3 && (
                    <Button color='primary' onClick={() => handleStepChange(step + 1)}>
                      Next
                    </Button>
                  )}
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default FormWizardContain;
