import phantom from "../dist/phantom";
import reduxStore from "./utils/reduxStore";

/*
 * Test Phantom's HTML sanitization vs XSS injection
 */

test("<img src='X' onerror='alert(0)'> produces an error", () => {
  // init phantomDOM
  const { launch } = phantom(reduxStore, phantomDOM);
  function phantomDOM() {
    return `
    <div>
      <h1>PHANTOM</h1>
    </div>
    `;
  }
  launch();

  const PHANTOMEl = document.body.firstChild;

  expect(PHANTOMEl.id).toBe("PHANTOM");
});
