/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { Fragment, useEffect } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { H5 } from "../../../AbstractElements";
import { IMAGE_GALLERY } from "../../../Constant";

const ListOfImage = ({ smallImages, setSmallImages }) => {
  useEffect(() => {
    axios.get(`${process.env.PUBLIC_URL}/api/image-big-light.json`).then((response) => {
      setSmallImages(response.data.src);
    });
  }, []);
  return (
    <Fragment>
      {smallImages.length > 0 && (
        <Col sm="12">
          <Card>
            <CardHeader className="pb-0">
              <H5>{IMAGE_GALLERY}</H5>
            </CardHeader>
            <CardBody className="my-gallery row">
              <Gallery>
                {smallImages &&
                  smallImages.map((item, i) => {
                    return (
                      <figure className="col-xl-3 col-sm-6" key={i}>
                        <Item original={require(`../../../assets/images/${item}`)} width="1024" height="768">
                          {({ ref, open }) => (
                            <Link onClick={open}>
                              <img className="img-thumbnail" ref={ref} src={require(`../../../assets/images/${item}`)} alt="" />
                            </Link>
                          )}
                        </Item>
                      </figure>
                    );
                  })}
              </Gallery>
            </CardBody>
          </Card>
        </Col>
      )}
    </Fragment>
  );
};

export default ListOfImage;
