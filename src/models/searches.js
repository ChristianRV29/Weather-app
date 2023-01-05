const mapboxAPI = require("./../api");

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
}

module.exports = Searches;
