import processedImages from "../utils/imageLoader";
import './Weather.css'
import SearchBox from "./SearchBox.tsx";
import DetailsView from "./DetailsView.tsx";

const Weather = () => {
    return (
        <div className="weather">
            <SearchBox placeholder="Search"
                       boxClassName="search-box"
                       imgSrc={processedImages["search"]}/>

            <DetailsView currentWeatherSrc={processedImages["clear"]}
                         temperature='16'
                         location='Lviv'/>
        </div>
    )
}

export default Weather
