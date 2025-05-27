// import React, { useState } from 'react';
// import axios from 'axios';
// import SearchBar from './components/SearchBar';
// import WeatherCard from './components/WeatherCard';
// import LoadingSpinner from './components/LoadingSpinner';
// import './App.css';

// const API_KEY = 'f033aa8b9e2034974937201d2e9b16f3';

// function App() {
// 	const [weatherData, setWeatherData] = useState(null);
// 	const [loading, setLoading] = useState(false);
// 	const [error, setError] = useState(null);

// 	const fetchWeatherData = async (city) => {
// 		setLoading(true);
// 		setError(null);
// 		try {
// 			const response = await axios.get(
// 				`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`
// 			);
// 			if (response.data.error) {
// 				throw new Error(response.data.error.info);
// 			}
// 			setWeatherData(response.data);
// 		} catch (err) {
// 			setError(err.message);
// 			setWeatherData(null);
// 		} finally {
// 			setLoading(false);
// 		}
// 	};

// 	return (
// 		<div className="container">
// 			<h1 className="app-title">Weather App</h1>
// 			<SearchBar onSearch={fetchWeatherData} />
// 			{loading && <LoadingSpinner />}
// 			{error && <p className="error-message">{error}</p>}
// 			{weatherData && <WeatherCard weatherData={weatherData} />}
// 		</div>
// 	);
// }

// export default App;




// import React, { useState } from 'react';
// import axios from 'axios';
// import SearchBar from './components/SearchBar';
// import WeatherCard from './components/WeatherCard';
// import LoadingSpinner from './components/LoadingSpinner';
// import './App.css';

// const API_KEY = '028648a1d38db12fde000fd0d44b9c9d';

// function App() {
// 	const [weatherData, setWeatherData] = useState(null);
// 	const [loading, setLoading] = useState(false);
// 	const [error, setError] = useState(null);

// 	const fetchWeatherData = async (city) => {
// 		setLoading(true);
// 		setError(null);
// 		try {
// 			// First get coordinates for the city
// 			const geoResponse = await axios.get(
// 				`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
// 			);

// 			if (!geoResponse.data || geoResponse.data.length === 0) {
// 				throw new Error('City not found');
// 			}

// 			const { lat, lon } = geoResponse.data[0];

// 			// Then get weather data using coordinates
// 			const weatherResponse = await axios.get(
// 				`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=metric&appid=${API_KEY}`
// 			);

// 			// Combine location and weather data
// 			const combinedData = {
// 				location: {
// 					name: city,
// 					country: geoResponse.data[0]?.country,
// 					lat,
// 					lon
// 				},
// 				current: weatherResponse.data.current,
// 				daily: weatherResponse.data.daily.slice(0, 5) // Next 5 days forecast
// 			};

// 			setWeatherData(combinedData);
// 		} catch (err) {
// 			setError(err.message);
// 			setWeatherData(null);
// 		} finally {
// 			setLoading(false);
// 		}
// 	};

// 	return (
// 		<div className="container">
// 			<h1 className="app-title">Weather App</h1>
// 			<SearchBar onSearch={fetchWeatherData} />
// 			{loading && <LoadingSpinner />}
// 			{error && <p className="error-message">{error}</p>}
// 			{weatherData && <WeatherCard weatherData={weatherData} />}
// 		</div>
// 	);
// }

// export default App;


// import React, { useState } from 'react';
// import axios from 'axios';
// import SearchBar from './components/SearchBar';
// import WeatherCard from './components/WeatherCard';
// import LoadingSpinner from './components/LoadingSpinner';
// import './App.css';

// const API_KEY = 'bb9af13e44ebe7734dba8c84d680ba20';

// function App() {
// 	const [weatherData, setWeatherData] = useState(null);
// 	const [loading, setLoading] = useState(false);
// 	const [error, setError] = useState(null);

// 	const fetchWeatherData = async (city) => {
// 		setLoading(true);
// 		setError(null);
// 		try {
// 			// First get coordinates for the city
// 			const geoResponse = await axios.get(
// 				`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
// 			);

// 			if (!geoResponse.data || geoResponse.data.length === 0) {
// 				throw new Error('City not found. Please try another location.');
// 			}

// 			const { lat, lon } = geoResponse.data[0];

// 			// Then get weather data using coordinates
// 			const weatherResponse = await axios.get(
// 				`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=metric&appid=${API_KEY}`
// 			);

// 			// Check for API error responses
// 			if (weatherResponse.data.cod && weatherResponse.data.cod !== 200) {
// 				throw new Error(weatherResponse.data.message || 'Weather API error');
// 			}

// 			// Combine location and weather data
// 			const combinedData = {
// 				location: {
// 					name: city,
// 					country: geoResponse.data[0]?.country,
// 					lat,
// 					lon
// 				},
// 				current: weatherResponse.data.current,
// 				daily: weatherResponse.data.daily.slice(0, 5) // Next 5 days forecast
// 			};

