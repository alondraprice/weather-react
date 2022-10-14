import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast]= useState(null);
  
  function handleResponse(response){
 setForecast(response.data.daily);
setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index){
            if (index < 6){
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            }
          }
          )}
          
        </div>
      </div>
    );
  } else {
     let apiKey = "7ee1a70506772263d8d625a570ac2584";
 let longitude = props.coordinates.lon;
 let latitude = props.coordinates.lat;
 let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}.7&appid=${apiKey}&units=imperial`;

 axios.get(apiUrl).then(handleResponse);

 return null; 
  }
}