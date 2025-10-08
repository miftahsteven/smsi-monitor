import React, { Fragment } from "react";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
// import { barChart } from "../../../Pages/Widgets/Charts/WidgetChartsData";
import { H5 } from "../../../AbstractElements";

const barChart = {
  options: {
    legend: {
      show: true,
    },
    chart: {
      type: "bar",
      height: 380,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        radius: [5],
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      show: true,
      colors: ["transparent"],
      curve: "smooth",
      lineCap: "butt",
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
    },
    yaxis: {
      labels: {
        show: true,
      },
    },
    fill: {
      colors: ["#4d8aff", "#51bb25", "#fdc92dff"],
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },

    tooltip: {
      y: {
        formatter: function (val) {
          return val + " semai";
        },
      },
    },
  },
  series: [
    { name: "Whatsapp", data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 55] },
    { name: "Facebook", data: [32, 14, 26, 43, 55, 58, 60, 53, 43, 59] },
    { name: "Facebook", data: [32, 14, 26, 43, 55, 58, 60, 53, 43, 59] },
    // { name: "Instagram", data: [10, 20, 22, 43, 49, 59, 40, 20, 32, 40] },
  ],
};

const chart = {
  series: [
    {
      name: "Whatsapp",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Instagram",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: "Facebook",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ],
  options: {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: 5,
        borderRadiusApplication: "end",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
    },
    yaxis: {
      title: {
        text: "Semai",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " semai";
        },
      },
    },
  },
};

const JumlahBerita = () => {
  return (
    <Fragment>
      <Card className="o-hidden">
        <CardHeader>
          <H5>Jumlah Berita Disemai - 12.391</H5>
        </CardHeader>
        <div className="bar-chart-widget">
          <CardBody className="bottom-content">
            <Row className="row">
              <Col xs="12">
                <div id="chart-widget4">
                  <ReactApexChart
                    options={chart.options}
                    series={chart.series}
                    height="380"
                    type="bar"
                  />
                </div>
              </Col>
            </Row>
          </CardBody>
        </div>
      </Card>
    </Fragment>
  );
};
export default JumlahBerita;
