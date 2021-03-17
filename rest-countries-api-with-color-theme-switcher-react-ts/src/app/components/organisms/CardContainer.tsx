import React from "react";
import { useSelector } from "react-redux";
import { darkTheme } from "../../../store/modules/darkThemeSlice";
import { Country } from "../../../types/country.interface";
import { Card } from "../molecules/Card";
import { FilterField } from "../organisms/FilterField";

interface CardContainerProps {
  countryDatas: Country[];
}

export function CardContainer({ countryDatas }: CardContainerProps) {
  const isDarkTheme = useSelector(darkTheme);
  const cardContainerClassName = `cardContainer ${
    isDarkTheme ? "cardContainer--darkTheme" : ""
  }`;
  return (
    <div>
      <FilterField />
      <div className={cardContainerClassName}>
        {countryDatas.map((country, index) => {
          return <Card countryData={country} key={index} />;
        })}
      </div>
    </div>
  );
}
