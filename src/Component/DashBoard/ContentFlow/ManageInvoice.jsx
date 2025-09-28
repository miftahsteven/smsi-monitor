import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardBody, CardHeader, Col, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { ContactNumber, Country, Date, Name, Status } from '../../../Constant';
import { H5, P, Image } from '../../../AbstractElements';
import PerformanceOverview from '../Ecommerce/PerformanceOverview/PerformanceOverview';

const ManageInvoice = () => {
  const [generalData, setGeneralData] = useState([]);
  const { InvoiceData, DataDistribusi } = generalData;
  useEffect(() => {
    axios.get(`${process.env.PUBLIC_URL}/api/general.json`).then((res) => setGeneralData(res.data.result));
  }, []);
  var images = require.context('../../../assets/images', true);
  const dynamicImage = (image) => {
    return images(`./${image}`);
  };
  return (
    <Fragment>
      {InvoiceData &&
        <Col xl="6" className="manage-invoice-sec box-col-12">
          <PerformanceOverview />
          <Card>
            <CardHeader className="pb-0">
              <H5>Distribusi Aktif</H5>
            </CardHeader>
            <CardBody>
              <div className="manage-invoice-table">
                <div className="item">
                  {/* <div className="table-responsive manage-invoice"> */}
                  {/* jadikan scroller horizontal */}
                  <div className="table-responsive manage-invoice" style={{ height: 600, overflowX: 'auto' }}>
                    <Table className="table-bordernone">
                      <thead>
                        <tr>
                          <th>Nama </th>
                          <th className="d-none d-lg-table-cell">Asal</th>
                          <th>Shared</th>
                          {/* <th>{ContactNumber}</th>
                          <th>{Country}</th>
                          <th>Amount</th>
                          <th>{Status}</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        {
                          InvoiceData.map((data, i) => {
                            return (
                              <tr key={i}>
                                <td>
                                  <span>{data.srNo}</span>
                                  <div className="t-title">
                                    <Image attrImage={{
                                      className: 'img-40 rounded-circle align-top', src: `${dynamicImage(data.imagePath)}`, alt: '', dataoriginaltitle: '', title: ''
                                    }} />
                                    <div className="d-inline-block align-middle">
                                      <Link to={`${process.env.PUBLIC_URL}/users/userprofile`}>
                                        <span className="f-w-500">{data.name}</span>
                                        {/* buatkan dibawah nama text small, dan agak kecil */}
                                        <P>{data.project}</P>
                                      </Link>
                                    </div>
                                  </div>
                                </td>
                                {/* <td>
                                  <P>{data.date}</P>
                                </td> */}
                                {/* <td>
                                  <span>{data.project}</span>
                                </td>
                                <td>
                                  <P>{data.contactNumber}</P>
                                </td> */}
                                {/* buatkan style untuk data.country dibawah ini hanya muncul saat aplikasi dibuat di desktop saja, sedangkan jika menggunakan browser handphone tidak ditampilkan */}
                                <td className="d-none d-lg-table-cell">
                                  <P>{data.country}</P>
                                </td>
                                {/* <td>
                                  <P>{data.amount}</P>
                                </td>
                                <td>
                                  <P>{data.status}</P>
                                </td> */}
                                <td>
                                  <div className="progress-showcase">
                                    <div className="progress sm-progress-bar">
                                      <div className={data.progressBar} role="progressbar" style={{ width: data.styleWidth }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            );
                          })
                        }
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>}
    </Fragment>
  );
};
export default ManageInvoice;