import axios from "axios";
import moment from "moment/moment";

const filterDateLocalTopNew = async (dates) => {
  //   const token = localStorage.getItem("token");
  const [startDate, endDate] = dates;

  if (startDate && endDate) {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/dashboards/filter/local_top_news`,
        {
          startDate: startDate ? moment(startDate).format("YYYY-MM-DD") : null,
          endDate: endDate ? moment(endDate).format("YYYY-MM-DD") : null,
        },
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
  }
};

const listMediaSMSI = async (dates) => {
  const [startDate, endDate] = dates;

  if (startDate && endDate) {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/detail/smsi_top_news/2375`,
        {
          startDate: startDate ? moment(startDate).format("YYYY-MM-DD") : null,
          endDate: endDate ? moment(endDate).format("YYYY-MM-DD") : null,
        },
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
  }
};

const generateTopLocalAPI = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/dashboards/generate/today_local_top_news`,
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
const generateSmsiTopAPI = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/generate/today_smsi_top_news`,
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

export {
  filterDateLocalTopNew,
  generateTopLocalAPI,
  listMediaSMSI,
  generateSmsiTopAPI,
};
