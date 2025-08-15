import axios from "axios";

const http = axios.create({
  timeout: 10_000,
  headers: {
    Accept: "application/json",
  },
});

http.interceptors.response.use(
  (res) => res,
  (error) => {
    const message =
      error?.response?.data?.message ||
      error?.message ||
      "Unknown network error";
    return Promise.reject(new Error(message));
  }
);

export default http;