import phantom from "../src/phantom";
import reduxStore from "./utils/reduxStore";

/*
 * Test the Phantom engine's interfaces
 */

test("the 'fire' interface points to the reduxStore dispatch", () => {
  const { fire } = phantom(reduxStore, phantomElement);
  function phantomElement() {
    return ``;
  }
  expect(fire).toBe(reduxStore.dispatch);
});

test("the 'data' interface points to the reduxStore getState", () => {
  const { data } = phantom(reduxStore, phantomElement);
  function phantomElement() {
    return ``;
  }
  expect(data).toBe(reduxStore.getState);
});

test("the 'launch' interface returns an HTMLDivElement instance", () => {
  const { launch } = phantom(reduxStore, phantomElement);
  function phantomElement() {
    return ``;
  }
  expect(launch() instanceof HTMLDivElement).toBe(true);
});
