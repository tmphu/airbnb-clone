import React from "react";
import { Desktop, Tablet, Mobile } from "../../../HOC/Responsive";
import FeaturedPlaceDesktop from "./FeaturedPlaceDesktop";
import FeaturedPlaceTablet from "./FeaturedPlaceTablet";
import FeaturedPlaceMobile from "./FeaturedPlaceMobile";

export default function FeaturedPlace({ placeArr }) {
  return (
    <>
      <div>
        <Desktop>
          <FeaturedPlaceDesktop placeArr={placeArr}></FeaturedPlaceDesktop>
        </Desktop>
        <Tablet>
          <FeaturedPlaceTablet placeArr={placeArr}></FeaturedPlaceTablet>
        </Tablet>
        <Mobile>
          <FeaturedPlaceMobile placeArr={placeArr}></FeaturedPlaceMobile>
        </Mobile>
      </div>
    </>
  );
}
