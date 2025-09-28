/* eslint-disable react-hooks/exhaustive-deps */
import GalleryContext from "../../_helper/Gallery";
import ListOfImageDesc from "./ImageGallery/ListOfImgDesc";
import React, { Fragment, useState, useContext, useCallback } from "react";
import { Container, Row } from "reactstrap";

const ImageWithDescContain = () => {
  const { smallImages,setSmallImages } = useContext(GalleryContext);
  const initilindex = { index: 0, isOpen: false };
  const [photoIndex, setPhotoIndex] = useState(initilindex);
  const callback = useCallback((photo) => {
    setPhotoIndex(photo);
  });
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <ListOfImageDesc smallImages={smallImages} setPhotoIndex={callback} photoIndex={photoIndex} withDesc={true} setSmallImages={setSmallImages}/>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ImageWithDescContain;
