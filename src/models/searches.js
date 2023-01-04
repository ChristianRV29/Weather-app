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

      console.log(data?.features);
    } catch (err) {
      console.log(
        "🚀 ~ file: searches.js:11 ~ Search ~ searchCity ~ err",
        err?.message || err
      );
    }
  }
}

module.exports = Searches;
