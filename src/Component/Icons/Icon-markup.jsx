/* eslint-disable no-unused-vars */
import React from "react";
import { toast } from "react-toastify";
import { Container, Row, FormGroup, Label, Input, Button } from "reactstrap";
import * as feather from "feather-icons";

const IconMarkUp = (props) => {
  const closeIconContainer = () => {
    var dd = (document.getElementsByClassName("icon-hover-bottom")[0].style.display = "none");
  };

  if (props.itag !== "" && props.icons !== "") {
    document.getElementsByClassName("icon-hover-bottom")[0].style.display = "block";
  }

  const buttonClick = async () => {
    await navigator.clipboard.writeText(props.itag.iTag);
    toast.info("Code Copied to clipboard !", { position: "bottom-right", theme: "colored" });
  };
  return (
    <div className="icon-hover-bottom p-fixed fa-fa-icon-show-div">
      <Container fluid={true}>
        <Row>
          <div className="icon-popup">
            <div className="close-icon" onClick={() => closeIconContainer()}>
              <i className="icofont icofont-close"></i>
            </div>
            <div className="icon-first">
              {props.icons.feathericon ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: feather.icons[props.icons.feathericon].toSvg(props.icons.feathericon),
                  }}
                />
              ) : (
                <i id="icon_main" className={props.icons.icon}></i>
              )}
            </div>
            <div className="icon-class">
              <Label className="icon-title"></Label>
              <span id="fclass1"></span>
            </div>
            <div className="icon-last icon-last">
              <Label className="icon-title">Markup</Label>
              <FormGroup className="d-flex">
                <Input type="text" className="inp-val form-control me-2" defaultValue={props.itag.iTag} id="input_copy" />
                <Button color="primary" className="notification" onClick={buttonClick}>
                  Copy text
                </Button>
              </FormGroup>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};
export default IconMarkUp;
