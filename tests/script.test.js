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
  test('it has a title', () => {
    document.documentElement.innerHTML = html.toString()
    const title = document.querySelector('title')
    expect(title.textContent).toContain('Small Talk')
  })
})

