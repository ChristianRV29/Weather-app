const mapboxAPI = require("./../api");

class Searches {
  constructor() {}

  async searchCity(cityName = "") {
    try {
      const { data } = await mapboxAPI.get(`/${cityName}.json`, {
        params: {
          access_token:
            "pk.eyJ1IjoiY2hyaXN0aWFucnYyOSIsImEiOiJjbGNpNDEzYmg1ZG80M3FwN2RjaGV6OHFxIn0.e2XElgXDHSt9uZs6u4tr_w",
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
