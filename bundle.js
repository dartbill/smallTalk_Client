(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const postContent = document.getElementById("journalPost");
const form = document.getElementById("form");
const annoynmousName = document.getElementById("userName");
const postButton = document.getElementById("postButton");
const parentDiv = document.getElementById("posts");

const API_Key = "yMYTtCg4jPmk6BxD19dklT7FUUfAMQAD";

///////////// Random Name function

const titleName = ["Lord", "The Common", "King", "The Divine"];
const subName = ["Apple", "Fish", "Salt", "Pepper"];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function randomNameGenerator() {
  let name = `${titleName[getRandomInt(0, titleName.length)]} ${
    subName[getRandomInt(0, subName.length)]
  }`;

  return name;
}

////////// Loads posts when the DOM is loaded

document.addEventListener("DOMContentLoaded", (e) => {
  loadPosts(e);
});

////// Sending Data to herokuapp

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
      createPost(e, data.id);
      let postText = document.getElementById(`postInfo-${data.id}`);
      postText.textContent = test;
    })
    .catch(console.warn);
});

///////////////////// GIPHY FORM
const giphyForm = document.getElementById("gifButton-random");
giphyForm.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_Key}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json.data);
      const randomInt = getRandomInt(0, json.data.length);
      console.log(randomInt);
      const gif_url = json.data[randomInt].images.fixed_height.url;
      let img = document.createElement("img");
      img.src = gif_url;
      parentDiv.appendChild(img);
    })
    .catch((error) => (document.body.appendChild = error));
});

//////////// fetches all the posts and loops over each creating a post for each

function loadPosts(e) {
  fetch("https://small-talk-fp1.herokuapp.com/")
    .then((r) => r.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        fetchPost(e, data[i].id);
      }
    });
}

//////////// Creating post for each id in the server json file

function fetchPost(e, id) {
  e.preventDefault();
  createPost(e, id);

  const postText = document.getElementById(`postInfo-${id}`);
  fetch(`https://small-talk-fp1.herokuapp.com/${id}`)
    .then((r) => r.json())
    .then((data) => {
      postText.textContent = data.text;

      /// comments
      const commentsArray = data.comments;
      if (!data.comment) {
        // TODO::::  Maybe send comment into createComment
        commentsArray.forEach((comment, index) => {
          createComment(id, index);
        });
      }
    })
    .catch(console.warn);
}

/// creates the elements contained within the post

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

  const commentForm = document.createElement("form");
  const commentBar = document.createElement("textarea");
  const commentButton = document.createElement("input");
  const commentList = document.createElement("ul");
  const commentArea = document.createElement("div");

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
  postFooter.id = `post_footer-${id}`;
  reaction1.textContent = "sentiment_very_satisfied";
  reaction2.textContent = "sentiment_dissatisfied";
  reaction3.textContent = "thumb_up";
  reaction2.className = "material-icons";
  reaction3.className = "material-icons";
  reaction1.className = "material-icons";
  postContainer.className = "postFlex";

  commentForm.className = "commentForm";
  commentForm.id = `formInfo-${id}`;
  commentBar.className = "postComments";
  commentButton.className = "commentButton";
  commentButton.setAttribute("type", "submit");
  commentButton.textContent = "Post";
  commentButton.id = `commentSubmit-${id}`;
  commentArea.className = "commentArea";
  commentList.className = "commentList";
  commentList.id = `comment-${id}`;

  // Appendature
  postFooter.appendChild(reaction3);
  postFooter.appendChild(reaction1);
  postFooter.appendChild(reaction2);

  postFooter.appendChild(commentForm);
  commentForm.appendChild(commentBar);
  commentForm.appendChild(commentButton);
  avatarContainer.appendChild(avatar);
  headerContainer.appendChild(postName);
  headerContainer.appendChild(postText);
  commentArea.appendChild(commentList);
  headerContainer.appendChild(commentArea);
  newPost.appendChild(headerContainer);
  newPost.appendChild(postFooter);
  postContainer.appendChild(avatarContainer);
  postContainer.appendChild(newPost);

  parentDiv.appendChild(postContainer);

  // Clear Input, add randomName

  postContent.value = "";
  const name = randomNameGenerator();
  postName.textContent = name;
}

////////////////////////////// Comment area

//// New Comment
// function newComment(id) {
//   commentQuery.addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log(e.target);
//   });
// }
// newComment(1);
//// Create Comment

function createComment(id, i) {
  fetch(`https://small-talk-fp1.herokuapp.com/${id}`)
    .then((r) => r.json())
    .then((data) => {
      const newLi = document.createElement("li");
      newLi.textContent = data.comments[i];
      const commentList = document.getElementById(`comment-${id}`);
      commentList.appendChild(newLi);
    });
}

///////////// Fetch

},{}]},{},[1]);
