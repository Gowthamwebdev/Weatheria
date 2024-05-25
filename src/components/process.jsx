import React from 'react';

const Process = ({ cityname, weather, icon, temp, lat, lon, humidity,wind,country }) => {
  return (
    <>
    <div className='data-container'>
      {cityname && <p className="city-name">{cityname}</p>}
      <p className='country'>' {country} '</p>
      <div className="temp">{temp}°C</div>
      {icon && <img className='weather-icon' src={icon} alt={weather} />}

      <div className="coord-col">
      <div className="lat">Latitude: {lat}</div>
      <div className="lon">Longitude: {lon}</div>
      </div>
      

      <div className="img-container">

      <div className="wind">Wind Speed : {wind}
      <img className='weather-icon' src="wind.png" alt="" />
      </div>

      <div className="humidity">Humidity: {humidity}%
      <img src="humidity.png" className='weather-icon' alt="" />
      </div>
      
      </div>
    </div>
    </>
  );
};

export default Process;
