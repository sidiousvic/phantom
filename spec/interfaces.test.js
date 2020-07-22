import phantom from "../lib/phantom";
import phantomStore from "./utils/phantomStore";

/*
 * Test the Phantom engine's interfaces
 * > data::returns the current store state
 * > fire::dispatches an action to the store
 * > appear::runs the phantom engine
 */

describe("Phantom and its interfaces", () => {
  test("the 'fire' interface points to the phantomStore", () => {
    // init phantom
    const { fire } = phantom(phantomStore, phantomComponent);

    function phantomComponent() {
      return ``;
    }

    expect(fire).toBe(phantomStore.fire);
  });

  test("the 'data' interface points to the phantomStore", () => {
    const { data } = phantom(phantomStore, phantomComponent);
    function phantomComponent() {
      return ``;
    }
    expect(data).toBe(phantomStore.data);
  });

  test("the 'appear' interface returns an HTMLDivElement instance", () => {
    const { appear } = phantom(phantomStore, phantomComponent);
    function phantomComponent() {
      return ``;
    }
    expect(appear() instanceof HTMLDivElement).toBe(true);
  });
});
