import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-details';
import SearchForm from './search-form';


import '../styles/app.css';



const App = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({
    city: "",
    country: "",
  });

  useEffect(() => {
    axios.get('https://mcr-codes-weather.herokuapp.com/forecast')
      .then((res) => {
        setForecasts(res.data.forecasts);
        setLocation(res.data.location)
      }).catch((err) => {
        alert("Error");
      })
  }, []);

  const getCity = (city) => {
    const query = city.toLowerCase();


    axios
      .get(`https://mcr-codes-weather.herokuapp.com/forecast?city=${query}`)
      .then((res) => {
        setForecasts(res.data.forecasts);
        setLocation(res.data.location);
      })
      .catch((err) => {
        alert('Location not found');
      }, []);
  }

  const selectedForecast = forecasts.find(forecast => forecast.date === selectedDate);

  return (
    <div className="forecast">
      <LocationDetails
        city={location.city}
        country={location.country} />
      <SearchForm onCitySearch={getCity} />
      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={setSelectedDate} />
      {
        selectedForecast && <ForecastDetails forecasts={selectedForecast} />
      }
    </div>



  );
}


export default App;