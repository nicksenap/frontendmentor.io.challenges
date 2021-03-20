import React, { useState } from "react";
import { DropdownList } from "../atoms/DropdownList";
import { useSelector } from "react-redux";
import { darkTheme } from "../../../store/modules/darkThemeSlice";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface DropdownProps {
  items: string[];
  placeholder: string;
}
export function DropDown({ items, placeholder }: DropdownProps) {
  const isDarkTheme = useSelector(darkTheme);
  const [shouldDropDownShow, setShouldDropDownShow] = useState(false);
  const buttonClassName = `dropdown__button ${
    isDarkTheme ? "dropdown__button--darkTheme" : ""
  }`;
  const handleClick = () => {
    setShouldDropDownShow(!shouldDropDownShow);
  };
  return (
    <div className="dropdown">
      <button className={buttonClassName} onClick={handleClick}>
        {placeholder} <FontAwesomeIcon icon={faAngleDown} />
      </button>
      {shouldDropDownShow && (
        <DropdownList
          items={items}
          setShouldDropDownShow={setShouldDropDownShow}
        />
      )}
    </div>
  );
}
