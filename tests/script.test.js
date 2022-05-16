const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(
  path.resolve(__dirname, "../client/index.html"),
  "utf8"
);

describe("index.html", () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });

  test("it has a header title", () => {
    let header = document.querySelector("header");
    expect(header.textContent).toContain("JavaScript in the Browser");
  });
});
