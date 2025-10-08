import React, { Fragment, useState } from "react";
import { Card, CardBody, CardHeader, Col, Collapse } from "reactstrap";
import {
  AboutMe,
  Dribbble,
  Facebooks,
  SocialNetworks,
  Twitters,
} from "../../../Constant";
import { Btn, H5, LI, P, UL } from "../../../AbstractElements";
import { AlertOctagon } from "react-feather";
// import { AboutMeData } from "../../../Data/users/index";

const AboutMeData = [
  {
    id: 1,
    icon: <AlertOctagon />,
    caption: "Pendidikan Islam Kabbi menyentuh semua elemen masyarakat",
  },
  {
    id: 2,
    icon: <AlertOctagon />,
    caption: "Upaya terobosan pengelolaan zakat",
  },
];

const AboutMeSidebar = () => {
  const [aboutme, setisAboutme] = useState(true);
  const toggleClick = () => {
    setisAboutme(!aboutme);
  };
  return (
    <Fragment>
      <Col xl="12">
        <Card>
          <CardHeader>
            <H5 attrH5={{ className: "p-0" }}>
              <Btn
                attrBtn={{
                  className: "btn btn-link",
                  databstoggle: "collapse",
                  databstarget: "#collapseicon4",
                  ariaexpanded: "true",
                  ariacontrols: "collapseicon4",
                  color: "transperant",
                  onClick: toggleClick,
                }}
              >
                Caption
              </Btn>
            </H5>
          </CardHeader>
          <Collapse isOpen={aboutme}>
            <CardBody className="post-about">
              <UL attrUL={{ as: "ul", className: "simple-list" }}>
                {AboutMeData.map((item) => (
                  <LI key={item.id}>
                    <div className="icon">{item.icon}</div>
                    <div
                      style={{ backgroundColor: "#eee", color: "#000" }}
                      className="p-2"
                    >
                      <H5>{item.caption}</H5>
                    </div>
                  </LI>
                ))}
              </UL>
            </CardBody>
          </Collapse>
        </Card>
      </Col>
    </Fragment>
  );
};
export default AboutMeSidebar;
