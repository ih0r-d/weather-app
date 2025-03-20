import Image from "./Image.tsx";
import processedImages from "../utils/imageLoader.ts";

interface Props {
    humidity: number;
    windSpeed: number;
    temperature: number;
    location: string;
    icon: string;

}

const DetailsView = ({humidity, windSpeed, location,temperature,icon}: Props) => {
    return (
        <>
            <Image src={icon} alt="" className="weather-icon"/>
            <p className="temperature">{temperature}&deg;C</p>
            <p className="location">{location}</p>
            <div className="weather-data">
                <div className="col">
                    <img src={processedImages["humidity"]} alt=""/>
                    <p>{humidity} %</p>
                    <span>Humidity</span>
                </div>
                <div className="col">
                    <img src={processedImages["wind"]} alt=""/>
                    <p>{windSpeed} Km/h</p>
                    <span>Wind speed</span>
                </div>
            </div>
        </>
    )

}
export default DetailsView;
