import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardBody, CardHeader, Col, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { ContactNumber, Country, Date, Name, Status } from '../../../Constant';
import { H5, P, Image } from '../../../AbstractElements';

const ManageSocMedData = () => {
  const [generalData, setGeneralData] = useState([]);
  const { DataSocMed } = generalData;
  useEffect(() => {
    axios.get(`${process.env.PUBLIC_URL}/api/general.json`).then((res) => setGeneralData(res.data.result));
  }, []);
  var images = require.context('../../../assets/images', true);
  const dynamicImage = (image) => {
    return images(`./${image}`);
  };
  return (
    <Fragment>
      {DataSocMed &&
        <Col xl="12" className="manage-invoice-sec box-col-12">
          <Card>
            <CardHeader className="pb-0">
              <H5>Informasi Konten Media Sosial Terkini</H5>
            </CardHeader>
            <CardBody>
              <div className="manage-invoice-table">
                <div className="item">
                  <div className="table-responsive manage-invoice">
                    <Table className="table-border">
                      <thead>
                        <tr>
                          <th>Konten </th>
                          <th>Tanggal</th>
                          <th>Asal</th>
                          {/* <th>{ContactNumber}</th> */}
                          <th>Media Sosial</th>
                          {/* <th>Amount</th>
                          <th>{Status}</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        {
                          DataSocMed.map((data, i) => {
                            return (
                              <tr key={i}>
                                <td>
                                  {/* <span>{data.srNo}</span> */}
                                  <div className="t-title">
                                    {data.name}
                                  </div>
                                </td>
                                <td>
                                  <P>{data.date}</P>
                                </td>
                                <td>
                                  <span>
                                    {/* buatkan link target _blank ke halaman media sosial sesuai yang ada pada data akun data.project dan sumber nya dari data.status*/}

                                    <div className="d-inline-block align-middle">
                                      <div className="d-inline-block align-middle">
                                        {/* jika data.status = "instagram" maka menuju ke web instagram/{data.project} , jika data.status="x" maka ke web x.com dan seterusnya */}
                                        <Link to={data.status === "instagram" ? `https://www.instagram.com/${data.project}` : data.status === "x" ? `https://www.x.com/${data.project}` : data.status === "facebook" ? `https://www.facebook.com/${data.project}` : data.status === "tiktok" ? `https://www.tiktok.com/@${data.project}` : '#'} target="_blank" rel="noopener noreferrer">
                                          <div className="d-inline-block">
                                            <P>{data.project}</P>
                                          </div>
                                        </Link>

                                      </div>
                                    </div>

                                  </span>
                                </td>
                                {/* <td>
                                  <P>{data.contactNumber}</P>
                                </td> */}
                                <td>
                                  <P>{data.status}</P>
                                </td>
                                {/* <td>
                                  <P>{data.amount}</P>
                                </td>
                                <td>
                                  <P>{data.status}</P>
                                </td> */}
                                <td>
                                  {/* <div className="progress-showcase">
                                    <div className="progress sm-progress-bar">
                                      <div className={data.progressBar} role="progressbar" style={{ width: data.styleWidth }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                  </div> */}
                                  <button className="btn btn-primary" onClick={() => { navigator.clipboard.writeText(data.name); alert('Konten disalin ke clipboard!'); }}>Salin Konten</button>
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
export default ManageSocMedData;