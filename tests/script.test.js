/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");
const { reactCounterLike } = require("../client/script.js");
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");
global.fetch = require("jest-fetch-mock");

let app;

describe("app", () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
    app = require("../client/script.js");
  });
  afterEach(() => {
    fetch.resetMocks();
  });
  describe("requests", () => {
    describe("testing random num generator", () => {
      test("get a random number between two values", () => {
        let min = 2;
        let max = 10;

        const int = app.getRandomInt(min, max);

        expect(int).toBeGreaterThanOrEqual(min);
        expect(int).toBeLessThan(max);
      });
    });
  });
});
