# SmallTalk

SmallTalk is the place to be if you want to post a quirky comment, funny gif or rant about how you are overworked :(
This community driven website has been seperated into client side and server side repos to minimise risks to our code.
So welcome to our client-side Repo and take a read below to find out more!

![SiteHomePage](image url)

### Installation

1. Clone the repo
2. Using the terminal of your choice -> `Git Clone 'SSH or HTTPS key'`
3. Install the node packages -> `npm i`

### Technologies

###### Live Server

You can access a live server of smallTalk but simply running the `dev` script. The live server takes advantage of the npm script `currently` to start the `watchify` bundler and a http-server.

- Install: `npm i -D watchify concurrently http-server`
- Script: `"dev": "concurrently \"watchify ./client/script.js -o bundle.js\" \"http-server\""`

###### Jest

We used Jest to test our code and our coverage. To do this we install Jest as a dev dependency;

- `npm i -D jest`

  We used custom scripts to our package.json to constantly check our code check our coverage;

- `"test": "jest --watchAll"`
- `"coverage": "jest --coverage"`

###### Netlify

We launched our client on Netlify (not launching, may be to do with html file not being at the top)

- url to netlify

### Wins

- Implemented a random name generator for each post
- Successfully post the input fields to the server side that is on the herokuapp
- On the DOM being loaded, the previous posts are fetched from the server and displayed
- Each post has there own ID so their content can be collected
- **SOLVED** Managed to add the new post in the post fetch method which invokes the createPost function.

### Challenges

- Netlify failing to load (may be to do with html file not being at the top)
- Issue when posting new posts, that they do not appear until the page refreshes **SOLVED**
- We attempted to use a bundler Watchify so we could keep our data seperate but had a few issues using the require method

### Bugs

- Random name gets reassigned each time the page is reloaded
- Each post gets appended to the bottom of the feed

### Future Features
