import React from "react";

const Weather = (props) => (

    

    <div className = "output">
        { props.city && props.country && <p><b>Location:</b> {props.city}, {props.country}</p> }
        { props.temperature && <p><b>Temperature:</b> {props.temperature}</p> }  
        { props.humidity && <p><b>Humidity:</b> {props.humidity}%</p> }
        { props.wind && props.direction && <p><b>Wind Speed:</b> {props.wind} mph</p> }
        { props.gust && <p><b>Gust: </b>{props.gust}mph</p> }
        { props.direction && <p><b>Direction: </b>{props.direction} degrees <span className="spDirect"></span></p> } 
        { props.description && <p><b>Description:</b> {props.description}</p> }   
        { props.error && <p><b>{props.error}</b></p> }  
        <p><br/><i className="windMsg"></i></p>                      
    </div>
);

export default Weather;