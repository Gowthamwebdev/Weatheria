import React, { useEffect, useState } from 'react';
import Process from './process';
// import clearIcon from './clear.png';
// 
// export const clearIcon = require('./clear.png');

export const WeatherDetails = () => {
  const [inputVal, setInputVal] = useState('Erode');
  const [cityname, setCityName] = useState('');
  const [lat, setLat] = useState('latitude');
  const [lon, setLong] = useState('longitude');
  const [weather, setWeather] = useState();
  const [icon, setIcon] = useState('snow.svg');
  const [temp, setTemp] = useState('0');
  const [humidity, setHumidity] = useState('0');
  const [loading, setLoading] = useState(false);
  const [cityNotFound, setCityNotFound] = useState(false);
  // let api_key = "Paste_your_api_key_here!";
  let api_key = "c66198ee6c4217fa48e59ea3acdec44f";

  // clear.png




  const search = async () => {
  handleCity();
  setInputVal('');
    setLoading(true);

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${api_key}`

  try{
  let res  = await fetch(url);
  let data = await res.json();
  console.log(data);
  if(data.cod === "404"){
    console.error("City not found")
    setCityNotFound(true);
    setLoading(false);
    return;
  }

  setCityName(data.name);
  setLong(data.coord.lon);
  setLat(data.coord.lat);
  setHumidity(data.main.humidity);
  setWeather(data.weather[0].main);
  setIcon(`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);

  }
  catch(error){
    console.error("An error occured: ",error.message);
  }
  finally{
    setLoading(false);
    inputVal == "";
  }
}
  function handleCity() {
    setCityName(inputVal);
    console.log(cityname);
    
    // setWeather('Sunny');
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      search();
    }
  };

  useEffect (function () {
    search();
  },[]);

  return (
    <div className="weather-container">
      <div className="wrapper-container">
        <div className="input-container">
          <h3>Enter city name:</h3>
          <div className="input-row">
            <input
              type="text"
              placeholder="Enter city name"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button className="search-button" onClick={search}>
              <span className="material-icons">search</span>
            </button>
          </div>
        </div>


        <div className="data-container">
        {cityNotFound && <p>City not found. Please try again.</p>}
          
            <Process
              cityname={cityname}
              weather={weather}
              icon={icon}
              temp={temp}
              lat={lat}
              lon={lon}
              humidity={humidity}
            />
          {/* )} */}
        </div>
      </div>
    </div>
  );
};
