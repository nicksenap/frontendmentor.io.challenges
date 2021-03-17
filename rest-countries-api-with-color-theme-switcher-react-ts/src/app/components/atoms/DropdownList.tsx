import { useSelector, useDispatch } from "react-redux";
import { darkTheme } from "../../../store/modules/darkThemeSlice";
import React from "react";
import { filterCountries } from "../../../store/modules/countryDataSlice";

interface DropdownListProps {
  items: string[];
}

export function DropdownList({ items }: DropdownListProps) {
  const isDarkTheme = useSelector(darkTheme);
  const dispatch = useDispatch();
  const dropDownListClassName = `dropdown__list ${
    isDarkTheme ? "dropdown__list--darkTheme" : ""
  }`;
  const handleClick = (e: any) => {
    const payload = e.target.innerText;
    dispatch(filterCountries(payload));
  };
  return (
    <div className={dropDownListClassName}>
      <ul>
        {items.map((item, index) => {
          return (
            <li key={index} onClick={handleClick} value={item}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
