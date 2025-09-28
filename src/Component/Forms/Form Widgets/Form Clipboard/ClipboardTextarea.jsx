import { H5, P } from "../../../../AbstractElements";
import React, { Fragment, useState } from "react";
import { Button, Card, CardBody, CardHeader, Col, Input } from "reactstrap";

const ClipboardTextarea = () => {
  const vall = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has";
  const [state, setState] = useState(vall);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(state);
    setState(state);
  };

  const handleCut = async () => {
    await navigator.clipboard.writeText(state);
    setState("");
  };
  return (
    <Fragment>
      <Col sm="12" md="6">
        <Card>
          <CardHeader className="pb-0">
            <H5>Clipboard On Textarea</H5>
          </CardHeader>
          <CardBody>
            <div className="clipboaard-container">
              <P attrPara={{ className: "card-description" }}>Cut/copy from textarea</P>
              <Input className="form-control" id="clipboardExample2" type="textarea" rows="1" spellCheck="false" value={state} onChange={({ target: { value } }) => setState(value)}></Input>
              <div className="mt-3">
                <Button className="btn-clipboard me-2" color="primary" onClick={handleCopy}>
                  <i className="fa fa-copy"></i> Copy
                </Button>
                <Button className="btn-clipboard-cut" color="secondary" onClick={handleCut}>
                  <i className="fa fa-cut"></i> Cut
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default ClipboardTextarea;
