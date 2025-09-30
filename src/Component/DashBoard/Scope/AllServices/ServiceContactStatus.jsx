import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import { H5, P } from '../../../../AbstractElements';
import { Image } from '../../../../AbstractElements';
import S1 from '../../../../assets/images/dashboard-2/s_1.png';
import S2 from '../../../../assets/images/dashboard-2/s_2.png';
import ContactWithUs from './ContactWithUs';
import { WordData } from '../../../../Data/ScopeData/datawordcloud';
import { Link } from 'react-router-dom';
//import WordCloud from 'react-d3-cloud';
import cloud from 'd3-cloud';
import * as d3Scale from 'd3-scale';

import IssueClass from '../../../../Component/Charts/googleCharts/Issue';
import SentimenClass from '../../../../Component/Charts/googleCharts/Sentimen';
import GoogleContext from '../../../../_helper/GoogleChart';

const wordsSource = WordData.map(item => ({ text: item.text, value: item.value }));


const ServiceContactStatus = () => {
  const chartData = useContext(GoogleContext);

  const [layoutWords, setLayoutWords] = useState([]);

  //useEffect Error saat menjalankan di localhost
  useEffect(() => {
    const layout = cloud()
      .size([400, 200])
      .words(wordsSource.map(d => ({ text: d.text, size: 18, value: d.value })))
      .fontSize(d => d.value * 5)
      .padding(2)
      .rotate(() => (Math.random() > 0.5 ? 0 : 0))
      .font("Arial")
      .fontSize(d => d.value > 20 ? d3Scale.scaleLinear().domain([200, 800]).range([20, 50])(d.value) : d3Scale.scaleLinear().domain([200, 800]).range([10, 20])(d.value))
      .on("end", words => setLayoutWords(words));

    layout.start();
  }, []);


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
                <div style={{ width: 420, height: 240, margin: '0 auto' }}>
                  <svg width={600} height={260} viewBox="100 20 420 240">
                    <g transform="translate(210,120)">
                      {layoutWords.map(w => (
                        <text
                          key={w.text + w.x + w.y}
                          textAnchor="middle"
                          fontFamily="Arial"
                          fontSize={w.size}
                          fill={w.value > 20 ? '#6a11cb' : '#ff7e5f'}
                          transform={`translate(${w.x},${w.y}) rotate(${w.rotate})`}
                          style={{ cursor: 'pointer', userSelect: 'none' }}
                          onClick={() => console.log('clicked:', w.text)}
                        >
                          {w.text}
                        </text>
                      ))}
                    </g>
                  </svg>
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