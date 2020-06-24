import phantom from "../../phantom.ts";
import { createStore } from "redux";

// redux store
const initialState = {
  slices: ["🍕", "🍕", "🍕"],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "EAT_SLICE":
      // remove a slice from array
      return { ...state, slices: state.slices.slice(0, -1) };
    default:
      return state;
  }
}

const reduxStore = createStore(reducer);

// initialize phantom
const { fire, data, launch } = phantom(reduxStore, phantomComponent);

// initial render
launch();

//components
function phantomComponent() {
  const { slices } = data();
  return `
    ${Pizza(slices)}
  `;
}

function Pizza(slices) {
  return `
    <div id="pizza-box-div">
      <h1 data-phantom="${slices}" class="slice" id="slice1">${
    slices[0] || "😋"
  }</h1>
      <h1 data-phantom="${slices}" class="slice" id="slice2">${
    slices[1] || "" // fallback
  }</h1>
      <h1 data-phantom="${slices}" class="slice" id="slice3">${
    slices[2] || "" // fallback
  }</h1>
    </div>
  `;
}

// event listeners
document.addEventListener("click", eatSlice);
function eatSlice(e) {
  if (e.target.classList.contains("slice")) {
    fire({ type: "EAT_SLICE" });
  }
}
document.addEventListener("mousedown", changeCursorToGrabbing);
function changeCursorToGrabbing(e) {
  e.target.style.cursor = "grabbing";
}
