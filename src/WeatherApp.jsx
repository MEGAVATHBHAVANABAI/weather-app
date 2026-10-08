import { useState } from "react";
import SearchBox from "./components/SearchBox";
import InfoBox from "./components/InfoBox";
import "./app.css";
function WeatherApp() {
const [weatherInfo, setWeatherInfo] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
const getWeatherInfo = async (city) => {
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
if (!API_KEY) {
setError("Weather API key is missing.");
return;
}
setLoading(true);
setError("");
setWeatherInfo(null);
try {
const URL = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
city
)}&appid=${API_KEY}&units=metric`;
const response = await fetch(URL);
const data = await response.json();
if (!response.ok) {
throw new Error(
data.message || "Unable to fetch weather information."
);
}
setWeatherInfo(data);
} catch (err) {
setError(
err.message === "city not found"
? "City not found. Please enter a valid city name."
: err.message || "Something went wrong. Please try again."
);
setWeatherInfo(null);
} finally {
setLoading(false);
}
};
return (
<main className="weather-app">
<section className="weather-container">
<div className="weather-header">
<h1>Weather Application</h1>
<p>Search for a city and get the current weather information.</p>
</div>
<SearchBox onSearch={getWeatherInfo}
loading={loading}/>
{error && (
<div className="error-message">
{error}
</div>
)}
{loading && (
<div className="loading-message">
Loading weather information...
</div>
)}
<InfoBox weatherInfo={weatherInfo} />
</section>
</main>
);
}
export default WeatherApp;