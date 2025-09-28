import React, { Fragment } from "react";
import { toast } from "react-toastify";
import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { Btn, H5 } from "../../../AbstractElements";
import { AutoCloseIn1000Sec, AutoCloseIn15000Sec, AutoCloseIn5000Sec, AutoCloseIn500Sec, CustomAutoclose } from "../../../Constant";

const CustomAutocloseClass = () => {
  const autoclosetoaster = (toastname) => {
    switch (toastname) {
      case "autoclose1Toast":
        toast.success("Success Notification !", {
          position: "top-right",
          autoClose: 15000,
        });
        break;
      case "autoclose2Toast":
        toast.info("Info Notification !", {
          position: "top-right",
          autoClose: 5000,
        });
        break;
      case "autoclose3Toast":
        toast.warn("Warning Notification !", {
          position: "top-right",
          autoClose: 1000,
        });
        break;
      case "autoclose4Toast":
        toast.error("Danger Notification !", {
          position: "top-right",
          autoClose: 500,
        });
        break;
      default:
        break;
    }
  };
  return (
    <Fragment>
      <Col sm="12">
        <Card>
          <CardHeader className="pb-0">
            <H5>{CustomAutoclose}</H5>
          </CardHeader>
          <CardBody className="btn-showcase">
            <Btn attrBtn={{ name: "autoclose1Toast", color: "success", onClick: (e) => autoclosetoaster(e.target.name) }}>{AutoCloseIn15000Sec}</Btn>
            <Btn attrBtn={{ name: "autoclose2Toast", color: "info", onClick: (e) => autoclosetoaster(e.target.name) }}>{AutoCloseIn5000Sec}</Btn>
            <Btn attrBtn={{ name: "autoclose3Toast", color: "warning", onClick: (e) => autoclosetoaster(e.target.name) }}>{AutoCloseIn1000Sec}</Btn>
            <Btn attrBtn={{ name: "autoclose4Toast", color: "danger", onClick: (e) => autoclosetoaster(e.target.name) }}>{AutoCloseIn500Sec}</Btn>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default CustomAutocloseClass;
