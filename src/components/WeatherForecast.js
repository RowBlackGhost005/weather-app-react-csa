import React from 'react';

import WeatherCard from './WeatherCard';

function WeatherForecast({forecastData}) {

    //Stores data for Forecast and displays it in single weather carsd

    return(
        <div className='grid-container mx-auto'>
            {forecastData.map(forecast => (
                <WeatherCard
                    key={forecast.date}
                    date={forecast.date}
                    tempAvg={forecast.tempMean}
                    tempMin={forecast.tempMin}
                    tempMax={forecast.tempMax}
                    rainProb={forecast.rainProb}
                    windMean={forecast.windMean}
                    weatherCode={forecast.weatherCode}/>
            ))}
        </div>
    );
};

export default WeatherForecast;