import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
function SearchBox({ onSearch, loading }) {
const [city, setCity] = useState("");
const [error, setError] = useState("");
const handleSubmit = (event) => {
event.preventDefault();
const trimmedCity = city.trim();
if (!trimmedCity) {
setError("Please enter a city name.");
return;
}
if (trimmedCity.length < 2) {
setError("Please enter a valid city name.");
return;
}
setError("");
onSearch(trimmedCity);
};
return (
<Box component="form" onSubmit={handleSubmit} className="search-box">
<TextField label="Enter City" variant="outlined"
 value={city}
 onChange={(event) => {
setCity(event.target.value);
setError("");
}}
error={Boolean(error)}
helperText={error}
fullWidth
/>
<Button type="submit" variant="contained"size="large"
disabled={loading}
className="search-button"
>
{loading ? "Searching..." : "Search"}
</Button>
</Box>
);
}
export default SearchBox;