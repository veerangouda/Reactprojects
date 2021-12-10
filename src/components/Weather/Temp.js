// api.openweathermap.org/data/2.5/weather?q=hubli&appid=6885c2f046b0ce31c44dbdb3da74e14c

import React, {useState, useEffect} from 'react'
import Weathercard from './Weathercard'
import "./style.css"

const Temp = () => {
    const [searchValue, setsearchValue] = useState("pune")
    const [tempInfo, settempInfo] = useState({})
    const getWeatherInfo = async ()=>{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=
            ${searchValue}&units=metric&appid=6885c2f046b0ce31c44dbdb3da74e14c`
            const res = await fetch(url);
            const data = await res.json();

            const {temp, humidity, pressure} = data.main;
            const {main: weathermood} = data.weather[0];
            const {name}  = data;
            const {speed} = data.wind;
            const {country, sunset} = data.sys;

            const myNewWeatherInfo = {
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset,    
            };

            settempInfo(myNewWeatherInfo)

        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
       getWeatherInfo()
    }, [])

    return (
        <div>
            <div className="wrap">
                <div className="search">
                    <input type="search"
                        placeholder="Search..."
                        autoFocus
                        id="search"
                        className="searchTerm" 
                        value ={searchValue}
                        onChange = {(e)=>setsearchValue(e.target.value )} />
                    <button className="searchButton" type="button" onClick = {getWeatherInfo} >Search</button>
                </div>
            </div>
            {/* temp card */}

          < Weathercard {...tempInfo} />
          
        </div>
    )
}

export default Temp
