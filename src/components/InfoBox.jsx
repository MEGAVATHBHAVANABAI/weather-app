import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
function InfoBox({ weatherInfo }) {
if (!weatherInfo) {
return null;
}
const weather = weatherInfo.weather?.[0];
const main = weatherInfo.main;
const wind = weatherInfo.wind;
const iconUrl = weather?.icon
? `https://openweathermap.org/img/wn/${weather.icon}@2x.png`: "";
return (
<Card className="weather-card">
<CardContent>
<Typography variant="h4" component="h2" className="city-name">
{weatherInfo.name}, {weatherInfo.sys?.country}
</Typography>
<Box className="weather-main">
{iconUrl && (<img src={iconUrl} alt={weather?.description || "Weather"} className="weather-icon"/>
)}
<Typography variant="h2" className="temperature">
{Math.round(main?.temp)}°C
</Typography>
</Box>
<Typography variant="h6" className="weather-description">
{weather?.description}
</Typography>
<Box className="weather-details">
<Box className="detail-item">
<span>Feels Like</span>
<strong>{Math.round(main?.feels_like)}°C</strong>
</Box>
<Box className="detail-item">
<span>Humidity</span>
<strong>{main?.humidity}%</strong>
</Box>
<Box className="detail-item">
<span>Wind</span>
<strong>{wind?.speed} m/s</strong>
</Box>
<Box className="detail-item">
<span>Min Temperature</span>
<strong>{Math.round(main?.temp_min)}°C</strong>
</Box>
<Box className="detail-item">
<span>Max Temperature</span>
<strong>{Math.round(main?.temp_max)}°C</strong>
</Box>
<Box className="detail-item">
<span>Pressure</span>
<strong>{main?.pressure} hPa</strong>
</Box>
</Box>
</CardContent>
</Card>
);
}
export default InfoBox;