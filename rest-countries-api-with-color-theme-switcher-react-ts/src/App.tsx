import React, { useEffect } from "react";
import { Navbar } from "./app/components/molecules/NavBar";
import { CardContainer } from "./app/components/organisms/CardContainer";
import {
  fetchAllCountries,
  filteredCountryDataData,
} from "./store/modules/countryDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { darkTheme } from "./store/modules/darkThemeSlice";
import "./App.css";
import "../src/styles/style.scss";
import { CountryDetail } from "./app/components/organisms/CountryDetail";

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
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <CardContainer countryDatas={filteredCountryDatas.slice(0, 100)} />
          </Route>
          <Route exact path="/detail/:alpha2Code">
            <CountryDetail />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
