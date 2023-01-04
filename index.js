require("dotenv").config();

const { showMenu, doPause, askCity } = require("./src/helpers/inquirer");
const Searches = require("./src/models/searches");

const main = async () => {
  let hasLeft = false;

  const searches = new Searches();

  do {
    const option = await showMenu();
    switch (option) {
      case 1:
        const city = await askCity();

        searches.searchCity(city);

        break;
      case 2:
        console.log("Showing a city");
        break;
      case 3:
        hasLeft = true;
        break;
      default:
        console.log("The option is not valid!");
        break;
    }

    if (!hasLeft) await doPause();
  } while (!hasLeft);
};

main();
