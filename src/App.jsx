import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import LoadingSpinner from './components/LoadingSpinner';
import './App.css';

const API_KEY = 'f033aa8b9e2034974937201d2e9b16f3';

function App() {
	const [weatherData, setWeatherData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchWeatherData = async (city) => {
		setLoading(true);
		setError(null);
		try {
			const response = await axios.get(
				`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`
			);
			if (response.data.error) {
				throw new Error(response.data.error.info);
			}
			setWeatherData(response.data);
		} catch (err) {
			setError(err.message);
			setWeatherData(null);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="container">
			<h1 className="app-title">Weather App</h1>
			<SearchBar onSearch={fetchWeatherData} />
			{loading && <LoadingSpinner />}
			{error && <p className="error-message">{error}</p>}
			{weatherData && <WeatherCard weatherData={weatherData} />}
		</div>
	);
}

export default App;
