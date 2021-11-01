import { useSelector, useDispatch } from 'react-redux';
import { currentWeather, loadingStatus, errorStatus, fetchWeather } from './weatherSlice';
import { useEffect } from 'react';
import './weather.css'

function Weather() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchWeather());
    }, [dispatch]);

    const weather = useSelector(currentWeather);
    console.log(weather)

    const loading = useSelector(loadingStatus);
    const error = useSelector(errorStatus);


 if(loading){
        return (
            <section className="weather">
                <p>Loading weather data</p>
            </section>
        );
    }else if(error){
        return (
            <section className="weather">
                <p>Error! {error.message}</p>
            </section>
        );
    }else{
        return (
            <section className="weather">
                <img className="weather-icon" src={weather.icon} alt="weatherIcon" />  
                <div>
                    <h2>{weather.temperature}°C</h2>
                    <p>{weather.description}</p>
                </div>
            </section>
        )
    }
}


export default Weather;