import React, { useEffect, useState } from "react";
import Search from "./Search/Search";
import {
  bgBanner,
  smallHouse,
  houseAboveSea,
  houseNatural,
  dogInBed,
} from "../../assets";
import { cityService } from "../../services/cityService";
import CityList from "./CityList/CityList";
import FeaturedPlace from "./FeaturedPlace/FeaturedPlace";

export default function HomePage() {
  const [cityArr, setCityArr] = useState([]);
  useEffect(() => {
    cityService
      .getNearestCity()
      .then((res) => {
        setCityArr(res.data.content.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const placeArr = [
    { photo: smallHouse, description: "Toàn bộ nhà" },
    { photo: houseAboveSea, description: "Chỗ ở độc đáo" },
    { photo: houseNatural, description: "Trang trại và thiên nhiên" },
    { photo: dogInBed, description: "Cho phép mang thú cưng" },
  ];

  return (
    <>
      <div className="bg-black relative w-screen">
        <div className="absolute inset-x-0">
          <Search />
        </div>
        <div className="px-10 py-10 w-screen">
          <img
            src={bgBanner}
            alt=""
            style={{
              width: "100vw",
              height: "60vh",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
        <h2 className="text-white text-center pb-10 text-3xl">
          Nhờ có Host, mọi điều đều có thể
        </h2>
      </div>
      <div className="container mx-auto p-10">
        <CityList cityArr={cityArr}></CityList>
      </div>
      <div className="container mx-auto p-10">
        <FeaturedPlace placeArr={placeArr}></FeaturedPlace>
      </div>
    </>
  );
}
