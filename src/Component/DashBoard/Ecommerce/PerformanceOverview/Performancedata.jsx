import { ChartistData1, ChartistData2, ChartistData3, ChartistData4, eventHandlers } from "../../../../Pages/DashBoard/Ecommerce/Ecom_ChartData/TotalRevenu";

export const Data = [
  {
    imagePath: "dashboard-2/p_1.png",
    title: "Total Shared",
    count: "12",
    contain: "^+38%",
    class: "ct-chart1",
    chartType: "Line",
    chartlistData: ChartistData1,
    event: eventHandlers,
  },
  {
    imagePath: "dashboard-2/p_1.png",
    title: "Total Dampak",
    count: "8",
    contain: "-82%",
    class: "ct-chart2",
    chartType: "Line",
    chartlistData: ChartistData2,
    event: eventHandlers,
  },
  {
    imagePath: "dashboard-2/p_3.png",
    title: "Tambahan Akun",
    count: "5",
    contain: "-96%",
    class: "ct-chart3",
    chartType: "Line",
    chartlistData: ChartistData3,
    event: eventHandlers,
  },
  // {
  //   imagePath: "dashboard-2/p_4.png",
  //   title: "Total Product",
  //   count: "850",
  //   contain: "Balanace +79%",
  //   class: "ct-chart4",
  //   chartType: "Line",
  //   chartlistData: ChartistData4,
  //   event: eventHandlers,
  // },
];
