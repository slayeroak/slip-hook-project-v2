import React from "react";
import classes from "./style.css"


const conditions = props => {
  return (
    <div className={classes.Wrapper}>
      {props.error && (
        <small className={classes.Small}>Please enter a valid city.</small>
      )}
      {props.loading && <div className={classes.Loader} />}
      {props.responseObj.cod === 200 ? (
        <div>
          <p>
            <strong>{props.responseObj.name}</strong>
          </p>
          <p>
            It is currently {Math.round(props.responseObj.main.temp)} degrees
            out with {props.responseObj.weather[0].description}.
          </p>
          <p>Humidity: {props.responseObj.main.humidity}</p>
          <p>Wind Speed: {props.responseObj.wind.speed}</p>

          {/* <p>
            {props.tidesResponseobj.extremes[0].state}{" "}
            {props.tidesResponseobj.extremes[0].datetime}
          </p>
          <p>
            {props.tidesResponseobj.extremes[1].state}{" "}
            {props.tidesResponseobj.extremes[1].datetime}
          </p>
          <p>
            {props.tidesResponseobj.extremes[2].state}{" "}
            {props.tidesResponseobj.extremes[2].datetime}
          </p>
          <p>
            {props.tidesResponseobj.extremes[3].state}{" "}
            {props.tidesResponseobj.extremes[3].datetime}
          </p> */}
        </div>
      ) : null}
    </div>
  );
};
export default conditions;