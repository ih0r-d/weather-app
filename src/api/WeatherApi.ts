const API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = import.meta.env.VITE_APP_ID;

export const getWeatherByCity = async (city: string) => {
    if (!city) {
        throw new Error("Please, enter city name!");
    }

    try {
        const response = await fetch(`${API_BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Failed to fetch weather data");
        }

        return {
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            temperature: Math.floor(data.main.temp),
            location: data.name,
            icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
        };
    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw error;
    }
};
