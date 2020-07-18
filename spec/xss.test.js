import phantom from "../src/phantom";
import phantomStore from "./utils/phantomStore";

/*
 * Test Phantom's HTML sanitization vs XSS injection
 */

test("<img src='X' onerror='alert(0)'> is sanitized", () => {
  const { appear } = phantom(phantomStore, phantomDOM);

  function phantomDOM() {
    return `
      <img src='X' onerror='alert(0)'>
    `;
  }

  const sanitized = `<img src="X">`;
  const shouldBeSanitized = appear().innerHTML.trim();

  expect(shouldBeSanitized).toBe(sanitized);
});

test("Attempting to render <iframe> throws an DOMException", () => {
  const { appear } = phantom(phantomStore, phantomDOM);

  function phantomDOM() {
    return `
      <iframe>
    `; // iframe is a forbidden tag
  }

  expect(appear).toThrowError(DOMException);
});
