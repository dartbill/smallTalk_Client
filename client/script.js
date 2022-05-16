// const titleName = require("../data/random_name");
// const subName = require("../data/random_name");
const postContent = document.getElementById("journalPost");
const form = document.getElementById("form");
// console.log(form.value);
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

////// Sending Data

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const postData = {
    text: e.target.journalPost.value,
  };
  const options = {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch("https://small-talk-fp1.herokuapp.com/new", options)
    .then((res) => res.json())
    .then((data) => {
      let test = data.text;
      test = postData.text;
      console.log(test);
      console.log(data);
      createPost(e, data.id);
      let postText = document.getElementById(`postInfo-${data.id}`);
      postText.textContent = test;
    })
    .catch(console.warn);
});
// Posts loads on visiting the page
function loadPosts(e) {
  fetch("https://small-talk-fp1.herokuapp.com/")
    .then((r) => r.json())
    .then((data) => {
      // loop over our array and post each object
      for (let i = 0; i < data.length; i++) {
        fetchPost(e, data[i].id);
      }
    });
}

document.addEventListener("DOMContentLoaded", (e) => {
  loadPosts(e);
});

///// Add post
postButton.addEventListener("click", (e) => {});

function createPost(e, id) {
  e.preventDefault();
  const postContainer = document.createElement("div");
  const avatarContainer = document.createElement("div");
  const avatar = document.createElement("img");
  const newPost = document.createElement("div");
  const postText = document.createElement("div");
  const headerContainer = document.createElement("div");
  const postName = document.createElement("h3");
  const postFooter = document.createElement("div");
  const reaction1 = document.createElement("span");
  const reaction2 = document.createElement("span");
  const reaction3 = document.createElement("span");
  const commentBar = document.createElement("textarea");
  const commentButton = document.createElement("button");

  avatar.src =
    "https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png";
  avatar.alt = "Cartoon Avatar";
  avatarContainer.className = "post_avatar";
  newPost.className = "post_body";
  headerContainer.className = "post_header";
  postName.id = "userName";
  postText.className = "post_headerDescription";
  postText.id = `postInfo-${id}`;
  postFooter.className = "post_footer";
  reaction1.textContent = "sentiment_very_satisfied";
  reaction2.textContent = "sentiment_dissatisfied";
  reaction3.textContent = "thumb_up";
  reaction2.className = "material-icons";
  reaction3.className = "material-icons";
  reaction1.className = "material-icons";
  postContainer.className = "postFlex";
  commentBar.className = "postComments";
  commentButton.className = "commentButton";
  commentButton.textContent = "Post";
  // Appendature
  postFooter.appendChild(reaction3);
  postFooter.appendChild(reaction1);
  postFooter.appendChild(reaction2);
  postFooter.appendChild(commentBar);
  postFooter.appendChild(commentButton);

  avatarContainer.appendChild(avatar);
  headerContainer.appendChild(postName);
  headerContainer.appendChild(postText);
  newPost.appendChild(headerContainer);
  newPost.appendChild(postFooter);

  postContainer.appendChild(avatarContainer);
  postContainer.appendChild(newPost);
  //   console.log(postContainer);
  parentDiv.appendChild(postContainer);
  //   document.getElementsByTagName("body")[0].appendChild(postContainer);

  // Clear text content
  postContent.value = "";

  // Populating details

  const name = randomNameGenerator();
  postName.textContent = name;
}

function fetchPost(e, id) {
  e.preventDefault();
  // Create new div

  createPost(e, id);
  const postText = document.getElementById(`postInfo-${id}`);
  //   postText.textContent = postContent.value;
  fetch(`https://small-talk-fp1.herokuapp.com/${id}`)
    .then((r) => r.json())
    .then((data) => (postText.textContent = data.text));
}
