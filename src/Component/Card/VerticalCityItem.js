import React from "react";
import { NavLink } from "react-router-dom";

export default function VerticalCityItem(props) {
  return (
    <NavLink to="/">
      <img
        className="object-cover w-64 h-64 rounded-md"
        src={props.photo}
        alt=""
      />
      <p>{props.description}</p>
    </NavLink>
  );
}
