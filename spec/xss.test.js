import phantom from "../dist/phantom";
import reduxStore from "./utils/reduxStore";

/*
 * Test Phantom's HTML sanitization vs XSS injection
 */

test("<img src='X' onerror='alert(0)'> is sanitized", () => {
  const { launch } = phantom(reduxStore, phantomDOM);

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
  const { launch } = phantom(reduxStore, phantomDOM);

  function phantomDOM() {
    return `
      <iframe>
    `; // iframe is a forbidden tag
  }

  expect(launch).toThrowError(DOMException);
});
