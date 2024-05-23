import React from 'react';

const Process = ({ cityname, weather, icon, temp, lat, lon, humidity,wind }) => {
  return (
    <>
    <div className='data-container'>
      {cityname && <p className="city-name">{cityname}</p>}
      {/* {weather && <p>{weather}</p>} */}
      {icon && <img className='weather-icon' src={icon} alt={weather} />}

      <div className="cords">
      <div className="coord-col">
      <div className="lat">Latitude: {lat}</div>
      <div className="lon">Longitude: {lon}</div>
      </div>


      <div className="weather-col">
      <div className="temp">{temp}°C</div>
      {/* <img className='weather-icon' src="wind.png" alt="" /> */}
      
      </div>
      </div>

      <div className="img-container">

      <div className="wind">Wind: {wind}
      <img className='weather-icon' src="wind.png" alt="" />
      </div>

      <div className="humidity">Humidity: {humidity}%
      {/* <img src="clear.png" className='weather-icon' alt="" /> */}
      </div>
      
      </div>
    </div>
    </>
  );
};

export default Process;
