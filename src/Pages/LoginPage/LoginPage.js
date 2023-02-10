import React from "react";
import { Desktop, Tablet, Mobile } from "../../HOC/Responsive";
import LoginPageDesktop from "./LoginPageDesktop";
import LoginPageTablet from "./LoginPageTablet";
import LoginPageMobile from "./LoginPageMobile";

export default function LoginPage({ movieData }) {
  return (
    <div>
      <Desktop>
        <LoginPageDesktop />
      </Desktop>
      <Tablet>
        <LoginPageTablet />
      </Tablet>
      <Mobile>
        <LoginPageMobile />
      </Mobile>
    </div>
  );
}
