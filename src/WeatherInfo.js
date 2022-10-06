import React from "react";
import FormattedDate from "./FormattedDate";

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
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img
                src={props.data.iconUrl}
                alt={props.data.description}
                className="float-left"
              />
              <div className="float-left">
                <strong>{Math.round(props.data.temperature)}</strong>
                <span class="units">°F</span>
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