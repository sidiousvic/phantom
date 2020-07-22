import {
  PhantomAction,
  PhantomStore,
  FireFunction,
} from "./../src/types/phantomStore";
import { PhantomComponent } from "./../src/types/phantom";
import phantom, { createPhantomStore } from "../src/index";

/*
 * Test Phantom's type safety and exported types and interfaces
 * This test is ran by the Typescript compiler
 * Ignored by Jest.
 */

const initialData = {
  zero: "0",
};

function reducer(state = initialData, action: PhantomAction) {
  switch (action.type) {
    case 0:
      return action.payload;
    default:
      return state;
  }
}

const phantomStore: PhantomStore = createPhantomStore(reducer);

const phantomComponent: PhantomComponent = () => {
  const { zero } = data();
  fire({ type: 0, payload: "test" });
  return `
      <div id="title-div">
        <h1 data-phantom="${zero}" id="title-h1">${zero}</h1>
      </div>
      `;
};

const {
  fire,
  data,
  appear,
}: { fire: FireFunction; data: any; appear: () => HTMLElement } = phantom(
  phantomComponent,
  phantomStore
);

const appearShouldReturnHTMLElement: HTMLElement = appear();
