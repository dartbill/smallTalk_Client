// const titleName = require("../data/random_name");
// const subName = require("../data/random_name");
const postContent = document.getElementById("journalPost");
const annoynmousName = document.getElementById("userName");
const postButton = document.getElementById("postButton");
const postContainer = document.getElementById("postInfo");

const API_Key = "yMYTtCg4jPmk6BxD19dklT7FUUfAMQAD";

const titleName = ["Lord", "The Common", "King", "The Divine"];
const subName = ["Apple", "Fish", "Salt", "Pepper"];

//////// Random Name Section
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function randomNameGenerator() {
  let name = `${titleName[getRandomInt(0, titleName.length)]} ${
    subName[getRandomInt(0, subName.length)]
  }`;

  return name;
}

// Click event 4 posts

postButton.addEventListener("click", (e) => {
  e.preventDefault();
  // Create new div

  //   let postText, newPost;

  // Title Name
  const name = randomNameGenerator();
  annoynmousName.textContent = name;
  // Text Content
  postContainer.textContent = postContent.value;
});
