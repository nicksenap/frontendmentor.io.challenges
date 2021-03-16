import React from "react";
import { useSelector } from "react-redux";
import { darkTheme } from "../../../store/modules/darkThemeSlice";
import { Country } from "../../../types/country.interface";

interface CardProps {
  countryData: Country;
}

export function Card({ countryData }: CardProps) {
  const isDarkTheme = useSelector(darkTheme);
  const cardClassName = `card ${isDarkTheme ? "card--darkTheme" : ""}`;
  const cardDescClassName = `card__desc ${
    isDarkTheme ? "card__desc--darkTheme" : ""
  }`;
  return (
    <div className={cardClassName}>
      <img src={countryData.flag} alt="Flag" />
      <div className={cardDescClassName}>
        <h2>{countryData.name}</h2>
        <h3>Population: {countryData.population}</h3>
        <h3>Region: {countryData.region}</h3>
        <h3>Capital: {countryData.capital}</h3>
      </div>
    </div>
  );
}
