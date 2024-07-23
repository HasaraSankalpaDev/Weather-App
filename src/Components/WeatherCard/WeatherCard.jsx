import React from "react";
import Form from "react-bootstrap/Form";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import "./WeatherCard.css";

function WeatherCard() {
  return (
    <div className="weather-app text-white mt-5 text-center py-4 px-5 rounded-2">
      <h2 className="mb-3 mt-3">
        My <span className="text-warning">Weather App</span>{" "}
      </h2>
      {/* Form Box */}
      <div className="row d-flex justify-content-center flex-row w-100 mt-4">
        <Form.Control
          type="text"
          placeholder="Search Weather"
          aria-label=" input example"
          className="weather-input rounded-5 py-2"
        />
      </div>
      <div className="row my-4 mx-5 px-5">
        <div className="col-6 weather-box">
          <TiWeatherPartlySunny className="mt-3 weather-icon" />
          <h5 className="text-warning my-2">Tempeture</h5>
          <h4>27.5 C</h4>
        </div>
        <div className="col-6 weather-box">
          <TiWeatherPartlySunny className="mt-3 weather-icon" />
          <h5 className="text-warning my-2">Tempeture</h5>
          <h4>27.5 C</h4>
        </div>
      </div>
      <div className="row mx-5 px-5 my-4 pt-3">
        <button className="btn btn-warning rounded-5">Find Weather</button>
      </div>
    </div>
  );
}

export default WeatherCard;
