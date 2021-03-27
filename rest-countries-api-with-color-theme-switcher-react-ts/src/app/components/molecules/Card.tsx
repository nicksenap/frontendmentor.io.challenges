import React from "react";
import { useSelector } from "react-redux";
import { darkTheme } from "../../../store/modules/darkThemeSlice";
import { Country } from "../../../types/country.interface";
import { useHistory } from "react-router-dom";

interface CardProps {
  countryData: Country;
}

export function Card({ countryData }: CardProps) {
  const isDarkTheme = useSelector(darkTheme);
  const history = useHistory();
  const cardClassName = `card ${isDarkTheme ? "card--darkTheme" : ""}`;
  const cardDescClassName = `card__desc ${
    isDarkTheme ? "card__desc--darkTheme" : ""
  }`;
  const handleClick = () => history.push(`/detail/${countryData.alpha2Code}`);
  return (
    <div className={cardClassName} onClick={handleClick}>
      <div className="card__img-box">
        <img src={countryData.flag} alt="Flag" />
      </div>
      <div className={cardDescClassName}>
        <h2>{countryData.name}</h2>
        <h3>
          Population: <div className="slim-text"> {countryData.population}</div>
        </h3>
        <h3>
          Region: <div className="slim-text">{countryData.region}</div>
        </h3>
        <h3>
          Capital: <div className="slim-text">{countryData.capital}</div>
        </h3>
      </div>
    </div>
  );
}
