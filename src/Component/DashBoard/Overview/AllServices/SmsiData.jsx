import { Image, P } from '../../../../AbstractElements';
import { ServiceContactdata, MediaSmsiData } from '../../../../Data/ScopeData';
import React, { Fragment } from 'react';
import { Table } from 'reactstrap';
import { Date, Name, Quantity } from '../../../../Constant';
import { Link } from 'react-router-dom';

const ServiceContact = () => {
  return (
    <Fragment>
      <div className="top-sell-table">
        <div className="item">
          <div className="table-responsive product-list">
            <Table>
              <thead>
                <tr>
                  <th>Media</th>
                  {/* <th>Ringkasan</th> */}
                  <th>Total</th>
                  {/* <th>Sent</th> */}
                  {/* <th>Total Revenue</th> */}
                </tr>
              </thead>
              <tbody>
                {
                  MediaSmsiData.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td> <span>{item.srno}</span>
                          <div className="t-title">
                            <Link to={`${process.env.PUBLIC_URL}/ecommerce/product`}>
                              <Image attrImage={{ className: 'img-40 rounded-circle align-top', src: `${item.img}`, alt: '' }} />
                            </Link>
                            <div className="d-inline-block align-middle">
                              <span>
                                <Link to={`${process.env.PUBLIC_URL}/ecommerce/product`}>{item.product}</Link>
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="progress sm-progress-bar">
                            <div className={"progress-bar bg-primary"} role="progressbar" style={{ width: item.qty }} aria-valuenow={item.qty} aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </td>
                        <td>{item.totalberita} Konten Berita</td>
                        {/* <td>
                          <i className={item.class}></i>{item.discount}
                        </td> */}
                        {/* <td>{item.prize}</td> */}
                        {/* <td>{item.status}</td> */}
                        {/* buat item.status dengan warna, jika status negatif merah, positif biru, netral hijau */}
                        {/* <td style={{ color: item.status === 'Positif' ? 'blue' : item.status === 'Negatif' ? 'red' : 'green' }}>{item.status}</td> */}
                      </tr>
                    );
                  })
                }
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ServiceContact;