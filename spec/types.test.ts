import { PhantomAction } from "./../src/types/phantomStore";
import phantom, { createPhantomStore } from "../src/index";

const initialData = {
  0: "0",
};

function reducer(state = initialData, action: PhantomAction) {
  switch (action.type) {
    default:
      return state;
  }
}

const phantomStore = createPhantomStore(reducer);

const { fire, data, appear } = phantom(phantomStore, phantomComponent);

function phantomComponent() {
  const { title } = data();
  fire({ type: 0, lol: 0 });
  return `
      <div id="title-div">
        <h1 data-phantom="${title}" id="title-h1">${title}</h1>
      </div>
      `;
}

const appearShouldReturnHTMLElement: HTMLElement = appear();
