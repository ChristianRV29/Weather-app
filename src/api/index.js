const axios = require("axios");

const mapboxAPI = axios.create({
  baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places",
});

module.exports = mapboxAPI;
