import phantom from "../lib/phantom";
import phantomStore from "./utils/phantomStore";

/*
 * Test the internal Phantom Exorciser and its HTML sanitization vs XSS injection
 */

describe("The Phantom Exorciser", () => {
  test("<img src='X' onerror='alert(0)'> is sanitized", () => {
    // init phantom
    const { appear } = phantom(phantomComponent, phantomStore);

    // define a component
    function phantomComponent() {
      return `
        <img src='X' onerror='alert(0)'> 
      `; // ^ dangerous <img> tag
    }

    const sanitized = `<img src="X">`;
    const shouldBeSanitized = appear().innerHTML.trim();
    // ^ appear returns the DOM node. innerHTML is trimmed for control

    expect(shouldBeSanitized).toBe(sanitized);
  });

  test("Attempting to render <iframe> throws an DOMException", () => {
    // init phantom
    const { appear } = phantom(phantomComponent, phantomStore);

    function phantomComponent() {
      return `
        <iframe>
      `; // iframe is a forbidden tag
    }

    expect(appear).toThrowError(DOMException);
  });
});
