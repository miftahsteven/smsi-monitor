import axios from "axios";

const exportExecutive1 = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/dashboards/report/executive_summary1`,
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
const exportExecutive2 = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/dashboards/report/executive_summary2`,
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

export { exportExecutive1, exportExecutive2 };
