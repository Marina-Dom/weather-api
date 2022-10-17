import React, { useEffect, useState } from 'react';
import { getWeather} from '../services/ForcastService';
import type { Period } from '../model/Weather';
import './WeatherForcast.css';


export function WeatherForecast(){
    const [periods, setPeriods] = useState<Period[]>([]);

    useEffect(() => {
        getWeather().then((response) => {
          const { data } = response;
          setPeriods(data.properties.periods);
        });
    }, []);  //Empty Dependancy Array -only called one time

    return (
    <table className='WeatherForecast'>
        {/* <th>Time</th>
        <th>Temperature</th>
        <th>Wind Speed</th>
        <th>Visual</th>
        <th>Details</th> */}
        {periods.map((period) => (
            <tr>
                <th>
                    <h2>{period.name}</h2>
                </th>
                <td className='temp'>                
                    <p>Temperature: {period.temperature + period.temperatureUnit}</p>
                </td>
                <td className='wind'>
                    {period.windSpeed} to the {period.windDirection}
                </td>
                <td className='picture'>
                    <img src={period.icon} alt={period.shortForecast}/>
                </td>
                <td className='weatherInfo'>
                    <p>{period.detailedForecast}</p>
                </td>
            </tr>
        ))}
    </table>
    );
}

