import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready:false});
    function handleResponse(response){
      setWeatherData({
        ready:true,
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        date: "Wednesday 12:00",
        description:response.data.weather[0].description,
        iconUrl:'https://cdn3.iconfinder.com/data/icons/tango-icon-library/48/weather-clear-512.png',
        wind:response.data.wind.speed,
        city:response.data.name,
      });
       
    }

    if (weatherData.ready){
return (
  <div className="Weather">
    <div className="weather-app">
      <form class="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control"
              autocomplete="off"
            />
          </div>
          <div class="col-3">
            <input type="submit" value="Search" class="btn btn-primary w-100" />
          </div>
        </div>
      </form>

      <div className="overview">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            Last updated: {weatherData.date} <span></span>
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              className="float-left"
            />
            <div className="float-left">
              <strong>{Math.round(weatherData.temperature)}</strong>
              <span class="units">°F</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Humidity: <span>{weatherData.humidity}</span>%
            </li>
            <li>
              Wind: <span>{weatherData.wind}</span> m/h
            </li>
          </ul>
        </div>
      </div>
      <div className="weather-forecast"></div>
    </div>
  </div>
);
    } else {
   const apiKey = "7ee1a70506772263d8d625a570ac2584";
   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
   axios.get(apiUrl).then(handleResponse);

   return "Loading...";
    }
  
}
