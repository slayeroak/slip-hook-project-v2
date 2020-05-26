import React from "react";
import Layout from '../components/Layout';
import Forecast from '../components/Forecast'


function Weather() {
  return (
    <React.Fragment>
      <Layout />
      <Forecast />
    
    <div className="container text-center">
      <iframe align="top" name="wind-map" id="wind-map" src="https://widgets.fishweather.com/widgets/web/windMap?w=600&h=450&c=0A2946&rp=18&m_m=t&csn=Florida&search=35.57395,-75.46872&sn=Waves&sid=395&u_t=F&act=Fish&m_c=27.79,-82.63&m_z=6&app=fishweather" width="600" height="450" frameborder="0" scrolling="no" allowtransparency="no"></iframe>    
    </div>
    </React.Fragment>
  );
}
export default Weather;