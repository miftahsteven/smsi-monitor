import { Image, P } from "../../../../AbstractElements";
//import { ServiceContactdata, MediaSmsiData } from '../../../../Data/ScopeData';
import React, { Fragment, useEffect } from "react";
import { Table } from "reactstrap";
// import { Date, Name, Quantity } from "../../../../Constant";
import { Link } from "react-router-dom";
// import { useMediaSmsiData } from "../../../../Hooks/MediaSmsiData";
import NoImage from "../../../../assets/images/media.png";
import { useMediaSMSI } from "../../../../Hooks/Provinces";

const SmsiData = ({ dataFromAPI }) => {
  // let {
  //   data: MediaSmsiData,
  //   loading,
  //   error,
  //   refresh,
  // } = useMediaSmsiData({
  //   sortBy: "totalberita",
  //   sortDirection: "desc",
  //   asArray: true,
  // });
  const { data: mediaSmsi, loading, error, refresh } = useMediaSMSI();
  let mediaSMSIData = mediaSmsi?.data || [];

  const data = dataFromAPI;

  if (data && data.data?.media_smsi) {
    mediaSMSIData = data.data.media_smsi;
    // mediaSMSIData = data.data.media_smsi.map((d) => {
    //   const dataMedia = {
    //     media_id: d.media_id,
    //     name: d.name,
    //     count: d.count,
    //   };
    //   return dataMedia;
    // });
  }

  useEffect(() => {
    if (!mediaSmsi) {
      refresh();
    }
  }, [mediaSmsi, refresh]);

  if (loading) return <P>Loading...</P>;
  if (error) return <P>Error: {error.message}</P>;

  return (
    <Fragment>
      <div className="top-sell-table">
        <div className="item">
          <div className="table-responsive product-list">
            <Table>
              <thead>
                <tr>
                  <th>Media</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {!mediaSMSIData || mediaSMSIData.length > 0 ? (
                  mediaSMSIData.map((item) => {
                    return (
                      <tr key={item.media_id}>
                        <td>
                          <div className="t-title">
                            <Link
                              to={`/dashboard/list-berita/${item.media_id}`}
                              target="_blank"
                            >
                              <Image
                                attrImage={{
                                  className: "img-40 rounded-circle align-top",
                                  src: `${item.img ?? NoImage}`,
                                  alt: "",
                                }}
                              />
                            </Link>
                            <div className="d-inline-block align-middle">
                              <span>
                                <Link
                                  to={`/dashboard/list-berita/${item.media_id}`}
                                  target="_blank"
                                >
                                  {item.name}
                                </Link>
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="progress sm-progress-bar">
                            <div
                              className={"progress-bar bg-primary"}
                              role="progressbar"
                              style={{
                                //jadikan width adalah string persen dari totalberita, misal totalberita 50, maka width 50%
                                width: `${Math.min(
                                  (item.count / 100) * 100,
                                  100
                                )}%`,
                                //width: `${Math.min((item.total / 100) * 100, 100)}`
                              }}
                              aria-valuenow={Math.min(
                                (item.count / 100) * 100,
                                100
                              )}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </td>
                        <td>{item.count} Konten Berita</td>
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
                ) : (
                  <tr>
                    <td colSpan={2}>No data is available!</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default SmsiData;
