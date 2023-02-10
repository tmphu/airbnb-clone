import axios from "axios";
import { setLoadingOff, setLoadingOn } from "../redux/reducers/loadingReducer";
import { userLocalService } from "./localStorageService";
import { store } from "..";

export const BASE_URL = "https://airbnbnew.cybersoft.edu.vn/";
export const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwNSIsIkhldEhhblN0cmluZyI6IjI4LzA1LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4NTIzMjAwMDAwMCIsIm5iZiI6MTY2MjMxMDgwMCwiZXhwIjoxNjg1Mzc5NjAwfQ.FtGbsXl4qyqTRfJrunro0mQ7b-tNs8EWbhb7JDTzloE";
export const createConfig = () => {
  return {
    TokenCybersoft: TOKEN_CYBERSOFT,
    token: userLocalService.getItem()?.token,
  };
};

// axios instance
export const https = axios.create({
  baseURL: "https://airbnbnew.cybersoft.edu.vn/",
  timeout: 5000,
  headers: createConfig(),
});

// Loading handling
// Add a request interceptor (https://axios-http.com/docs/interceptors)
https.interceptors.request.use(
  function (config) {
    // for any request, the loader called
    store.dispatch(setLoadingOn());
    // console.log('request');
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
https.interceptors.response.use(
  function (response) {
    // after response, the loader off
    store.dispatch(setLoadingOff());
    // console.log('response')
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
