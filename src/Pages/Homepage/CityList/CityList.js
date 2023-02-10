import React from "react";
import { Desktop, Tablet, Mobile } from "../../../HOC/Responsive";
import CityListDesktop from "./CityListDesktop";
import CityListTablet from "./CityListTablet";
import CityListMobile from "./CityListMobile";

export default function CityList({ cityArr }) {
  return (
    <>
      <div>
        <Desktop>
          <CityListDesktop cityArr={cityArr}></CityListDesktop>
        </Desktop>
        <Tablet>
          <CityListTablet cityArr={cityArr}></CityListTablet>
        </Tablet>
        <Mobile>
          <CityListMobile cityArr={cityArr}></CityListMobile>
        </Mobile>
      </div>
    </>
  );
}
