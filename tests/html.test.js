/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(
  path.resolve(__dirname, "../index.html"),
  "utf8"
);

describe('index.html', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString()
    console.log('will run before every test')
  })
  describe('head', () => {
    test('it has a title', () => {
      const title = document.querySelector('title')
      expect(title.textContent).toContain('Small Talk')
    })
  })


  
  // Testing Sidebar Section
  describe('body', () => {
    it('it has material icons', () => {
      let heading = document.getElementsByClassName('sidebar')
      expect(heading).toBeTruthy()
    })
  })
  
  // Form testing
  describe('body', () => {
    it('it has a form', () => {
      let heading = document.querySelector('#form')
      expect(heading).toBeTruthy()
    })
  })

    // Gif Testing
    describe('body', () => {
      it('it has a random gif button', () => {
        let heading = document.getElementsByTagName('gifButton-random')
        expect(heading).toBeTruthy()
      })
    })



})



// describe('index.html', () => {
//   test('it has a title', () => {
//     document.documentElement.innerHTML = html.toString()
//     const title = document.querySelector('title')
//     expect(title.textContent).toContain('Small Talk')
//   })
// })

// describe("Dom Environment", () => {
//   beforeEach(() => {
//     document.documentElement.innerHTML = html.toString();
//   });

//   test("it has a header title", () => {
//     let header = document.querySelector("header");
//     expect(header.textContent).toContain("Small Talk");
//   });
// });

// describe("index.html", () => {
//   beforeEach(() => {
//     document.documentElement.innerHTML = html.toString();
//   });

//   test("it has a header title", () => {
//     let header = document.querySelector("header");
//     expect(header.textContent).toContain("Small Talk");
//   });
// });


// describe("head", () => {
//   let title;
//   test("it has a title", () => {
//     title = document.querySelector("title");
//     expect(title).toBeTruthy();
//   });
// });