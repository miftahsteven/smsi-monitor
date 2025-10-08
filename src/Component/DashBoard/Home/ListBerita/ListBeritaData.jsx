import { Fragment, useContext } from "react";
import { useNavigate } from "react-router";
import { Col, Media } from "reactstrap";
import CartContext from "../../../../_helper/ecommerce/cart";
import ProductContext from "../../../../_helper/ecommerce/product";
import { Image, H6, Btn, Badges } from "../../../../AbstractElements";
import BgNews from "../../../../assets/images/news.jpg";

const ListBeritaData = ({ data }) => {
  const history = useNavigate();
  const { productItem, symbol } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const MoveToCart = (product, qty) => {
    addToCart(product, qty);
    history(`${process.env.PUBLIC_URL}/ecommerce/cart`);
  };
  const images = require.context("../../../../assets/images", true);
  // const dynamicImage = (image) => {
  //   return images(`./${image}`);
  // };

  const { kontenberita } = data;

  return (
    <Fragment>
      {kontenberita.map((item, index) => {
        return (
          <Col xl="2" md="4" sm="6" key={index} className="box-col-3">
            <div className="prooduct-details-box">
              <Media>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <Image
                    attrImage={{
                      className: "align-self-center img-fluid",
                      src: `${item.src ?? BgNews}`,
                      alt: "#",
                    }}
                  />
                  <div
                    style={{ position: "absolute", top: "15px", right: "15px" }}
                  >
                    <Badges
                      attrBadge={{
                        color:
                          item.sentimen === "positive"
                            ? "primary"
                            : item.sentimen === "negative"
                            ? "danger"
                            : "success",
                        pill: true,
                      }}
                    >
                      {item.sentimen}
                    </Badges>
                  </div>
                </a>
                <Media body style={{ height: "20rem" }}>
                  <div className="product-name">
                    {/* <H6>
                    </H6> */}
                    <span className="h6 me-2">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.namamedia} - {item.judul}
                      </a>
                    </span>
                    {/* <Link
                        to={`${process.env.PUBLIC_URL}/ecommerce/productpage`}
                      >
                        {item.name}
                      </Link> */}
                  </div>
                  <p style={{ color: "#aaaaaa", fontSize: "12px" }}>
                    {item.tglposting}
                  </p>
                  <p style={{ color: "#aaaaaa", fontSize: "12px" }}>
                    {item.ringkasan}
                  </p>
                  {/* <Btn
                    attrBtn={{
                      color: "primary",
                      size: "xs",
                      onClick: () => MoveToCart(item, 1),
                    }}
                  >
                    Move
                  </Btn> */}
                </Media>
              </Media>
            </div>
          </Col>
        );
      })}
    </Fragment>
  );
};
export default ListBeritaData;
