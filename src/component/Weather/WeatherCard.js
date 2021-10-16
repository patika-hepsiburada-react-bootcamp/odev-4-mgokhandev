import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_WEATHER } from "../../query/query";
import Dropdown from "../Dropdown/Dropdown";
import Loader from "react-loader-spinner";
import WeatherCardInfo from "./WeatherCardInfo";

export default function WeatherCard() {
  const [city, setCity] = useState("osmaniye");

  const { loading, error, data } = useQuery(GET_WEATHER, {
    variables: { name: city },
  });
  if (loading) {
    return <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />;
  }
  return error === true ? (
    <div>Error...</div>
  ) : (
    <div className="wrapper">
      <Dropdown city={city} setCity={setCity} />
      <WeatherCardInfo weatherInfo={data} />
    </div>
  );
}
