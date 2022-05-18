/**
 * @jest-environment jsdom
 */

 const fs = require("fs");
 const path = require("path");
 const html = fs.readFileSync(
   path.resolve(__dirname, "../index.html"),
   "utf8"
 );

//  describe('script.js', () => {
//     beforeEach(() => {
//       document.documentElement.innerHTML = html.toString()
//       console.log('will run before every test')
//     })
//     describe('head', () => {
//       test('it has a title', () => {
//         const title = document.querySelector('title')
//         expect(title.textContent).toContain('Small Talk')
//       })
//     })

//  })


 






