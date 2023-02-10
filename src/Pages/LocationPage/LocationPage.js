import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { map } from "../../assets";
import { houseService } from "../../services/houseService";
import HouseList from "./HouseList/HouseList";

export default function LocationPage() {
  const location = useLocation();
  let locationInfo = location.state.locationInfo;
  const [houseArr, setHouseArr] = React.useState([]);

  useEffect(() => {
    houseService
      .getHouses(locationInfo.id)
      .then((res) => {
        setHouseArr(res.data.content);
      })
      .catch((err) => {
        console.log("getHouses error", err);
      });
  }, [locationInfo.id]);

  return (
    <div className="flex flex-row container mx-auto p-10 gap-4">
      <div className="w-2/3">
        <h3>Hơn 300 chỗ ở 16/04 - 14/05</h3>
        <h2>Chỗ ở tại khu vực bản đồ đã chọn</h2>
        <div className="flex flex-row gap-4">
          <button>Loại nơi ở</button>
          <button>Giá</button>
          <button>Đặt ngay</button>
          <button>Phòng và phòng ngủ</button>
          <button>Bộ lọc khác</button>
        </div>
        <hr />
        <HouseList houseArr={houseArr} />
      </div>
      <div className="w-1/3 h-full">
        <img src={map} alt="" className="object-cover" />
      </div>
    </div>
  );
}