// 			setWeatherData(combinedData);
// 		} catch (err) {
// 			let errorMessage = err.message;

// 			// Handle specific API error cases
// 			if (err.response) {
// 				if (err.response.status === 401) {
// 					errorMessage = 'Invalid API key. Please check your OpenWeatherMap API key.';
// 				} else if (err.response.status === 429) {
// 					errorMessage = 'API rate limit exceeded. Please wait a minute and try again.';
// 				} else if (err.response.data && err.response.data.message) {
// 					errorMessage = err.response.data.message;
// 				}
// 			}

// 			setError(errorMessage);
// 			setWeatherData(null);
// 		} finally {
// 			setLoading(false);
// 		}
// 	};

// 	return (
// 		<div className="container">
// 			<h1 className="app-title">Weather App</h1>
// 			<SearchBar onSearch={fetchWeatherData} />
// 			{loading && <LoadingSpinner />}
// 			{error && (
// 				<div className="error-message">
// 					<p>{error}</p>
// 					<p>Need help? Try these steps:</p>
// 					<ul>
// 						<li>Check your internet connection</li>
// 						<li>Verify the city name is correct</li>
// 						<li>Wait a few minutes and try again</li>
// 					</ul>
// 				</div>
// 			)}
// 			{weatherData && <WeatherCard weatherData={weatherData} />}
// 		</div>
// 	);
// }

// export default App;






import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import LoadingSpinner from './components/LoadingSpinner';
import './App.css';
import './styles.css';

const API_KEY = 'bb9af13e44ebe7734dba8c84d680ba20';

function App() {
	const [weatherData, setWeatherData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchWeatherData = async (city) => {
		setLoading(true);
		setError(null);
		try {
			// First get coordinates for the city
			const geoResponse = await axios.get(
				`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
			);

			if (!geoResponse.data || geoResponse.data.length === 0) {
				throw new Error('City not found. Please try another location.');
			}

			const { lat, lon } = geoResponse.data[0];

			// Get current weather data
			const currentWeatherResponse = await axios.get(
				`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
			);

			// Get 5-day forecast (separate API call)
			const forecastResponse = await axios.get(
				`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
			);

			// Process forecast data to get daily values
			const dailyForecast = processForecastData(forecastResponse.data.list);

			// Combine all data
			const combinedData = {
				location: {
					name: currentWeatherResponse.data.name,
					country: currentWeatherResponse.data.sys?.country,
					lat,
					lon
				},
				current: {
					...currentWeatherResponse.data.main,
					weather: currentWeatherResponse.data.weather[0],
					wind: currentWeatherResponse.data.wind,
					dt: currentWeatherResponse.data.dt,
					sys: currentWeatherResponse.data.sys
				},
				daily: dailyForecast
			};

			setWeatherData(combinedData);
		} catch (err) {
			let errorMessage = err.message;

			if (err.response) {
				if (err.response.status === 401) {
					errorMessage = 'Invalid API key. Please check your OpenWeatherMap API key.';
				} else if (err.response.status === 429) {
					errorMessage = 'API rate limit exceeded. Please wait a minute and try again.';
				} else if (err.response.data && err.response.data.message) {
					errorMessage = err.response.data.message;
				}
			}

			setError(errorMessage);
			setWeatherData(null);
		} finally {
			setLoading(false);
		}
	};

	// Helper function to process 3-hour forecast into daily forecast
	const processForecastData = (forecastList) => {
		const dailyData = {};

		forecastList.forEach(item => {
			const date = new Date(item.dt * 1000).toLocaleDateString();
			if (!dailyData[date]) {
				dailyData[date] = {
					temp_min: item.main.temp_min,
					temp_max: item.main.temp_max,
					weather: item.weather[0],
					dt: item.dt
				};
			} else {
				if (item.main.temp_min < dailyData[date].temp_min) {
					dailyData[date].temp_min = item.main.temp_min;
				}
				if (item.main.temp_max > dailyData[date].temp_max) {
					dailyData[date].temp_max = item.main.temp_max;
				}
			}
		});

		return Object.values(dailyData).slice(0, 5); // Return next 5 days
	};

	return (
		<div className="container">
			<h1 className="app-title">Weather App</h1>
			<SearchBar onSearch={fetchWeatherData} />
			{loading && <LoadingSpinner />}
			{error && (
				<div className="error-message">
					<p>{error}</p>
					<p>Need help? Try these steps:</p>
					<ul>
						<li>Check your internet connection</li>
						<li>Verify the city name is correct</li>
						<li>Wait a few minutes and try again</li>
					</ul>
				</div>
			)}
			{weatherData && <WeatherCard weatherData={weatherData} />}
		</div>
	);
}

export default App;
