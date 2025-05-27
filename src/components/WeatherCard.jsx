// import React from "react";

// const WeatherCard = ({ weatherData }) => {
// 	if (!weatherData) return null;

// 	return (
// 		<div className="weather-card">
// 			<h2 className="weather-location">
// 				{weatherData.location.name}, {weatherData.location.country}
// 			</h2>
// 			<div className="weather-main">
// 				<div className="weather-temp">
// 					<img
// 						src={weatherData.current.weather_icons[0]}
// 						alt={weatherData.current.weather_descriptions[0]}
// 						className="weather-icon"
// 					/>
// 					<span className="temp">
// 						{weatherData.current.temperature}°C
// 					</span>
// 				</div>
// 				<div className="weather-details">
// 					<p>
// 						<strong>Feels like:</strong>{" "}
// 						{weatherData.current.feelslike}°C
// 					</p>
// 					<p>
// 						<strong>Humidity:</strong>{" "}
// 						{weatherData.current.humidity}%
// 					</p>
// 					<p>
// 						<strong>Wind:</strong> {weatherData.current.wind_speed}{" "}
// 						km/h, {weatherData.current.wind_dir}
// 					</p>
// 					<p>
// 						<strong>Pressure:</strong>{" "}
// 						{weatherData.current.pressure} mb
// 					</p>
// 					<p>
// 						<strong>Precipitation:</strong>{" "}
// 						{weatherData.current.precip} mm
// 					</p>
// 					<p>
// 						<strong>UV Index:</strong>{" "}
// 						{weatherData.current.uv_index}
// 					</p>
// 					<p>
// 						<strong>Visibility:</strong>{" "}
// 						{weatherData.current.visibility} km
// 					</p>
// 				</div>
// 			</div>
// 			<p className="weather-description">
// 				{weatherData.current.weather_descriptions[0]}
// 			</p>
// 			<p className="weather-time">
// 				Local time: {weatherData.location.localtime}
// 			</p>
// 		</div>
// 	);
// };

// export default WeatherCard;


// import React from 'react';

// const WeatherCard = ({ weatherData }) => {
// 	if (!weatherData) return null;

// 	// Convert Unix timestamp to local time
// 	const formatTime = (timestamp) => {
// 		return new Date(timestamp * 1000).toLocaleTimeString();
// 	};

// 	// Convert Unix timestamp to date string
// 	const formatDate = (timestamp) => {
// 		return new Date(timestamp * 1000).toLocaleDateString('en-US', {
// 			weekday: 'short',
// 			month: 'short',
// 			day: 'numeric'
// 		});
// 	};

// 	return (
// 		<div className="weather-card">
// 			<h2 className="weather-location">
// 				{weatherData.location.name}, {weatherData.location.country}
// 			</h2>
// 			<div className="weather-main">
// 				<div className="weather-temp">
// 					<img
// 						src={`https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`}
// 						alt={weatherData.current.weather[0].description}
// 						className="weather-icon"
// 					/>
// 					<div>
// 						<span className="temp">{Math.round(weatherData.current.temp)}°C</span>
// 						<p className="weather-description">
// 							{weatherData.current.weather[0].description}
// 						</p>
// 					</div>
// 				</div>
// 				<div className="weather-details">
// 					<p>
// 						<strong>Feels like:</strong> {Math.round(weatherData.current.feels_like)}°C
// 					</p>
// 					<p>
// 						<strong>Humidity:</strong> {weatherData.current.humidity}%
// 					</p>
// 					<p>
// 						<strong>Wind:</strong> {Math.round(weatherData.current.wind_speed * 3.6)} km/h
// 					</p>
// 					<p>
// 						<strong>Pressure:</strong> {weatherData.current.pressure} hPa
// 					</p>
// 					<p>
// 						<strong>Sunrise:</strong> {formatTime(weatherData.current.sunrise)}
// 					</p>
// 					<p>
// 						<strong>Sunset:</strong> {formatTime(weatherData.current.sunset)}
// 					</p>
// 					<p>
// 						<strong>UV Index:</strong> {weatherData.current.uvi}
// 					</p>
// 					<p>
// 						<strong>Visibility:</strong> {weatherData.current.visibility / 1000} km
// 					</p>
// 				</div>
// 			</div>

// 			<h3 className="forecast-title">5-Day Forecast</h3>
// 			<div className="forecast-container">
// 				{weatherData.daily.map((day, index) => (
// 					<div key={index} className="forecast-day">
// 						<p>{formatDate(day.dt)}</p>
// 						<img
// 							src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
// 							alt={day.weather[0].description}
// 						/>
// 						<p>{Math.round(day.temp.max)}° / {Math.round(day.temp.min)}°</p>
// 					</div>
// 				))}
// 			</div>
// 		</div>
// 	);
// };

// export default WeatherCard;





import React from 'react';

const WeatherCard = ({ weatherData }) => {
	if (!weatherData) return null;

	// Convert Unix timestamp to local time
	const formatTime = (timestamp) => {
		return new Date(timestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
	};

	// Convert Unix timestamp to date string
	const formatDate = (timestamp) => {
		return new Date(timestamp * 1000).toLocaleDateString('en-US', {
			weekday: 'short',
			month: 'short',
			day: 'numeric'
		});
	};

	return (
		<div className="weather-card">
			<h2 className="weather-location">
				{weatherData.location.name}, {weatherData.location.country}
			</h2>
			<div className="weather-main">
				<div className="weather-temp">
					<img
						src={`https://openweathermap.org/img/wn/${weatherData.current.weather.icon}@2x.png`}
						alt={weatherData.current.weather.description}
						className="weather-icon"
					/>
					<div>
						<span className="temp">{Math.round(weatherData.current.temp)}°C</span>
						<p className="weather-description">
							{weatherData.current.weather.description}
						</p>
					</div>
				</div>
				<div className="weather-details">
					<p>
						<strong>Feels like:</strong> {Math.round(weatherData.current.feels_like)}°C
					</p>
					<p>
						<strong>Humidity:</strong> {weatherData.current.humidity}%
					</p>
					<p>
						<strong>Wind:</strong> {Math.round(weatherData.current.wind.speed * 3.6)} km/h
					</p>
					<p>
						<strong>Pressure:</strong> {weatherData.current.pressure} hPa
					</p>
					{weatherData.current.sys && (
						<>
							<p>
								<strong>Sunrise:</strong> {formatTime(weatherData.current.sys.sunrise)}
							</p>
							<p>
								<strong>Sunset:</strong> {formatTime(weatherData.current.sys.sunset)}
							</p>
						</>
					)}
				</div>
			</div>

			{weatherData.daily && weatherData.daily.length > 0 && (
				<>
					<h3 className="forecast-title">5-Day Forecast</h3>
					<div className="forecast-container">
						{weatherData.daily.map((day, index) => (
							<div key={index} className="forecast-day">
								<p>{formatDate(day.dt)}</p>
								<img
									src={`https://openweathermap.org/img/wn/${day.weather.icon}.png`}
									alt={day.weather.description}
								/>
								<p>{Math.round(day.temp_max)}° / {Math.round(day.temp_min)}°</p>
							</div>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default WeatherCard;
