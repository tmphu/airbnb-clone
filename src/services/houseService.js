import { https } from "./configURL";

export const houseService = {
  getHouses: (locationId) => {
    return https.get(
      `/api/phong-thue/lay-phong-theo-vi-tri?maViTri=${locationId}`
    );
  },
  getHouseById: (houseId) => {
    return https.get(`/api/phong-thue/${houseId}`);
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
};
