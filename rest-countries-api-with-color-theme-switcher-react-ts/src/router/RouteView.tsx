import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export function RouteView() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {/* <CardContainer countryDatas={filteredCountryDatas.slice(0, 100)} /> */}
        </Route>
        <Route exact path="/detail">
          {/* <CountryDetail /> */}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
