import React from "react";
import Titles from "../components/Titles";
import Form from "../components/Form";
import Weather from "../components/Weather";


const API_KEY = "e37f6eae6b7811e80caec6fcb873dd58";

class Forecast extends React.Component{
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined, 
        humidity: undefined,
        wind: undefined,
        gust: undefined,
        direction: undefined,
        description: undefined,
        error: undefined
    }

    getWeather = async (e) => {
        e.preventDefault();

        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const northWind = "Wind from the <b>North</b>, few sailors set forth.";
        const eastWind = "Wind from the <b>East</b>, fish bite the least.";
        const southWind = "Wind from the <b>South</b> blows bait in their mouth.";
        const westWind = "Wind from the <b>West</b>, the fish bite the best!";

        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();

        console.log(data);

        if(data.cod == "404" && city && country)
        {
            document.querySelector('.output').style.visibility = 'visible';
            document.querySelector('.output').style.color = 'red';
            this.setState({
                    temperature: undefined,
                    city: undefined,
                    country: undefined,
                    humidity: undefined,
                    wind: undefined,
                    gust: undefined,
                    direction: undefined,
                    description: undefined,
                    error: "Sorry, we don't have data for that city."
            });
        }
        else
        {
            if(city && country)
            {
                document.querySelector('.output').style.visibility = 'visible';
                document.querySelector('.output').style.color = 'black';
                this.setState({
                    temperature: Math.round((data.main.temp * 9/5) + 32) + "°F / " + Math.round(data.main.temp*100)/100 + "°C",
                    city: data.name,
                    country: data.sys.country,
                    humidity: data.main.humidity,
                    wind: data.wind.speed,
                    gust: data.wind.gust,
                    direction: Math.round(data.wind.deg),
                    description: data.weather[0].description,
                    error: ""
                });

                if(data.wind.deg == 0)
                {
                    document.querySelector('.spDirect').innerHTML = "N";   
                    document.querySelector('.windMsg').innerHTML = northWind;     
                }
                else if(data.wind.deg == 90)
                {
                    document.querySelector('.spDirect').innerHTML = "E";  
                    document.querySelector('.windMsg').innerHTML = eastWind;    
                }
                else if(data.wind.deg == 180)
                {
                    document.querySelector('.spDirect').innerHTML = "S";  
                    document.querySelector('.windMsg').innerHTML = southWind;    
                }
                else if(data.wind.deg == 270)
                {
                    document.querySelector('.spDirect').innerHTML = "W"; 
                    document.querySelector('.windMsg').innerHTML = westWind;     
                }
                else if(data.wind.deg < 90)
                {
                    document.querySelector('.spDirect').innerHTML = "NE";
                    document.querySelector('.windMsg').innerHTML = northWind + "<br>" + eastWind;       
                }
                else if(data.wind.deg < 180 && data.wind.deg > 90)
                {
                    document.querySelector('.spDirect').innerHTML = "SE";
                    document.querySelector('.windMsg').innerHTML = southWind + "<br>" + eastWind;    
                }
                else if(data.wind.deg < 270 && data.wind.deg > 180)
                {
                    document.querySelector('.spDirect').innerHTML = "SW";
                    document.querySelector('.windMsg').innerHTML = southWind + "<br>" + westWind;  
                }
                else if(data.wind.deg > 270)
                {
                    document.querySelector('.spDirect').innerHTML = "NW";
                    document.querySelector('.windMsg').innerHTML = northWind + "<br>" + westWind; 
                }
            }
            else
            {
                document.querySelector('.output').style.visibility = 'visible';
                document.querySelector('.output').style.color = 'black';
                this.setState({
                    temperature: undefined,
                    city: undefined,
                    country: undefined,
                    humidity: undefined,
                    wind: undefined,
                    gust: undefined,
                    direction: undefined,
                    description: undefined,
                    error: "Please enter a city and country."
                });
            }   
        }
            
    }

    render(){
        return (           
            <div>
                <div className ="wrapper">
                    <div className ="main">
                        <div className ="container">
                            <div className ="row">
                                <div className="col-xs-5 title-container">
                                    <Titles />
                                </div>
                                <div className="col-xs-7 form-container">
                                    <Form getWeather={this.getWeather}/>
                                    <Weather temperature={this.state.temperature}
                                    city={this.state.city}
                                    country={this.state.country}
                                    humidity={this.state.humidity}
                                    wind={this.state.wind}
                                    gust={this.state.gust}
                                    direction={this.state.direction}
                                    description={this.state.description}
                                    error={this.state.error}
                                />     
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }    
};
export default Forecast;
