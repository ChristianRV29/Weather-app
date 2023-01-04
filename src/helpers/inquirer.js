const inquirer = require("inquirer");
const colors = require("colors");

const {
  optsMenu,
  inputQuestion,
  pauseMessage,
  confirmMessage,
} = require("./../constants");

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
  showMenu,
};
