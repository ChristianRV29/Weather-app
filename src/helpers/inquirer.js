const inquirer = require("inquirer");
const colors = require("colors");

const {
  optsMenu,
  inputQuestion,
  pauseMessage,
  confirmMessage,
} = require("./../constants");

const showCityWeather = (cityName, weatherData) => {
  try {
    const title = `${cityName}'s weather`;
    const divider = `${"=".repeat(title.length).green}`;

    console.clear();
    console.log(divider);
    console.log(title.white);
    console.log(divider, "\n");
    console.log(`${"Description: ".cyan}${weatherData.description}`);
    console.log(`${"Latitude: ".cyan}${weatherData.latitude}`);
    console.log(`${"Longitude: ".cyan}${weatherData.longitude}`);
    console.log(`${"Max temp: ".cyan}${weatherData.max}`);
    console.log(`${"Min temp: ".cyan}${weatherData.min}`);
    console.log(`${"Current temp: ".cyan}${weatherData.temp}\n`);
  } catch (err) {
    console.log("🚀 ~ file: inquirer.js:27 ~ showCityWeather ~ err", err);
  }
};

const showPlacesAsOptions = async (places = []) => {
  try {
    const prompt = inquirer.createPromptModule();

    const choices = places.map((it, index) => ({
      value: it,
      name: `${colors.green(index + 1)}. ${it.name}`,
    }));

    choices.unshift({
      value: null,
      name: `${colors.green(0)}. Cancel`,
    });

    const { cityInfo } = await prompt({
      choices,
      message: "What place are you looking for?",
      name: "cityInfo",
      type: "list",
    });

    return cityInfo;
  } catch (err) {
    console.log(
      "🐞 ~ It just happened an error when trying to show the menu: ",
      err?.message || err
    );
  }
};

const showMenu = async () => {
  try {
    console.clear();

    console.log(colors.green("=================="));
    console.log(colors.green(" Enter an option ".white));
    console.log(colors.green("==================\n"));

    const prompt = inquirer.createPromptModule();
    const { option } = await prompt(optsMenu);

    return option;
  } catch (err) {
    console.log(
      "🐞 ~ It just happened an error when trying to show the menu: ",
      err?.message || err
    );
  }
};

const askCity = async () => {
  try {
    const prompt = inquirer.createPromptModule();
    const { city } = await prompt(inputQuestion);

    return city;
  } catch (err) {
    console.log(
      "🐞 ~ It just happened an error when trying to seach the city: ",
      err?.message || err
    );
  }
};

const doPause = async () => {
  try {
    const prompt = inquirer.createPromptModule();
    const opt = await prompt(pauseMessage);

    return opt;
  } catch (err) {
    console.log(
      "🐞 ~ It just happened an error when trying to do a pause: ",
      err?.message || err
    );
  }
};

const confirmStep = async () => {
  try {
    const prompt = inquirer.createPromptModule();
    const { agreed } = await prompt(confirmMessage);

    return agreed;
  } catch (err) {
    console.log(
      "🐞 ~ It just happened an error when trying to confirm: ",
      err?.message || err
    );
  }
};

const readInput = async () => {
  const prompt = inquirer.createPromptModule();
  const { description } = await prompt(inputQuestion);

  return description;
};

module.exports = {
  askCity,
  confirmStep,
  doPause,
  readInput,
  showCityWeather,
  showMenu,
  showPlacesAsOptions,
};
