import { https } from "./configURL";

export const houseService = {
  addHouse: (house) => {
    return https.post("/api/phong-thue", house);
  },
  getHouses: (locationId) => {
    return https.get(
      `/api/phong-thue/lay-phong-theo-vi-tri?maViTri=${locationId}`
    );
  },
  getHouseById: (houseId) => {
    return https.get(`/api/phong-thue/${houseId}`);
  },
  getHousePagination: (currentPage) => {
    return https.get(
      `api/phong-thue/phan-trang-tim-kiem?pageIndex=${currentPage}&pageSize=10`
    );
  },
  getCommentByHouseId: (houseId) => {
    return https.get(`/api/binh-luan/lay-binh-luan-theo-phong/${houseId}`);
  },
  bookHouse: (data) => {
    return https.post("/api/dat-phong", data);
  },
  getBookedHouse: (userId) => {
    return https.get(`/api/dat-phong/lay-theo-nguoi-dung/${userId}`);
  },
  editHouse: (house) => {
    return https.put(`/api/phong-thue/${house.id}`, house);
  },
  deleteHouse: (houseId) => {
    return https.delete(`/api/phong-thue/${houseId}`);
  },
};
