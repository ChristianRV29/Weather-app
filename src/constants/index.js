require("colors");

const optsMenu = [
  {
    choices: [
      {
        value: 1,
        name: `${"1".green}. Search a city`,
      },
      {
        value: 2,
        name: `${"2".green}. Search history`,
      },
      {
        value: 3,
        name: `${"3".green}. Exit`,
      },
    ],
    message: "What do you want to do?\n",
    name: "option",
    type: "list",
  },
];

const pauseMessage = {
  default: "ENTER",
  message: `\nPress ${"ENTER".green} to continue\n`,
  name: "enter",
  type: "input",
};

const confirmMessage = {
  default: "y/N",
  message: "Are you sure?",
  name: "agreed",
  type: "confirm",
};

const inputQuestion = [
  {
    message: "Enter a city",
    name: "city",
    type: "input",
    validate(value) {
      if (value.length === 0) {
        return "Please, enter some value";
      }
      return true;
    },
  },
];

module.exports = {
  confirmMessage,
  inputQuestion,
  optsMenu,
  pauseMessage,
};
