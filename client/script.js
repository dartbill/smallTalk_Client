// const titleName = require("../data/random_name");
// const subName = require("../data/random_name");

const API_Key = "yMYTtCg4jPmk6BxD19dklT7FUUfAMQAD";

const titleName = ["Lord", "The Common", "King", "The Divine"];
const subName = ["Apple", "Fish", "Salt", "Pepper"];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function randomNameGenerator() {
  console.log(titleName[getRandomInt(0, titleName.length)]);
  console.log(subName[getRandomInt(0, subName.length)]);
  let name = `${titleName[getRandomInt(0, titleName.length)]} ${
    subName[getRandomInt(0, subName.length)]
  }`;
  console.log(name);
  return name;
}

randomNameGenerator();
