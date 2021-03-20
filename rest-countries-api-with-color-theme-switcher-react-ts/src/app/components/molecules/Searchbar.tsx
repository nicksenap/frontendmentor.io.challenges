import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { darkTheme } from "../../../store/modules/darkThemeSlice";
import { filterCountriesByName } from "../../../store/modules/countryDataSlice";
interface SearchbarProps {
  placeholder: string;
}

export function Searchbar({ placeholder }: SearchbarProps) {
  const isDarkTheme = useSelector(darkTheme);
  const dispatch = useDispatch();

  const searchBarClassName = `search-bar ${
    isDarkTheme ? "search-bar--darkTheme" : ""
  }`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    (value.length > 2 || value === "") &&
      dispatch(filterCountriesByName(value));
  };

  return (
    <input
      className={searchBarClassName}
      type="text"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}
