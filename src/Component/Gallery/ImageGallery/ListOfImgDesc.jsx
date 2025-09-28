/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { Fragment, useEffect } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { H4, H5, P } from "../../../AbstractElements";
import { IMAGE_GALLERY, PortfolioTitle } from "../../../Constant";
import { Link } from "react-router-dom";

const ListOfImageDesc = ({ smallImages, setSmallImages }) => {
  const description = "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.";

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
            <CardBody className="my-gallery row gallery-with-description">
              <Gallery>
                {smallImages &&
                  smallImages.map((item, i) => {
                    return (
                      <figure className="col-xl-3 col-sm-6" key={i}>
                        <Item original={require(`../../../assets/images/${item}`)} width="1024" height="768" caption="hello">
                          {({ ref, open }) => (
                            <Link onClick={open}>
                              <img className="img-thumbnail" ref={ref} src={require(`../../../assets/images/${item}`)} alt="" />
                              <div className="caption">
                                <H4>{PortfolioTitle}</H4>
                                <P>{description}</P>
                              </div>
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

export default ListOfImageDesc;
