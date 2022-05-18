/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(
  path.resolve(__dirname, "../index.html"),
  "utf8"
);

describe("Dom Environment", () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });

  test("it has a header title", () => {
    let header = document.querySelector("header");
    expect(header.textContent).toContain("Small Talk");
  });
});
