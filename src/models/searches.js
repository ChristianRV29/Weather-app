const { mapboxAPI, openwatherAPI } = require("./../api");

class Searches {
  constructor() {}

  async searchCity(cityName = "") {
    try {
      const { data } = await mapboxAPI.get(`/${cityName}.json`, {
        params: {
          access_token: process.env.MAPBOX_TOKEN,
          language: "en",
          limit: 5,
        },
      });

      return data.features.map((it) => ({
        id: it.id,
        latitude: it.center[1],
        longitude: it.center[0],
        name: it.place_name,
      }));
    } catch (err) {
      console.log(
        "🚀 ~ file: searches.js:11 ~ Search ~ searchCity ~ err",
        err?.message || err
      );
    }
  }

  async searchCityWeather(city) {
    try {
      const { latitude, longitude } = city;

      const { data } = await openwatherAPI.get("/weather", {
        params: {
          lat: latitude,
          lon: longitude,
          appid: process.env.OPENWATHER_KEY,
        },
      });

      console.log(data);

      return data;
    } catch (err) {
      console.log(
        "🚀 ~ file: searches.js:44 ~ Searches ~ searchCityWeather ~ err",
        err?.message || err
      );
    }
  }
}

module.exports = Searches;
