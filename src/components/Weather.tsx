import processedImages from "../utils/imageLoader";
import './Weather.css'
import SearchBox from "./SearchBox.tsx";
import DetailsView from "./DetailsView.tsx";
import {useEffect, useState} from "react";
interface WeatherData {
    humidity: number;
    windSpeed: number;
    temperature: number;
    location: string;
    icon: string;
}

const Weather = () => {

    const [weatherData,setWeatherData] = useState<WeatherData | null>(null)

    const iconByCode= async (code:string)=> {
        const api = `https://openweathermap.org/img/wn/${code}.png`
        const response = await fetch(api)
        return response.url
    }

    const searchByCity = async (city: string) => {
        try {
            const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
            const response = await fetch(API_URL);
            const data = await response.json();
            console.log(data);

            const icon = await iconByCode(data.weather[0].icon);
            console.log('icon')
            console.log(icon)

            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                location: data.name,
                icon: icon
            });
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        searchByCity("Lviv").then(r => console.log(r));
    }, []);
    return (
        <div className="weather">
            <SearchBox placeholder="Search"
                       boxClassName="search-box"
                       imgSrc={processedImages["search"]}/>

            {weatherData && (
                <DetailsView icon={weatherData.icon}
                             temperature={weatherData.temperature}
                             humidity={weatherData.humidity}
                             windSpeed={weatherData.windSpeed}
                             location={weatherData.location}/>
            )}
        </div>
    )
}

export default Weather
