import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_WEATHER } from "../../query/query";
import Loader from "react-loader-spinner";

export default function WeatherCard() {
  const [city, setCity] = useState("osmaniye");

  const { loading, error, data } = useQuery(GET_WEATHER, {
    variables: { name: city },
  });
  if (loading) {
    return <Loader type="Puff" color="#00BFFF" height={100} width={100} />;
  }
  return error === true ? (
    <div>Error...</div>
  ) : (
    <div>
      <div>{console.log(data)}</div>
    </div>
  );
}
