import axios from "axios";

// const filterDateLocalTopNew = async (dates) => {
//   //   const token = localStorage.getItem("token");
//   const [startDate, endDate] = dates;

//   if (startDate && endDate) {
//     try {
//       const response = await axios.post(
//         `${process.env.REACT_APP_API_URL}/dashboards/filter/local_top_news`,
//         {
//           startDate: startDate ? moment(startDate).format("YYYY-MM-DD") : null,
//           endDate: endDate ? moment(endDate).format("YYYY-MM-DD") : null,
//         },
//         {
//           headers: {
//             //   Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       return response.data;
//     } catch (error) {
//       return error;
//     }
//   }
// };

const generateTopNationalAPI = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/generate/today_national_top_news`,
      {
        headers: {
          //   Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export { generateTopNationalAPI };
