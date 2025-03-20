import processedImages from "../utils/imageLoader";
import './Weather.css'
import SearchBox from "./SearchBox.tsx";
import DetailsView from "./DetailsView.tsx";
import { useState } from "react";

interface WeatherData {
    humidity: number;
    windSpeed: number;
    temperature: number;
    location: string;
    icon: string;
}

const Weather = () => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

    const iconByCode = async (code: string) => {
        return `https://openweathermap.org/img/wn/${code}.png`;
    };

    const searchByCity = async (city: string) => {
        if (!city){
            alert("Please, enter city name!");
            return;
        }

        try {
            const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
            const response = await fetch(API_URL);
            const data = await response.json();
            if (!response.ok){
                alert(data.message);
                return;
            }
            console.log(data);

            const icon = await iconByCode(data.weather[0].icon);

            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                location: data.name,
                icon: icon
            });
        } catch (e) {
            setWeatherData(null);
            console.log("Error during fetch a data." + e);
        }
    };

    return (
        <div className="weather">
            <SearchBox
                placeholder="Search"
                boxClassName="search-box"
                imgSrc={processedImages["search"]}
                onClick={searchByCity}
            />

            {weatherData && (
                <DetailsView
                    icon={weatherData.icon}
                    temperature={weatherData.temperature}
                    humidity={weatherData.humidity}
                    windSpeed={weatherData.windSpeed}
                    location={weatherData.location}
                    onClick={() => searchByCity(weatherData.location)}
                />
            )}
        </div>
    );
};

export default Weather;
