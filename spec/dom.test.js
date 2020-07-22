import phantom from "../lib/phantom";
import phantomStore from "./utils/phantomStore";

/*
 * Test Phantom and its interactions with the DOM
 */

describe("Phantom and the DOM", () => {
  test("The PHANTOM element is rendered and wraps around the application", () => {
    // init phantomComponent
    const { appear } = phantom(phantomStore, phantomComponent);
    function phantomComponent() {
      return `
        <div>
          <h1>PHANTOM</h1>
        </div>
        `;
    }
    appear();

    const PHANTOMEl = document.body.firstChild;

    expect(PHANTOMEl.id).toBe("PHANTOM");
  });

  test("DOM is updated after firing a state change", () => {
    // init phantomComponent
    const { fire, data, appear } = phantom(phantomStore, phantomComponent);
    function phantomComponent() {
      const { title } = data();
      return `
        <div id="title-div">
          <h1 data-phantom="${title}" id="title-h1">${title}</h1>
        </div>
        `;
    }

    appear();

    // add click listener
    document.addEventListener("click", justDoShit);
    function justDoShit(e) {
      if (e.target.id === "title-h1") {
        fire({ type: "TOGGLE_TITLE" });
      }
    }

    const toBeSwappedOut = document.getElementById("title-h1");

    // simulate click
    toBeSwappedOut.click();

    const swappedIn = document.getElementById("title-h1");

    expect(swappedIn.innerHTML).toBe("JUST DO SHIT");
  });

  test("PHANTOM element is properly rendered", () => {
    // init phantomComponent
    const { data, appear } = phantom(phantomStore, phantomComponent);

    function phantomComponent() {
      return `
        <div id="phantom-test"></div>
        `;
    }

    appear();

    // get dom element's innerHTML, trim()
    const domElementInnerHTML = document
      .getElementById("PHANTOM")
      .innerHTML.trim();

    // get phantomComponent's HTML string, trim()
    const phantomElementHTML = phantomComponent().trim();

    expect(domElementInnerHTML).toBe(phantomElementHTML);
  });
});
