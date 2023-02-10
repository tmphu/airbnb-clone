import axios from "axios";
import { BASE_URL, createConfig, TOKEN_CYBERSOFT } from "./configURL";
import { userLocalService } from "./localStorageService";

export const userService = {
  postLogin: (dataUser) => {
    return axios({
      url: `${BASE_URL}api/auth/signin`,
      method: "POST",
      data: dataUser,
      headers: createConfig(),
    });
  },
  postSignup: (dataUser) => {
    return axios({
      url: `${BASE_URL}api/auth/signup`,
      method: "POST",
      data: dataUser,
      headers: createConfig(),
    });
  },
  uploadAvatar: (formData) => {
    return axios({
      url: `${BASE_URL}api/users/upload-avatar`,
      method: "POST",
      data: formData,
      headers: {
        accept: "application/json",
        token: userLocalService.getItem()?.token,
        tokenCybersoft: TOKEN_CYBERSOFT,
        "Content-Type": "multipart/form-data",
      },
    });
  },
};
