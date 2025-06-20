import styles from './WeatherCurrent.module.css';

import weather from '../assets/weather-images/sunny.png';

import {resolveWeatherCode , resolveWeatherCodeName} from '../utils/WeatherCodeResolver';

function WeatherCurrent({date , temperature , apparentTemp , rainProb , weatherCode , windSpeed}) {

    const hours = new Date(date).getHours();

    return(
        <div className={`${styles.card} mx-auto`}>
            <div className={`${styles.header}`}>
                <h2 className={`${styles.h2}`}>{`Today | ${hours}:00`}</h2>
            </div>

            <div className={`${styles.flexRow} ${styles.p1} ${styles.flexItem}`}>
                <img className={`${styles.forecastImg}`} src={resolveWeatherCode(weatherCode)} alt='Forecast Representation'/>

                <div className={`${styles.flexColumn} ${styles.textCenter} ${styles.ps1} ${styles.flexItem}`}>
                    <div className={`${styles.h100}`}>
                        <p className={`${styles.pb1} ${styles.weatherState}`}>{resolveWeatherCodeName(weatherCode)}</p>
                        <p className={`${styles.pb1} ${styles.weatherState}`}>{`${temperature}°C`}</p>
                    </div>

                    <hr className={`${styles.divisionShadow}`}/>

                    <div className={`${styles.flexRow}`}>
                        <p className={`${styles.flexItem}`}>{`Rain Probability:`}<br/>{`${rainProb}%`}</p>
                        <p className={`${styles.flexItem}`}>{`Wind Speed:`}<br/>{`${windSpeed} km/h`}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherCurrent;