import React, { Fragment } from "react";
import { Form } from "reactstrap";
import CommonFileUpload from "../../../CommonElements/CommonFileUpload";

const DropzoneClass = () => {
  return (
    <Fragment>
      <Form className="m-b-20">
        <div className="m-0 dz-message needsclick">
          <CommonFileUpload />
        </div>
      </Form>
    </Fragment>
  );
};

export default DropzoneClass;
