import React, { Fragment } from "react";
import { Container } from "reactstrap";

const ImageHoverContain = () => {
  const galleryData = [
    { id: 1, hover: 1 },
    { id: 2, hover: 2 },
    { id: 3, hover: 3 },
    { id: 4, hover: 4 },
    { id: 5, hover: 5 },
    { id: 6, hover: 6 },
    { id: 7, hover: 7 },
    { id: 8, hover: 8 },
    { id: 9, hover: 9 },
    { id: 10, hover: 10 },
    { id: 11, hover: 11 },
    { id: 12, hover: 12 },
    { id: 13, hover: 13 },
    { id: 14, hover: 14 },
    { id: 15, hover: 15 },
  ];

  return (
    <Fragment>
      <Container fluid={true}>
        {galleryData.map((item) => (
          <div className="row" key={item.id}>
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h5>
                    {"HoverEffect"} <span>{item.hover}</span>
                  </h5>
                </div>
                <div className="card-body">
                  <div className="row my-gallery gallery">
                    {Array.from(Array(4), (e, index) => (
                      <figure key={index} itemProp="associatedMedia" className={`col-md-3 col-6 img-hover hover-${item.hover}`}>
                        <div className="">
                          <img src={require(`../../assets/images/lightgallry/0${index + 8}.jpg`)} itemProp="thumbnail" alt="description" className="img-fluid" />
                        </div>
                      </figure>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </Fragment>
  );
};
export default ImageHoverContain;
