import React from "react";
import { useSelector } from "react-redux";
import { DropDown } from "../molecules/Dropdown";
import { regionsData } from "../../../store/modules/countryDataSlice";
import { darkTheme } from "../../../store/modules/darkThemeSlice";
import { Searchbar } from "../molecules/Searchbar";

export function FilterField() {
  const regionsDatas = useSelector(regionsData);
  const isDarkTheme = useSelector(darkTheme);
  const filterFieldClass = `filter-field ${
    isDarkTheme ? "filter-field--darkTheme" : ""
  }`;
  const placeholder = `Filter by Region`;
  const searchBarPlaceholder = `Search for a country`;
  return (
    <div className={filterFieldClass}>
      <Searchbar placeholder={searchBarPlaceholder} />
      <DropDown items={regionsDatas} placeholder={placeholder} />
    </div>
  );
}
