import processedImages from "../utils/imageLoader";
import "./Weather.css";
import SearchBox from "./SearchBox.tsx";
import DetailsView from "./DetailsView.tsx";
import { useState, useCallback, useRef } from "react";
import { getWeatherByCity } from "../api/WeatherApi.ts";

interface WeatherData {
    humidity: number;
    windSpeed: number;
    temperature: number;
    location: string;
    icon: string;
}

const Weather = () => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const isFetchingRef = useRef(false); // Запобігання зайвим запитам

    const searchByCity = useCallback(async (city: string) => {
        if (isFetchingRef.current) return; // Уникнення подвійних запитів
        isFetchingRef.current = true;

        try {
            const weather = await getWeatherByCity(city);
            setWeatherData(weather);
        } catch (error) {
            alert("Error during fetch a data." + error);
            setWeatherData(null);
        } finally {
            isFetchingRef.current = false;
        }
    }, []);

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
