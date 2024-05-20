import { useState } from 'react';
import './App.css';


function App() {
  const [inputVal, setInputVal] = useState('');
  const [cityname, setCityName] = useState('');

  let Displaycity

  function displayData() {
    alert(inputVal);
  }

  return (
    <>
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
              />
              <button className="search-button" onClick={displayData}>
                <span className="material-icons">search</span>
              </button>
            </div>
          </div>

          <div className="data-container">

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
