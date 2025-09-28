import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { H4, Image, P } from "../../AbstractElements";
import { PortfolioTitle } from "../../Constant";

const PhotosTab = () => {
  const description = "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.";
  const [smallImages, setsmallImages] = useState([]);
  const initilindex = { index: 0, isOpen: false };
  const [photoIndex, setPhotoIndex] = useState(initilindex);

  useEffect(() => {
    axios.get(`${process.env.PUBLIC_URL}/api/image-big-light.json`).then((response) => {
      setsmallImages(response.data.src);
    });
  }, []);

  return (
    <Fragment>
      <Row>
        {smallImages && (
          <Col sm="12">
            <Card>
              <CardBody className="my-gallery gallery-with-description">
                <Row>
                  {smallImages &&
                    smallImages.map((item, i) => {
                      return (
                        <figure className="col-xl-3 col-sm-6" key={i}>
                          <a href="#javascript" data-size="1600x950">
                            <Image
                              attrImage={{
                                src: require(`../../assets/images/${item}`),
                                alt: "Gallery",
                                className: "img-thumbnail",
                                onClick: (e) => {
                                  e.preventDefault();
                                  setPhotoIndex({ ...photoIndex, index: i, isOpen: true });
                                },
                              }}
                            />
                            <div className="caption">
                              <H4>{PortfolioTitle}</H4>
                              <P>{description}</P>
                            </div>
                          </a>
                        </figure>
                      );
                    })}
                </Row>
              </CardBody>
            </Card>
          </Col>
        )}
      </Row>
    </Fragment>
  );
};

export default PhotosTab;
