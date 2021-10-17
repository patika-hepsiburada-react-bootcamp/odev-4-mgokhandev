import Icon from "./Icon";
import React from "react";

export default function WeatherCardInfo({ weatherInfo }) {
  const { getCityByName } = weatherInfo;

  const kelvinToCelcius = (value) => value - 272.15;

  const getDate = (date) => new Date(date * 1000).toLocaleDateString("tr-TR");

  return (
    <div className="Province">
      <div>
        <Icon title={getCityByName.weather.summary.title} />
      </div>
      <div>
        <h3>{getCityByName.name}</h3>
      </div>
      <div>
        <p>
          Sıcaklık :{" "}
          {kelvinToCelcius(getCityByName.weather.temperature.actual).toFixed(0)}{" "}
          °C
        </p>
        <p>Nem : %{getCityByName.weather.clouds.humidity}</p>
        <p>Rüzgar : {getCityByName.weather.wind.speed} m/s</p>
        <p>Tarih : {getDate(getCityByName.weather.timestamp)}</p>
      </div>
    </div>
  );
}
