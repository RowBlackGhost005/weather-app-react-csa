import React from 'react';

import styles from './WeatherCard.module.css';

import {useState} from 'react';

import forecastImg from '../assets/weather-images/sunny.png';

import {resolveWeatherCode , resolveWeatherCodeName} from '../utils/WeatherCodeResolver';

function WeatherCard({date , tempAvg , tempMax, tempMin , rainProb , windMean , weatherCode}){

    const dateString = new Date(date);

    return(
        <div className={`${styles.weatherCard} ${styles.cardText}`}>
            <div className={`${styles.textCenter} ${styles.weatherCardHeader} ${styles.headerText}`}>
                <p>{dateString.toLocaleDateString("en-US", { weekday: 'long', day: 'numeric' , month: 'long'})}</p>
            </div>

            <div className={`${styles.textCenter}`}>
                <img className={`${styles.forecastImg}`} src={resolveWeatherCode(weatherCode)} alt='Forecast Representation'/>
                <p className={`${styles.textAccent} ${styles.fontLarge} ${styles.my1}`}>{`${tempAvg}°C`}</p>
                <p className={`${styles.textAccent} ${styles.fontLarge}`}>{resolveWeatherCodeName(weatherCode)}</p>
            </div>

            <hr className={`${styles.divisionShadow}`}/>

            <div className={`${styles.flexRow} ${styles.my1}`}>
                <div className={`${styles.flexItem} ${styles.textEnd}`}>
                    <p>Max</p>
                    <p>{`${tempMax}°C`}</p>
                </div>
                
                <div className={`${styles.flexItem} ${styles.textStart}`}>
                    <p>Min</p>
                    <p>{`${tempMin}°C`}</p>
                </div>
            </div>

            <hr className={`${styles.divisionShadow}`}/>

            <div className={`${styles.textCenter} ${styles.my1}`}>
                <p>Rain Probability</p>
                <p>{`${rainProb}%`}</p>
            </div>

            <div className={`${styles.textCenter} ${styles.my1}`}>
                <p>Wind Speeds</p>
                <p>{`${windMean} km/h`}</p>
            </div>
        </div>
    )
};

export default WeatherCard;