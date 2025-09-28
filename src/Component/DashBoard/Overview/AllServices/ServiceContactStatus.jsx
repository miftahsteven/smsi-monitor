import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import React, { Fragment, useContext } from 'react';
import { H5, P } from '../../../../AbstractElements';
import { Image } from '../../../../AbstractElements';
import S1 from '../../../../assets/images/dashboard-2/s_1.png';
import S2 from '../../../../assets/images/dashboard-2/s_2.png';
import ContactWithUs from './ContactWithUs';
import { Link } from 'react-router-dom';
import IssueClass from '../../../../Component/Charts/googleCharts/Issue';
import SentimenClass from '../../../../Component/Charts/googleCharts/Sentimen';
import GoogleContext from '../../../../_helper/GoogleChart';

// const word = WordData.map(item => ({ text: item.text, value: item.value }));


const ServiceContactStatus = () => {
  const chartData = useContext(GoogleContext);

  const gradients = [
    {
      id: "gradient1",
      type: "linear",
      angle: 90, // in degrees
      stops: [
        { offset: "0%", color: "#ff7e5f" },
        { offset: "100%", color: "#feb47b" },
      ],
    },
    {
      id: "gradient2",
      type: "linear",
      angle: 90, // in degrees
      stops: [
        { offset: "0%", color: "#6a11cb" },
        { offset: "100%", color: "#2575fc" },
      ],
    },
  ];

  return (
    <Fragment>
      <Col xl="5" className='box-col-12 service-contact-sec des-xl-100'>
        <Row>
          <Col xl="12" sm="6" className='des-xl-50 box-col-6 des-sm-100'>
            <Card>
              <CardHeader className=" pb-0">
                <H5>Hal Yang sering dibicarakan</H5>
              </CardHeader>
              <CardBody>
                {/* buatkan word cloud tagline social media dari datawordcloud. Cord cloud Melihat besarnya jumlah tagline di social media */}
                <div className="table-responsive groups-table service-contact-table">
                  {/* <WordCloud words={word} gradients={gradients} width={400} height={100} /> */}
                </div>
                {/* <div className="table-responsive groups-table service-contact-table">
                  <Table className="table-bordernone">
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-inline-block align-middle">
                            <div className="t-title">
                            <Link to={`${process.env.PUBLIC_URL}/users/userprofile`}>
                                <Image
                                  attrImage={{
                                    className:
                                      'img-radius img-40 align-top m-r-15 rounded-circle',
                                    src: `${S1}`,
                                    alt: '',
                                  }}
                                />
                              </Link>
                              <div className="d-inline-block">
                                <span>+1(056)5685 5684</span>
                                <P attrPara={{ className: 'd-block' }}>
                                  Marshel Medroled
                                </P>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <P>Available Now</P>
                        </td>
                        <td>
                          <div className="gradient-round">
                            <i className="fa fa-phone"></i>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-inline-block align-middle">
                            <div className="t-title">
                              <Link to={`${process.env.PUBLIC_URL}/users/userprofile`}>
                                <Image attrImage={{
                                  className: 'img-radius img-40 align-top m-r-15 rounded-circle', src: `${S2}`, alt: '',
                                }}
                                />
                              </Link>
                              <div className="d-inline-block">
                                <span>+1(253) 3017 9801</span>
                                <P attrPara={{ className: 'd-block' }}>
                                  Eliyana Geloren
                                </P>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <P>Available Now</P>
                        </td>
                        <td>
                          <div className="gradient-round">
                            <i className="fa fa-phone"></i>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div> */}
              </CardBody>
            </Card>
          </Col>
          {/* <ContactWithUs /> */}
          <IssueClass data={chartData.googleChart.GoogleDonutChart} pieHole={0.4} />
          <SentimenClass data={chartData.googleChart.SentimentChart} pieHole={0.4} />
        </Row>
      </Col>
    </Fragment>
  );
};
export default ServiceContactStatus;