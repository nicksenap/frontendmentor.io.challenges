import React, { useEffect } from "react";
import { Navbar } from "./app/components/molecules/NavBar";
import { CardContainer } from "./app/components/organisms/CardContainer";
import {
  fetchAllCountries,
  selectAllCountriesData,
} from "./store/modules/countryDataSlice";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import "../src/styles/style.scss";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCountries());
  });
  const countryDatas = useSelector(selectAllCountriesData);

  return (
    <div className="App">
      <Navbar />
      <CardContainer countryDatas={countryDatas.slice(0, 100)} />
    </div>
  );
}

export default App;
