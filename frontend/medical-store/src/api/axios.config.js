import axios from "axios";
import { getAuthToken } from "../utils/auth";

//DEV
// const BASE_URL = "http://localhost:8000/api/";

// PROD;
const BASE_URL = "https://medical-store-project.herokuapp.com/api/";

const defaultOptions = {
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
};

// Default axios instance
let AXIOS_CLIENT = axios.create(defaultOptions);

// Set authorization header by default if token exists
AXIOS_CLIENT.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    } else {
      delete config.headers.Authorization;
    }

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// Default action for 401 unauthorized response
AXIOS_CLIENT.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response) {
      if (err.response.status === 401) {
        localStorage.clear();
      }
      return Promise.reject(err);
    }
  }
);

export { AXIOS_CLIENT };
