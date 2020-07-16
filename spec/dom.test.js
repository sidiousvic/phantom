import phantom from "../src/phantom";
import phantomStore from "./utils/phantomStore";

/*
 * Test Phantom's DOM output
 */

test("The PHANTOM element is rendered and wraps around the application", () => {
  // init phantomElement
  const { launch } = phantom(phantomStore, phantomElement);
  function phantomElement() {
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

test("DOM is updated after firing a state change", () => {
  // init phantomElement
  const { fire, data, launch } = phantom(phantomStore, phantomElement);
  function phantomElement() {
    const { title } = data();
    return `
      <div id="title-div">
        <h1 data-phantom="${title}" id="title-h1">${title}</h1>
      </div>
      `;
  }
  launch();

  // add listener
  document.addEventListener("click", justDoShit);
  function justDoShit(e) {
    if (e.target.id === "title-h1") {
      fire({ type: "TOGGLE_TITLE" });
    }
  }

  // click title element
  const toBeSwappedOut = document.getElementById("title-h1");
  toBeSwappedOut.click();
  const swappedIn = document.getElementById("title-h1");

  expect(swappedIn.innerHTML).toBe("JUST DO SHIT");
});

test("PHANTOM DOM is properly rendered", () => {
  // init phantomElement
  const { fire, data, launch } = phantom(phantomStore, phantomElement);
  function phantomElement() {
    const { title } = data();
    return `
      <div id="title-div">
        <h1 id="title-h1">${title}</h1>
      </div>
      `;
  }

  launch();

  // add listener
  document.addEventListener("click", justDoShit);
  function justDoShit(e) {
    if (e.target.id === "title-h1") {
      fire({ type: "TOGGLE_TITLE" });
    }
  }

  // get dom element's innerHTML, trim()
  const domElementInnerHTML = document
    .getElementById("PHANTOM")
    .innerHTML.trim();

  // click title element
  const titleH1 = document.getElementById("title-h1");
  titleH1.click();

  // get phantomElement's (as returned by phantomElement) HTML, trim()
  const phantomElementHTML = phantomElement().trim();

  expect(domElementInnerHTML).toBe(phantomElementHTML);
});
