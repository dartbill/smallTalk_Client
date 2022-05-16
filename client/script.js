// const titleName = require("../data/random_name");
// const subName = require("../data/random_name");
const postContent = document.getElementById("journalPost");
const annoynmousName = document.getElementById("userName");
const postButton = document.getElementById("postButton");
const parentDiv = document.getElementById("posts");

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
  createPost(e);
});

function createPost(e) {
  e.preventDefault();
  // Create new div
  const postContainer = document.createElement("div");
  const avatarContainer = document.createElement("div");
  const avatar = document.createElement("img");
  const newPost = document.createElement("div");
  const postText = document.createElement("div");
  const headerContainer = document.createElement("div");
  const postName = document.createElement("h3");
  const postFooter = document.createElement("div");
  const reaction1 = document.createElement("span");

  avatar.src =
    "https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png";
  avatar.alt = "Cartoon Avatar";
  avatarContainer.className = "post_avatar";
  newPost.className = "post_body";
  headerContainer.className = "post_header";
  postName.id = "userName";
  postText.className = "post_headerDescription";
  postText.id = "postInfo";
  postFooter.className = "post_footer";
  reaction1.className = "material-icons";
  reaction1.textContent = "add_reaction";
  postContainer.className = "post";

  // Populating details
  const name = randomNameGenerator();
  postName.textContent = name;
  postText.textContent = postContent.value;
  // Appendature
  postFooter.appendChild(reaction1);
  avatarContainer.appendChild(avatar);
  headerContainer.appendChild(postName);
  headerContainer.appendChild(postText);
  newPost.appendChild(headerContainer);
  newPost.appendChild(postFooter);

  parentDiv.appendChild(avatarContainer);
  parentDiv.appendChild(newPost);
  postContainer.appendChild(parentDiv);
  console.log(parentDiv);
}
