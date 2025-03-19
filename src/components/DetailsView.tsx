import Image from "./Image.tsx";
import processedImages from "../utils/imageLoader.ts";

interface Props {
    currentWeatherSrc: string;
    temperature: string;
    location: string;
    className?: string

}

const DetailsView = ({currentWeatherSrc, temperature, location}: Props) => {
    return (
        <>
            <Image src={currentWeatherSrc} alt="" className="weather-icon"/>
            <p className="temperature">{temperature}&deg;C</p>
            <p className="location">{location}</p>
            <div className="weather-data">
                <div className="col">
                    <img src={processedImages["humidity"]} alt=""/>
                    <p>91 %</p>
                    <span>Humidity</span>
                </div>
                <div className="col">
                    <img src={processedImages["wind"]} alt=""/>
                    <p>3.6 Km/h</p>
                    <span>Wind speed</span>
                </div>
            </div>
        </>
    )

}
export default DetailsView;
