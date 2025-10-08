import { Fragment, useEffect } from "react";
import { Table } from "reactstrap";
import { useMapIndonesia } from "../../../../Hooks/Provinces";
import { Spinner } from "../../../../AbstractElements";
import { Link } from "react-router-dom";

const ServiceContact = ({ dataFilterAPI }) => {
  //const { data: markers, loading } = useProvincesRealtime();
  // let { data: provincesOther, loading } = useProvincesRealtime();
  const { data: provincesOthers, loading, refresh } = useMapIndonesia();
  let provincesOther = provincesOthers?.data || [];

  const data = dataFilterAPI;

  if (data && data.data?.local_top_news) {
    provincesOther = data.data.local_top_news;
    // provincesOther = data.data.local_top_news.map((d) => {
    //   const dataMap = {
    //     nama: d.nama,
    //     lat: d.koordinat_ibukota[0],
    //     lng: d.koordinat_ibukota[1],
    //     kesimpulan: d.kesimpulan,
    //     negative: d.sentimen_breakdown.negative,
    //     positive: d.sentimen_breakdown.positive,
    //     neutral: d.sentimen_breakdown.neutral,
    //     total: d.total,
    //   };
    //   return dataMap;
    // });
  }

  useEffect(() => {
    if (!provincesOthers) {
      refresh();
    }
  }, [provincesOthers, refresh]);

  return (
    <Fragment>
      {loading && (
        <div
          className="d-flex flex-column justify-content-center align-items-center loader-box"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zindex: 9999,
          }}
        >
          <Spinner attrSpinner={{ className: "loader-35" }} />
          <br />
          <span className="text-white">Loading...</span>
        </div>
      )}
      <div className="top-sell-table">
        <div className="item">
          <div
            className="table-responsive product-list"
            style={{ maxHeight: "33rem" }}
          >
            <Table>
              <thead>
                <tr>
                  <th>Provinsi</th>
                  {/* <th>Ringkasan</th> */}
                  <th>Total</th>
                  <th>Positif</th>
                  <th>Neutral</th>
                  <th>Negatif</th>
                  <th>Sentimen</th>
                  {/* <th>Total Revenue</th> */}
                </tr>
              </thead>
              <tbody>
                {provincesOther.length > 0 ? (
                  provincesOther.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          {item.kontenberita ? (
                            <Link
                              to={`/dashboard/list-berita`}
                              state={{
                                kontenberita: item.kontenberita,
                                name: item.nama,
                              }}
                            >
                              <div className="t-title">
                                <div className="d-inline-block align-middle">
                                  <span>{item.nama}</span>
                                </div>
                              </div>
                            </Link>
                          ) : (
                            <div className="t-title">
                              <div className="d-inline-block align-middle">
                                <span>{item.nama}</span>
                              </div>
                            </div>
                          )}
                        </td>
                        <td>{item.total}</td>
                        <td>{item.sentimen_breakdown.positive}</td>
                        <td>{item.sentimen_breakdown.neutral}</td>
                        <td>{item.sentimen_breakdown.negative}</td>
                        {/* <td>{item.qty}</td> */}
                        {/* <td>
                              <i className={item.class}></i>{item.discount}
                            </td> */}
                        {/* <td>{item.prize}</td> */}
                        {/* <td>{item.status}</td> */}
                        {/* buat item.status dengan warna, jika status negatif merah, positif biru, netral hijau */}
                        <td
                          style={{
                            color:
                              item.kesimpulan === "positif"
                                ? "blue"
                                : item.kesimpulan === "negatif"
                                ? "red"
                                : "green",
                          }}
                          className="text-uppercase fw-bold"
                        >
                          {item.kesimpulan}
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={6}>No data available!</td>
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
export default ServiceContact;
