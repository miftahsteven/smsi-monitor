import { Fragment, useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
} from "reactstrap";
import { H5 } from "../../../../AbstractElements";
import ListBeritaData from "./ListBeritaData";
import { useLocation, useNavigate } from "react-router-dom";

const ListBerita = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dataKontenberita = location.state;

  useEffect(() => {
    if (!dataKontenberita || dataKontenberita?.kontenberita.length === 0) {
      navigate("/dashboard");
    }
  }, [dataKontenberita, navigate]);

  const onClickBack = () => {
    navigate(-1);
  };

  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card className="mt-3">
              <CardHeader>
                <Row className="d-flex flex-column gap-3">
                  <Col>
                    <Button
                      className="btn btn-pill btn-air-secondary btn-secondary btn-sm"
                      type="button"
                      onClick={onClickBack}
                    >
                      Back
                    </Button>
                  </Col>
                  <Col>
                    <H5>List Berita - {dataKontenberita.name}</H5>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody className="whishlist-main pt-0">
                <Row>
                  <ListBeritaData data={dataKontenberita} />
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default ListBerita;
