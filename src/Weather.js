import React, { useState } from "react";

import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready:false});
  const [city, setCity] = useState (props.defaultCity);
    function handleResponse(response){
      setWeatherData({
        ready:true,
        coordinates: response.data.coord,
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        date: new Date(response.data.dt * 1000),
        description:response.data.weather[0].description,
        icon:response.data.weather[0].icon,
        wind:response.data.wind.speed,
        city:response.data.name,
      });
       
    }

    function search(){
      const apiKey = "7ee1a70506772263d8d625a570ac2584";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
      axios.get(apiUrl).then(handleResponse);

    }

  function handleSubmit(event){
    event.preventDefault();
    search();
  }

  function handleCityChange(event){
    setCity(event.target.value);
  }

    if (weatherData.ready){
return (
  <div className="Weather">
    <div className="weather-app">
      <form class="mb-3" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control"
              autocomplete="off"
              onChange={handleCityChange}
            />
          </div>
          <div class="col-3">
            <input type="submit" value="Search" class="btn btn-primary w-100" />
          </div>
        </div>
      </form>
      <WeatherInfo data={weatherData} />
      <WeatherForecast coordinates={weatherData.coordinates} />
      
      <div className="weather-forecast"></div>
    </div>
  </div>
);
    } else {
   search();
      return "Loading...";
    }
  
}
