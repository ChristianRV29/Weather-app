const axios = require("axios");

const mapboxAPI = axios.create({
  baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places",
});

const openwatherAPI = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

module.exports = { mapboxAPI, openwatherAPI };
