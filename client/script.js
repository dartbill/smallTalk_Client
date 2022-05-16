const titleName = require("../data/random_name");
const subName = require("../data/random_name");

const API_Key = "yMYTtCg4jPmk6BxD19dklT7FUUfAMQAD";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function randomeNameGenerator() {
  console.log(titleName[getRandomInt(0, titleName.length + 1)]);
}

randomeNameGenerator();
