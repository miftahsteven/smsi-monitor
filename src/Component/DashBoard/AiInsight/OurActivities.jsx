import { H5, P } from '../../../AbstractElements';
import { CaptionData } from '../../../Data/DashEcommerce';
import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, Media, Table } from 'reactstrap';
import { More, Image, Primary } from '../../../Constant';
import { Link } from 'react-router-dom';
import '../../../assets/css/custom-caption.css';

const OurActivities = () => {
  return (
    <Fragment>
      <Col xl="4" sm="6" className="box-col-12 our-activity-table des-xl-50 des-sm-100">
        <Card>
          <CardHeader>
            <H5>AI Caption Generator</H5>
          </CardHeader>
          <CardBody className="p-t-0">
            {/* buatkan tabel caption data dari data CaptionData */}
            <div>
              {/* <div className="table-responsive activity-table"> */}
              {/* bikin tablenya bisa di scroll vertical */}
              <div className="activity-table" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                <Table className="table-border">
                  <tbody>
                    {
                      //batasi jumlah data yang ditampilkan hanya 5 data
                      CaptionData.slice(0, 10).map((item) => (
                        <tr key={item.id}>
                          <td className="caption-cell">
                            <P className="caption-line">
                              <span className="caption-title">{item.title}</span>:&nbsp;
                              <span className="caption-text">{item.place}</span>
                            </P>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default OurActivities;