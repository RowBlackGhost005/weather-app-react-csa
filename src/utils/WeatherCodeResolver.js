/** Images from Flaticon | Iconixar user */
import clearSky from '../assets/weather-images/sunny.png';
import cloudy from '../assets/weather-images/cloudy.png';
import overcast from '../assets/weather-images/overcast.png';
import foggy from '../assets/weather-images/foggy.png';
import drizzle from '../assets/weather-images/drizzle.png';
import freezeDrizzle from '../assets/weather-images/freeze-dizzle.png';
import rainy from '../assets/weather-images/rainy.png';
import freezingRainy from '../assets/weather-images/freezing-rainy.png';
import snowy from '../assets/weather-images/snowy.png'
import snowGrains from '../assets/weather-images/snow-grains.png';
import rainShowers from '../assets/weather-images/rain-showers.png';
import snow from '../assets/weather-images/snow.png';
import storm from '../assets/weather-images/storm.png';
import thunderStorm from '../assets/weather-images/thunder-storm.png';

const weatherCodes = {
    0: clearSky,
    1: cloudy,
    2: cloudy,
    3: overcast,
    45: foggy,
    48: foggy,
    51: drizzle,
    53: drizzle,
    55: drizzle,
    56: freezeDrizzle,
    57: freezeDrizzle,
    61: rainy,
    63: rainy,
    65: rainy,
    66: freezingRainy,
    67: freezingRainy,
    71: snowy,
    73: snowy,
    75: snowy,
    77: snowGrains,
    80: rainShowers,
    81: rainShowers,
    82: rainShowers,
    85: snow,
    86: snow,
    95: storm,
    96: thunderStorm,
    99: thunderStorm,
};

const weatherNames = {
    0: "Sunny",
    1: "Mainly Clear",
    2: "Party Cloudy",
    3: "Overcast",
    45: "Foggy",
    48: "Rime Fog",
    51: "Light Drizzle",
    53: "Moderate Drizzle",
    55: "Dense Drizzle",
    56: "Light Freeze Drizzle",
    57: "Dense Freeze Drizzle",
    61: "Slight Rain",
    63: "Moderate Rain",
    65: "Heavy Rain",
    66: "Light Freezing Rain",
    67: "Heavy Freezing Rain",
    71: "Ligh Snow",
    73: "Moderate Snow",
    75: "Heavy Snow",
    77: "Snow Grains",
    80: "Slight Rain Showers",
    81: "Moderate Rain Showers",
    82: "Heavy Rain Showers",
    85: "Slight Snow Showers",
    86: "Heavy Snow Showers",
    95: "Light Thunderstorm",
    96: "Thunderstorm",
    99: "Heavy Thunderstorm",
};

export const resolveWeatherCode = (code) => weatherCodes[code] || null;

export const resolveWeatherCodeName = (code) => weatherNames[code] || null;


