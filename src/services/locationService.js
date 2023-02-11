import { https } from "./configURL";

export const locationService = {
  addLocation: (location) => {
    return https.post("api/vi-tri", location);
  },
  getCityList: () => {
    return https.get("api/vi-tri/");
  },
  getLocationById: (locationId) => {
    return https.get(`api/vi-tri/${locationId}`);
  },
  getCityPagination: (currentPage) => {
    return https.get(
      `api/vi-tri/phan-trang-tim-kiem?pageIndex=${currentPage}&pageSize=10`
    );
  },
  editLocation: (location) => {
    return https.put(`api/vi-tri/${location.id}`, location);
  },
  deleteLocation: (locationId) => {
    return https.delete(`api/vi-tri/${locationId}`);
  },
};
