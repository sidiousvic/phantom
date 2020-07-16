import phantom from "../src/phantom";
import phantomStore from "./utils/phantomStore";

/*
 * Test Phantom's HTML sanitization vs XSS injection
 */

test("<img src='X' onerror='alert(0)'> is sanitized", () => {
  const { launch } = phantom(phantomStore, phantomDOM);

  function phantomDOM() {
    return `
      <img src='X' onerror='alert(0)'>
    `;
  }

  const sanitized = `<img src="X">`;
  const shouldBeSanitized = launch().innerHTML.trim();

  expect(shouldBeSanitized).toBe(sanitized);
});

test("Attempting to render <iframe> throws an DOMException", () => {
  const { launch } = phantom(phantomStore, phantomDOM);

  function phantomDOM() {
    return `
      <iframe>
    `; // iframe is a forbidden tag
  }

  expect(launch).toThrowError(DOMException);
});
