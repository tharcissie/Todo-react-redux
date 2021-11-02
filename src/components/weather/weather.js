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
            <div>
                <p>Loading weather data...</p>
            </div>
        );
    }else if(error){
        return (
            <div>
                <p>Error! {error.message}</p>
            </div>
        );
    }else{
        return (
            <div>
                <img src={weather.icon} alt="weatherIcon" />  
                <div className="text-light">
                    <h4>{weather.temperature}°C</h4>
                </div>
            </div>
        )
    }
}


export default Weather;