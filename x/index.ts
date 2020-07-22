import {
  PhantomAction,
  PhantomStore,
  FireFunction,
} from "../src/types/phantomStore";
import { PhantomComponent } from "../src/types/phantom";
//@ts-ignore
import phantom, { createPhantomStore } from "./phantom.js";
import "./styles.css";
/*
 * Test Phantom's type safety and exported types and interfaces
 * This test is ran by the Typescript compiler
 * Ignored by Jest.
 */

const initialData = {
  message: "PHANTOM",
};

function reducer(state = initialData, action: PhantomAction) {
  switch (action.type) {
    case "PHANTOM":
      return { ...state, message: action.payload };
    default:
      return state;
  }
}

const phantomStore: PhantomStore = createPhantomStore(reducer);

const phantomComponent: PhantomComponent = () => {
  const { message } = data();

  document.addEventListener("click", fireAction);

  return `
  <div id="x">
  <h1 data-phantom="${message}" id="y">${message}</h1>
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

appear();

function fireAction() {
  const { message } = data();
  if (message === "PHANTOM") fire({ type: "PHANTOM", payload: "👻" });
  else fire({ type: "PHANTOM", payload: "PHANTOM" });
}
