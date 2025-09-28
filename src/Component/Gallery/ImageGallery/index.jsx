/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useCallback, useContext, useState } from "react";
import { Container, Row } from "reactstrap";
import GalleryContext from "../../../_helper/Gallery";
import ListOfImage from "./ListOfImages";

const ImageGalleryContain = () => {
  const {  smallImages, setSmallImages } = useContext(GalleryContext);
  const initilindex = { index: 0, isOpen: false };
  const [photoIndex, setPhotoIndex] = useState(initilindex);
  const callback = useCallback((photo) => {
    setPhotoIndex(photo);
  });

  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <ListOfImage smallImages={smallImages} setPhotoIndex={callback} photoIndex={photoIndex} setSmallImages={setSmallImages} />
        </Row>
      </Container>
    </Fragment>
  );
};

export default ImageGalleryContain;
