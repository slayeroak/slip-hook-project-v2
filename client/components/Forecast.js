import React, { useState } from "react";
import Conditions from "./Conditions"
import Iframe from "react-iframe";
import classes from './style.css'

const Forecast = () => {
  let [city, setCity] = useState("");
  let [unit, setUnit] = useState("imperial");
  let [responseObj, setResponseObj] = useState({});
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(false);
  let [tidesResponseObj, setTidesResponseObj] = useState({});
  let [stateUs, setStateus] = useState("");

  function getForecast(e) {
    e.preventDefault();

    if (city.length === 0) {
      return setError(true);
    }

    // Clear state in preparation for new data
    setError(false);
    setResponseObj({});
    setTidesResponseObj({});
    setStateus({});

    setLoading(true);

    let uriEncodedCity = encodeURIComponent(city);
    fetch(
      `https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          "x-rapidapi-key": "9a986da27dmsh2560a5427d0e4dap168ab2jsndfb75fdfbcc9"
        }
      }
    )
      .then(response => response.json())
      .then(response => {
        if (response.cod !== 200) {
          throw new Error();
        }
        setResponseObj(response);
        setLoading(false);
      })
      .catch(err => {
        setError(true);
        setLoading(false);
        console.log(err.message);
      });

  }
  return (
    // JSX code will go here
    <div className="container">
      <h2>Find Current Weather Conditions</h2>

      <iframe align="top" name="wind-map" id="wind-map" src="https://widgets.fishweather.com/widgets/web/windMap?w=600&h=450&c=0A2946&rp=18&m_m=t&csn=Florida&search=35.57395,-75.46872&sn=Waves&sid=395&u_t=F&act=Fish&m_c=27.71,-82.17&m_z=6&app=fishweather" width="600" height="450" frameborder="0" scrolling="no" allowtransparency="no"></iframe>
      
      <div className="float-roght">
        <Iframe src="https://wisuki.com/widget-details?spot=3513&lang=en&spotinfo=1" style="border: 0; width: 100%; height: 530px;" frameborder="0" />
      </div>

      <div className="float-right">
        <form onSubmit={getForecast}>
        <input
          type="text"
          placeholder="Enter City"
          maxLength="50"
          className={classes.textInput}
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter State"
          maxLength="50"
          className={classes.textInput}
          value={stateUs}
          onChange={e => setStateus(e.target.value)}
        ></input>
        <label>
          <input
            type="radio"
            name="units"
            checked={unit === "imperial"}
            value="imperial"
            onChange={e => setUnit(e.target.value)}
            className={classes.Radio}
          />
          Fahrenheit
        </label>
        <label>
          <input
            type="radio"
            name="units"
            checked={unit === "metric"}
            value="metric"
            onChange={e => setUnit(e.target.value)}
            className={classes.Radio}
          />
          Celcius
        </label>
        <button type="submit">Get Forecast</button>
      </form>
      <Conditions
        responseObj={responseObj}
        error={error} //new
        loading={loading} //new
        tidesResponseObj={tidesResponseObj}
      />
      </div>
      </div>
    
  );
};
export default Forecast;
