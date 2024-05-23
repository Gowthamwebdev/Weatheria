import React from 'react';

const Process = ({ cityname, weather, icon, temp, lat, lon, humidity }) => {
  return (
    <div className='data-container'>
      {cityname && <p className="city-name">{cityname}</p>}
      {weather && <p>{weather}</p>}
      {icon && <img className='weather-icon' src={icon} alt={weather} />}
      <div className="temp">{temp}°C</div>
      <div className="lat">Latitude: {lat}</div>
      <div className="lon">Longitude: {lon}</div>
      <div className="humidity">Humidity: {humidity}%</div>
    </div>
  );
};

export default Process;
