import React, { useState } from "react";

export default function WeatherTemperature(props){
    const[unit, setUnit]= useState("fahrenheit")
    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }
    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }
   
    if (unit === "fahrenheit"){
    return (
      <div className="WeatherTemperature">
        <strong className="temperature">{Math.round(props.fahrenheit)}</strong>
        <span className="units">°F | <a href="/" onClick={showCelsius}>°C </a></span>
      </div>
    );
} else{
    let celsius = 5 / 9 * (props.fahrenheit - 32);
    return (
      <div className="WeatherTemperature">
        <strong className="temperature">{Math.round(celsius)}</strong>
        <span className="units">
          {" "}
          <a href="/" onClick={showFahrenheit}>
            °F | °C
          </a>
        </span>
      </div>
    );
}
}