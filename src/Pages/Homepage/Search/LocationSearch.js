import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { setLocationInfo } from "../../../redux/reducers/locationReducer";

const InputField = styled.input``;

function LocationSearch({ cityArr }) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [value, setValue] = useState("");
  const divRef = useRef(null);
  const inputRef = useRef(null);
  let dispatch = useDispatch();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        divRef.current &&
        !(
          divRef.current.contains(event.target) ||
          inputRef.current.contains(event.target)
        )
      ) {
        setIsDropdownVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {};
  }, [divRef]);

  const handleShowDropdown = () => {
    return cityArr?.slice(0, 5).map((city) => {
      return (
        <div
          className="flex flex-row items-center py-4 px-4 cursor-pointer hover:bg-gray-100 "
          key={city.id}
          onClick={() =>
            handleDropdownClick(`${city.tinhThanh} , ${city.tenViTri}`, city)
          }
        >
          <span className="mr-2 bg-gray-300 rounded-md p-3">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </span>
          <p>
            {city.tinhThanh}, {city.tenViTri}
          </p>
        </div>
      );
    });
  };

  const handleInputClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleDropdownClick = (item, locationInfo) => {
    setValue(item);
    setIsDropdownVisible(false);
    dispatch(setLocationInfo(locationInfo));
  };

  return (
    <div className="relative overflow-visible">
      <InputField
        className="border-0 p-0 m-0 focus:border-0 focus:outline-0 focus:ring-0"
        type="text"
        placeholder="B???n s???p ??i ????u?"
        value={value}
        onFocus={handleInputClick}
        onChange={handleInputChange}
        ref={inputRef}
      />
      {isDropdownVisible && (
        <div
          className="absolute mt-2 bg-white rounded-lg shadow-lg w-max"
          ref={divRef}
        >
          {handleShowDropdown()}
        </div>
      )}
    </div>
  );
}

export default LocationSearch;
