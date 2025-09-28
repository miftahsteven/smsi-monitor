/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { Fragment, useContext, useEffect } from "react";
import Masonry from "react-masonry-css";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import GalleryContext from "../../_helper/Gallery";
import { H5, Image } from "../../AbstractElements";
import { MasonryGallery } from "../../Constant";

const MesonryGalleryContain = () => {
  const { masonryImg, setMasonryImg } = useContext(GalleryContext);
  const styles = { width: "100%" };

  useEffect(() => {
    axios.get(`${process.env.PUBLIC_URL}/api/masonry.json`).then((response) => {
      setMasonryImg(response.data);
    });
  }, []);

  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{MasonryGallery}</H5>
              </CardHeader>
              <CardBody className="photoswipe-pb-responsive">
                <Masonry breakpointCols={4} className="my-gallery row grid gallery gy-sm-3 mb-0" columnClassName="col-md-3 col-6 grid-item">
                  {masonryImg.map((element, index) => (
                    <div key={element.id}>
                      <Image attrImage={{ src: require(`../../assets/images/${element.src}`), style: styles, alt: "" }} />
                    </div>
                  ))}
                </Masonry>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default MesonryGalleryContain;
