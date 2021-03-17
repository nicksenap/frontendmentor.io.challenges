import React from "react";
import { useSelector } from "react-redux";
import { DropDown } from "../molecules/Dropdown";
import { regionsData } from "../../../store/modules/countryDataSlice";
import { darkTheme } from "../../../store/modules/darkThemeSlice";

export function FilterField() {
  const regionsDatas = useSelector(regionsData);
  const isDarkTheme = useSelector(darkTheme);
  const filterFieldClass = `filter-field ${
    isDarkTheme ? "filter-field--darkTheme" : ""
  }`;
  const placeholder = `Filter by Region`;
  return (
    <div className={filterFieldClass}>
      <h3> Placeholder for search </h3>
      <DropDown items={regionsDatas} placeholder={placeholder} />
    </div>
  );
}
