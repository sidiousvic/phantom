import phantom from "../src/phantom";
import phantomStore from "./utils/phantomStore";

/*
 * Test the Phantom engine's interfaces
 */

test("the 'fire' interface points to the phantomStore dispatch", () => {
  const { fire } = phantom(phantomStore, phantomElement);
  function phantomElement() {
    return ``;
  }
  expect(fire).toBe(phantomStore.fire);
});

test("the 'data' interface points to the phantomStore getState", () => {
  const { data } = phantom(phantomStore, phantomElement);
  function phantomElement() {
    return ``;
  }
  expect(data).toBe(phantomStore.data);
});

test("the 'launch' interface returns an HTMLDivElement instance", () => {
  const { launch } = phantom(phantomStore, phantomElement);
  function phantomElement() {
    return ``;
  }
  expect(launch() instanceof HTMLDivElement).toBe(true);
});
