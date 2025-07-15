import axios from "axios";

export const getMethod = (url, data, token = null) => {
  return axios(url, {
    method: "GET",
    data: data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const postMethod = (url, data) => {
  return axios(url, {
    method: "POST",
    data: data,
  });
};
