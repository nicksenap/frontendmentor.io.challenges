import React from "react";
import { useParams } from "react-router-dom";

interface Params {
  alpha2Code: string;
}
export function CountryDetail() {
  const { alpha2Code } = useParams<Params>();
  return <h1> This is CountryDetail : {alpha2Code}</h1>;
}
