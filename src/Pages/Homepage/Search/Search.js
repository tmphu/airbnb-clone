import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { locationService } from "../../../services/locationService";
import LocationSearch from "./LocationSearch";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Search({ cityArr }) {
  let navigate = useNavigate();
  let locationInfo = useSelector((state) => state.locationReducer.locationInfo);

  return (
    <>
      <div className="bg-white mx-auto w-8/12 py-6 rounded-full flex flex-row px-6 items-center justify-between">
        <div>
          <div className="font-bold">Địa điểm</div>
          <LocationSearch cityArr={cityArr} />
        </div>
        <div>
          <div className="font-bold">Nhận phòng</div>
          <div>Thêm ngày</div>
        </div>
        <div>
          <div className="font-bold">Trả phòng</div>
          <div>Thêm ngày</div>
        </div>
        <div>
          <div className="font-bold">Khách</div>
          <div>Thêm khách</div>
        </div>
        <div
          className="bg-pink-600 text-white p-3 cursor-pointer"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "25px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() =>
            navigate(`/location/${locationInfo?.id}`, {
              state: { locationInfo },
            })
          }
        >
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
    </>
  );
}

export default Search;
