const fs = require("fs");
const colors = require("colors");

const path = "./src/data/searches.json";

const storeData = async (data) => {
  try {
    await fs.writeFileSync(path, data);
  } catch (err) {
    console.log(
      colors.red(
        "It just happened an issue trying to save the task",
        err?.message || err
      )
    );
  }
};

const readData = () =>
  new Promise((resolve, reject) => {
    if (fs.existsSync(path)) {
      const data = fs.readFileSync(path, { encoding: "utf-8" });
      resolve({ data, message: "The data was gotten" });
    } else {
      reject({ data: null, message: "It doesn't exist data yet" });
    }
  });

module.exports = {
  readData,
  storeData,
};
