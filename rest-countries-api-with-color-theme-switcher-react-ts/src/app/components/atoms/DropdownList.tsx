import { useSelector, useDispatch } from "react-redux";
import { darkTheme } from "../../../store/modules/darkThemeSlice";
import React from "react";
import { filterCountriesByRegion } from "../../../store/modules/countryDataSlice";

interface DropdownListProps {
  items: string[];
  setShouldDropDownShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export function DropdownList({
  items,
  setShouldDropDownShow,
}: DropdownListProps) {
  const isDarkTheme = useSelector(darkTheme);
  const dispatch = useDispatch();
  const dropDownListClassName = `dropdown__list ${
    isDarkTheme ? "dropdown__list--darkTheme" : ""
  }`;
  const dropDownListItemClassName = `dropdown__list__item ${
    isDarkTheme ? "dropdown__list__item--darkTheme" : ""
  }`;
  const handleClick = (e: any) => {
    const payload = e.target.innerText;
    dispatch(filterCountriesByRegion(payload));
    setShouldDropDownShow(false);
  };
  return (
    <div className={dropDownListClassName}>
      <ul>
        {items.map((item, index) => {
          return (
            <li
              className={dropDownListItemClassName}
              key={index}
              onClick={handleClick}
              value={item}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
