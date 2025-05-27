import React from "react";

const WeatherCard = ({ weatherData }) => {
	if (!weatherData) return null;

	return (
		<div className="weather-card">
			<h2 className="weather-location">
				{weatherData.location.name}, {weatherData.location.country}
			</h2>
			<div className="weather-main">
				<div className="weather-temp">
					<img
						src={weatherData.current.weather_icons[0]}
						alt={weatherData.current.weather_descriptions[0]}
						className="weather-icon"
					/>
					<span className="temp">
						{weatherData.current.temperature}°C
					</span>
				</div>
				<div className="weather-details">
					<p>
						<strong>Feels like:</strong>{" "}
						{weatherData.current.feelslike}°C
					</p>
					<p>
						<strong>Humidity:</strong>{" "}
						{weatherData.current.humidity}%
					</p>
					<p>
						<strong>Wind:</strong> {weatherData.current.wind_speed}{" "}
						km/h, {weatherData.current.wind_dir}
					</p>
					<p>
						<strong>Pressure:</strong>{" "}
						{weatherData.current.pressure} mb
					</p>
					<p>
						<strong>Precipitation:</strong>{" "}
						{weatherData.current.precip} mm
					</p>
					<p>
						<strong>UV Index:</strong>{" "}
						{weatherData.current.uv_index}
					</p>
					<p>
						<strong>Visibility:</strong>{" "}
						{weatherData.current.visibility} km
					</p>
				</div>
			</div>
			<p className="weather-description">
				{weatherData.current.weather_descriptions[0]}
			</p>
			<p className="weather-time">
				Local time: {weatherData.location.localtime}
			</p>
		</div>
	);
};

export default WeatherCard;
