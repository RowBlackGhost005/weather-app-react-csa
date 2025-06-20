import React , {useState , useCallback} from 'react';

import WeatherForecast from './WeatherForecast';

function WeatherApp(){

    //Manages State
    //Fetches Data
    //Displays the app/dashboard

    /** Manages the user input for the city query */
    const [city , setCity] = useState("");

    const handleCityQuery = useCallback((e) => {
        setCity(e.target.value);
    });

    const handleQueryCity = useCallback((e) => {
        if(city === ""){
            return;
        }

        fetchWeatherForecast(city);
    });

    const [locationName , setLocationName] = useState("");
    const [weatherData , setWeatherData] = useState([]);
    const [isFetching , setFetching] = useState(false);
    const [errorState , setErrorState] = useState(false);


    const fetchWeatherForecast = async (city) => {

        setFetching(true);
        setErrorState(false);
        setWeatherData([]);

        try{
            
            //Fetching geographical coordinates
            const resLocation = await fetch(`https://nominatim.openstreetmap.org/search?city=${city}&format=json`);
            
            if(!resLocation.ok) {
                throw new Error(`HTTP error! Status: ${resLocation.status}`);
            }

            const locationData = await resLocation.json();

            //Fetching weather data with coordinates
            
            const resWeather = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${locationData[0].lat}&longitude=${locationData[0].lon}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,temperature_2m_mean,wind_speed_10m_mean&hourly=temperature_2m&timezone=auto`);

            if(!resWeather.ok){
                throw new Error(`HTTP error! Status: ${resWeather.status}`);
            }

            const weatherData = await resWeather.json();

            const weatherForecast = parseWeatherData(weatherData);

            //Pass it to state
            setWeatherData(weatherForecast);

            setLocationName(locationData[0].name);

        }catch(err){
            console.log(err);
            setErrorState(true);
        }finally{
            setFetching(false);
        }
    };

    const parseWeatherData = (rawData) => {
        const forecast = [];

        console.log(rawData);
        
        const forecastDays = rawData.daily.time.length;

        for(let i = 0 ; i < forecastDays ; i++){
            let dayForecast = {
                tempMean: rawData.daily.temperature_2m_mean[i],
                tempMax: rawData.daily.temperature_2m_max[i],
                tempMin: rawData.daily.temperature_2m_min[i],
                date: rawData.daily.time[i],
                rainProb: rawData.daily.precipitation_probability_max[i],
                windMean: rawData.daily.wind_speed_10m_mean[i],
                weatherCode: rawData.daily.weather_code[i]
            };

            forecast.push(dayForecast);
        }

        return forecast;
    }


    
    return(
        <div className=''>
            <div className={`text-center container-centered`}>
                <div className={`form-input my-1 mx-auto`}>
                    <label className={`form-label-bold`} htmlFor='citySearch'>City: </label>
                    <input className={`text-input`} type='text' name='citySearch' value={city} onChange={handleCityQuery}></input>
                </div>
                
                <div className={`mb-1`}>
                    <button className='btn-main' onClick={handleQueryCity}>Search</button>
                </div>
            </div>

            <hr className={`divisionShadow`}/>
            {isFetching && <p className='text-center'>Fetching data. . .</p>}
            {errorState && <p className='text-center error-text'>An error ocurred while fetching the forecast,<br/>please try again or check your spelling</p>}
            {!isFetching && locationName !== "" && <h2 className='text-center'>{`${locationName} Forecast`}</h2>}
            <div className={`container-centered`}>
                {!isFetching && <WeatherForecast forecastData={weatherData}/>}
            </div>
        </div>
    );
};

export default WeatherApp;