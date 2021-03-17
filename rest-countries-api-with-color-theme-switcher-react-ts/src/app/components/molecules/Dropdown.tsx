import React, { KeyboardEventHandler, useState } from "react";
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
  const [searchWord, setSearchWord] = useState("");
  const buttonClassName = `dropdown__button ${
    isDarkTheme ? "dropdown__button--darkTheme" : ""
  }`;
  const handleKeyUp = (e: KeyboardEventHandler<HTMLInputElement>) => {
    console.log(e.call);
  };
  const handleClick = () => {
    setShouldDropDownShow(!shouldDropDownShow);
  };
  return (
    <div className="dropdown">
      <p> {searchWord}</p>
      <button className={buttonClassName} onClick={handleClick}>
        {placeholder} <FontAwesomeIcon icon={faAngleDown} />
      </button>
      {shouldDropDownShow && <DropdownList items={items} />}
    </div>
  );
}
