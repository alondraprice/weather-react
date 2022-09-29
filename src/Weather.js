import React from "react";
import "./Weather.css";

export default function Weather() {
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
              <input
                type="submit"
                value="Search"
                class="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>

        <div className="overview">
          <h1>Dallas</h1>
          <ul>
            <li>
              Last updated: Wednesday 12:00 <span></span>
            </li>
            <li>Sunny</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img
                src="https://cdn3.iconfinder.com/data/icons/tango-icon-library/48/weather-clear-512.png"
                alt="Sunny"
                className="float-left"
              />
              <div className="float-left">
                <strong>83</strong>
                <span class="units">°F</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>
                Humidity: <span>51</span>%
              </li>
              <li>
                Wind: <span>8</span> m/h
              </li>
            </ul>
          </div>
        </div>
        <div className="weather-forecast"></div>
      </div>
      <small>
        <a href="https://github.com/alondraprice/weather-react" target="blank">
          Open-source code
        </a>
        by Alondra Price
      </small>
    </div>
  );
}
