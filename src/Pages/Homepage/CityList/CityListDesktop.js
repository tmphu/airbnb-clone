import React from "react";
import HorizontalCityItem from "../../../Component/Card/HorizontalCityItem";

export default function CityListDesktop({ cityArr }) {
  const renderCityList = () => {
    return cityArr.map((item, index) => {
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
      <h2 className="text-3xl">Khám phá những điểm đến gần đây</h2>
      <div className="grid grid-cols-4 gap-4 py-5">{renderCityList()}</div>
    </>
  );
}
