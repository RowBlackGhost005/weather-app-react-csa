import styles from './WeatherCard.module.css';

import forecastImg from '../assets/weather-images/sunny.png';

function WeatherCard(){

    //Stores a single day forecast

    return(
        <div className={`${styles.weatherCard} ${styles.cardText}`}>
            <div className={`${styles.textCenter} ${styles.weatherCardHeader} ${styles.headerText}`}>
                <p>{`Tue , Jun 19`}</p>
            </div>

            <div className={`${styles.textCenter}`}>
                <img className={`${styles.forecastImg}`} src={forecastImg} alt='Forecast Representation'/>
                <p className={`${styles.textAccent} ${styles.fontLarge} ${styles.my1}`}>{`28°C`}</p>
                <p className={`${styles.textAccent} ${styles.fontLarge}`}>{`Sunny`}</p>
            </div>

            <hr className={`${styles.divisionShadow}`}/>

            <div className={`${styles.flexRow} ${styles.my1}`}>
                <div className={`${styles.flexItem} ${styles.textEnd}`}>
                    <p>Max</p>
                    <p>{`31°C`}</p>
                </div>
                
                <div className={`${styles.flexItem} ${styles.textStart}`}>
                    <p>Min</p>
                    <p>{`24°C`}</p>
                </div>
            </div>

            <hr className={`${styles.divisionShadow}`}/>

            <div className={`${styles.textCenter} ${styles.my1}`}>
                <p>Rain Probability</p>
                <p>{`30%`}</p>
            </div>

            <div className={`${styles.textCenter} ${styles.my1}`}>
                <p>Wind Speeds</p>
                <p>{`15 km/h`}</p>
            </div>
        </div>
    )
};

export default WeatherCard;