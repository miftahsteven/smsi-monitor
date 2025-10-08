import { Fragment } from "react";
import { Table } from "reactstrap";
import { useProvincesRealtime } from "../../../../Hooks/Provinces";
import { Spinner } from "../../../../AbstractElements";

const ServiceContact = () => {
  //const { data: markers, loading } = useProvincesRealtime();
  const { data: provincesOther, loading } = useProvincesRealtime();

  const getAllData = (e) => {
    e.preventDefault();
    //tampilkan semua data
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = "";
    provincesOther.map((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td> 
          <div class="t-title">
            <div class="d-inline-block align-middle">
              <span>
                ${item.name}
              </span>
            </div>
          </div>
        </td>
        <td>${item.total}</td>
        <td>${item.positive}</td>
        <td>${item.neutral}</td>
        <td>${item.negative}</td>
        <td style="color: ${
          item.sentiment === "positif"
            ? "blue"
            : item.sentiment === "negatif"
            ? "red"
            : "green"
        }">${item.sentiment}</td>
      `;
      tableBody.appendChild(row);

      return true;
    });
  };

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
          <div className="table-responsive product-list">
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
                {
                  //provinces35.map((item) => {
                  //limit 5 item
                  provincesOther.slice(0, 5).map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>
                          <div className="t-title">
                            <div className="d-inline-block align-middle">
                              <span>{item.name}</span>
                            </div>
                          </div>
                        </td>
                        <td>{item.total}</td>
                        <td>{item.positive}</td>
                        <td>{item.neutral}</td>
                        <td>{item.negative}</td>
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
                              item.sentiment === "positif"
                                ? "blue"
                                : item.sentiment === "negatif"
                                ? "red"
                                : "green",
                          }}
                        >
                          {item.sentiment}
                        </td>
                      </tr>
                    );
                  })
                }
              </tbody>
              <tfoot>
                {/* buatkan link "more", jika diklik bertambah jadi semua data di buka*/}
                <tr>
                  <td colSpan="4" className="text-center">
                    {/* jika data sudah terlihat semuanya, maka link ini di sembunyikan, atau hilang */}
                    <a
                      className="f-w-700 btn-more"
                      href="#javascript"
                      onClick={getAllData}
                    >
                      More...
                    </a>
                  </td>
                </tr>
              </tfoot>
            </Table>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ServiceContact;
