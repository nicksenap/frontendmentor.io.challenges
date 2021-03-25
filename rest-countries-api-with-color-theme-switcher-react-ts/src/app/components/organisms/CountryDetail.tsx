import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { darkTheme } from "../../../store/modules/darkThemeSlice";
import {
  selectedCountryData,
  getCountryByCode,
  regionsData,
} from "../../../store/modules/countryDataSlice";
import {BackButton  } from "../atoms/BackButton";


interface Params {
  alpha2Code: string;
}

export function CountryDetail() {
  const { alpha2Code } = useParams<Params>();
  const isDarkTheme = useSelector(darkTheme);
  const regionsDataSelect = useSelector(regionsData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountryByCode(alpha2Code));
  }, [alpha2Code, dispatch, regionsDataSelect]);

  const selectedCountry = useSelector(selectedCountryData);
  const countryDetailContainerClassName = `country-detail__container ${isDarkTheme ? 'country-detail__container--darkTheme' : ''}`
  const countryDetailClassName = `country-detail ${isDarkTheme ? 'country-detail--darkTheme' : ''}`

  return (
    <div className={countryDetailClassName}>
      <div className="country-detail__button-box">
      <BackButton />
      </div>
      <div className={countryDetailContainerClassName}>
        <div className="country-detail__container__img-box">
        <img src={selectedCountry?.flag} alt={selectedCountry?.name} />
        </div>
        <div>
          <h2> {selectedCountry?.name}</h2>
          <div className="country-detail__container__desc-box">
          <div>
            <h3>Native Name: {selectedCountry?.nativeName}</h3>
            <h3>Population: {selectedCountry?.population}</h3>
            <h3>Region: {selectedCountry?.region}</h3>
            <h3>Sub Region: {selectedCountry?.subregion}</h3>
            <h3>Capital: {selectedCountry?.capital}</h3>
          </div>
          <div className="">
            <h3> Top Level Domain: {selectedCountry?.topLevelDomain}</h3>
            <h3>
              Currencies: {selectedCountry?.currencies.map((c) => c.name)}
            </h3>
            <h3>
              Language:
              {selectedCountry?.languages.map((l) => (
                <> {l.name},</>
              ))}
            </h3>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
