import React from "react";
import Chart from "react-apexcharts";

const ChartComponent = ({ data, color }) => {
  const options = {
    chart: {
      type: "area",
      width: 130,
      height: 100,
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 5,
    },
    colors: [color],
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.5,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 0.5,
        opacityTo: 0.2,
        colorStops: [
          {
            offset: 0,
            color: color,
            opacity: 0.4,
          },
          {
            offset: 90,
            color: color,
            opacity: 0.1,
          },
          {
            offset: 100,
            color: "transparent",
            opacity: 0.1,
          },
        ],
      },
    },

    grid: {
      show: true,
      borderColor: "#ABB2B9",
      position: "back",
      strokeDashArray: [3, 3],
      xaxis: {
        lines: {
          show: true,
          borderColor: "#f8f8f8",
        },
      },
      yaxis: {
        lines: {
          show: false,  
        },
      },
    },
    xaxis: {
      categories: data.labels,
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    markers: {
      size: 0, // The size of the marker (in pixels)
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },
    annotations: {
      points: [
        {
          marker: {
            size: 6,
            fillColor: color,
            strokeColor: color,
          },
          label: {
            borderColor: color,
            offsetY: 0,
            style: {
              color: "#fff",
              background: color,
            },
          },
        },
      ],
    },
  };

  const series = [
    {
      name: "Series 1",
      data: data.series[0],
    },
  ];

  return (
    <div className='chartist-main-sec'>
      <Chart options={options} series={series} type='area' height={100} width={130} />
    </div>
  );
};

export default ChartComponent;
