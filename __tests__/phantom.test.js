import phantom from "../phantom";
import reduxStore from "./utils/reduxStore";

test("the 'fire' interface points to the reduxStore dispatch", () => {
  const { fire } = phantom(reduxStore, phantomDOM);
  function phantomDOM() {
    return ``;
  }
  expect(fire).toBe(reduxStore.dispatch);
});

test("the 'data' interface points to the reduxStore getState", () => {
  const { data } = phantom(reduxStore, phantomDOM);
  function phantomDOM() {
    return ``;
  }
  expect(data).toBe(reduxStore.getState);
});

test("the 'launch' interface returns an HTMLDivElement instance", () => {
  const { launch } = phantom(reduxStore, phantomDOM);
  function phantomDOM() {
    return ``;
  }
  expect(launch() instanceof HTMLDivElement).toBe(true);
});

test("The PHANTOM element wraps around the application", () => {
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

test("DOM is updated after firing a state change", () => {
  // init phantomDOM
  const { fire, data, launch } = phantom(reduxStore, phantomDOM);
  function phantomDOM() {
    const { title } = data();
    return `
    <div data-phantom="${title}" id="title-div">
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

  // click title element
  const titleH1 = document.getElementById("title-h1");
  titleH1.click();

  const expected = `
    <div data-phantom="JUST DO SHIT" id="title-div">
      <h1 id="title-h1">JUST DO SHIT</h1>
    </div>
    `;

  expect(phantomDOM()).toBe(expected);
});
