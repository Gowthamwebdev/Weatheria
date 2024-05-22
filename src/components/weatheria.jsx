import React, { useEffect, useState } from 'react';

export const WeatherDetails = () => {
  const [inputVal, setInputVal] = useState('');
  const [cityname, setCityName] = useState('');
  const [lat, setLat] = useState('latitude');
  const [long, setLong] = useState('longitude');
  const [weather, setWeather] = useState('');
  const [icon, setIcon] = useState('snow.svg');
  const [temp, setTemp] = useState('0');
  const [humidity, setHumidity] = useState('0');
  const [loading, setLoading] = useState(false);
  const [cityNotFound, setCityNotFound] = useState(false);
  let api_key = "c66198ee6c4217fa48e59ea3acdec44f";


  const search = async () => {
  handleCity();

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
  setLong(data.coord.long);
  setLat(data.coord.lat);
  setTemp(data.main.temp);
  setHumidity(data.main.humidity);
  setIcon(data.weather.main);

  }
  catch(error){
    console.error("An error occured: ",error.message);
  }
  finally{
    setLoading(false);
  }
}

  function handleCity() {
    setCityName(inputVal);
    console.log(cityname);
    setWeather('Sunny');
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      search();
    }
  };

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

          {cityname && <p>City Name: {cityname}</p>}
          
            
              <p>{weather}</p>
              <img src={icon} alt="Sunny" />
              
            <div className="temp">
              {temp}*c
            </div>


            <div className="lat">{lat}</div>
            <div className="long">{long}</div>
            <div className="humidity">{humidity}</div>

          
        </div>
      </div>
    </div>
  );
};
