import { https } from "./configURL";

export const cityService = {
  getCity: () => {
    return https.get("api/vi-tri/");
  },
  getNearestCity: () => {
    return https.get("api/vi-tri/phan-trang-tim-kiem?pageIndex=1&pageSize=8");
  },
};
