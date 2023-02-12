import React from "react";
import HorizontalCityItem from "../../../Component/Card/HorizontalCityItem";

export default function CityListMobile({ cityArr }) {
  const renderCityList = () => {
    return cityArr.slice(0, 8).map((item, index) => {
      return (
        <HorizontalCityItem
          photo={item.hinhAnh}
          name={item.tinhThanh}
          key={index}
        />
      );
    });
  };

  return (
    <>
      <h2 className="text-lg">Khám phá những điểm đến gần đây</h2>
      <div className="grid grid-cols-1 gap-2 py-5">{renderCityList()}</div>
    </>
  );
}
