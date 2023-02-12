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

export const https = axios.create({
  baseURL: "https://airbnbnew.cybersoft.edu.vn/",
  timeout: 5000,
  headers: createConfig(),
});

https.interceptors.request.use(
  function (config) {
    store.dispatch(setLoadingOn());
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

https.interceptors.response.use(
  function (response) {
    store.dispatch(setLoadingOff());
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
