import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { NavLink } from "react-router-dom";

function HorizontalHouseItem({ houseInfo }) {
  return (
    <NavLink
      className="flex flex-row border rounded-lg shadow md:flex-row md:max-w-6xl p-5 gap-10"
      to={`/detail/${houseInfo.id}`}
    >
      <img
        className="object-cover w-80 h-60 rounded-md"
        src={houseInfo.hinhAnh}
        alt=""
      />
      <div className="w-full flex flex-col justify-between">
        <div className="flex flex-row">
          <div className="w-full">
            <h3 className="mb-2 text-xl font-bold text-gray-900">
              {houseInfo.tenPhong}
            </h3>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {houseInfo.khach} khách - Phòng studio - {houseInfo.giuong} giường
              - {houseInfo.phongTam} phòng tắm {houseInfo.wifi ? " - Wifi" : ""}{" "}
              {houseInfo.bep ? " - Bếp" : ""}{" "}
              {houseInfo.dieuHoa ? " - Điều hòa nhiệt độ" : ""}{" "}
              {houseInfo.mayGiat ? " - Máy giặt" : ""}
            </p>
          </div>
          <FontAwesomeIcon
            icon={faHeart}
            className="text-right"
            style={{
              width: "30px",
              height: "30px",
            }}
          />
        </div>
        <p className="text-right text-2xl">
          <span className="font-bold">${houseInfo.giaTien}</span>/ tháng
        </p>
      </div>
    </NavLink>
  );
}

export default HorizontalHouseItem;
