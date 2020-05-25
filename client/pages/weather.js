import React from "react";
import Layout from '../components/Layout';
import Forecast from '../components/Forecast'


function Weather() {
  return (
    <React.Fragment>
      <Layout />
      <Forecast />
    </React.Fragment>

  );
}
export default Weather;