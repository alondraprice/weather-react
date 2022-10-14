import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){
    return (
      <div className="WeatherInfo">
        <div className="overview">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <div className="float-left">
                <WeatherIcon
                  code={props.data.icon} size={60}
                />
              </div>
              <div className="float-left">
                <WeatherTemperature fahrenheit={props.data.temperature}/>
                
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>
                Humidity: <span>{props.data.humidity}</span>%
              </li>
              <li>
                Wind: <span>{props.data.wind}</span> m/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    ); 
    
}