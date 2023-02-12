import React from "react";
import { NavLink } from "react-router-dom";

export default function VerticalCityItem(props) {
  return (
    <NavLink to="/">
      <img
        className="object-cover lg:w-64 lg:h-64 h-60 w-full rounded-md"
        src={props.photo}
        alt=""
      />
      <p>{props.description}</p>
    </NavLink>
  );
}
