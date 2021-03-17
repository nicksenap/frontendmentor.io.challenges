import React, { useEffect } from "react";
import { Navbar } from "./app/components/molecules/NavBar";
import { CardContainer } from "./app/components/organisms/CardContainer";
import {
  fetchAllCountries,
  filteredCountryDataData,
} from "./store/modules/countryDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { darkTheme } from "./store/modules/darkThemeSlice";
import "./App.css";
import "../src/styles/style.scss";

function App() {
  const isDarkTheme = useSelector(darkTheme);
  const dispatch = useDispatch();
  const appClassName = `App ${isDarkTheme ? "App--darkTheme" : ""}`;
  useEffect(() => {
    dispatch(fetchAllCountries());
  }, [dispatch]);
  const filteredCountryDatas = useSelector(filteredCountryDataData);
  return (
    <div className={appClassName}>
      <Navbar />
      <CardContainer countryDatas={filteredCountryDatas.slice(0, 100)} />
    </div>
  );
}

export default App;
