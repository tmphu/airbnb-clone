import React from "react";
import { Desktop, Tablet, Mobile } from "../../../HOC/Responsive";
import SearchDesktop from "./SearchDesktop";
import SearchMobile from "./SearchMobile";

export default function Search({ cityArr }) {
  return (
    <>
      <div>
        <Desktop>
          <SearchDesktop cityArr={cityArr}></SearchDesktop>
        </Desktop>
        <Tablet>
          <SearchDesktop cityArr={cityArr}></SearchDesktop>
        </Tablet>
        <Mobile>
          <SearchMobile cityArr={cityArr}></SearchMobile>
        </Mobile>
      </div>
    </>
  );
}
