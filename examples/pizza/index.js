import phantom from "../../dist/phantom";
import { createStore } from "redux";
import "./styles.css";

// redux store
const initialState = {
  slices: [
    { emoji: "🍕", id: "slice0" },
    { emoji: "🍕", id: "slice1" },
    { emoji: "🍕", id: "slice2" },
  ],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "EAT_SLICE":
      const newSlices = state.slices.map((slice) => {
        if (slice.id === action.id) slice.emoji = "";
        return slice;
      });
      return { ...state, slices: newSlices };
    case "RESET_SLICES":
      const initialSlices = state.slices.map((slice) => {
        slice.emoji = "🍕";
        return slice;
      });
      return { ...state, slices: initialSlices };
    case "SATISFIED":
      const satisfiedSlices = state.slices.map((slice, i) => {
        if (i === 0) slice.emoji = "😋";
        return slice;
      });
      return { ...state, slices: satisfiedSlices };
    default:
      return state;
  }
}

const reduxStore = createStore(reducer);

// initialize phantom
const { fire, data, launch } = phantom(reduxStore, phantomComponent);

// initial render
launch();

// components
function phantomComponent() {
  const { slices } = data();
  return `
    ${Pizza(slices)}
  `;
}

function Pizza(slices) {
  // event listeners
  document.addEventListener("click", eatSlice);
  document.addEventListener("mousedown", changeCursorToGrabbing);
  document.addEventListener("mouseup", changeCursorToGrab);
  document.addEventListener("click", resetPizzas);

  return `
    <div id="pizza-box-div">
      <h1 data-phantom="${slices[0].emoji}" class="slice" id="slice0">${slices[0].emoji}</h1>
      <h1 data-phantom="${slices[1].emoji}" class="slice" id="slice1">${slices[1].emoji}</h1>
      <h1 data-phantom="${slices[2].emoji}" class="slice" id="slice2">${slices[2].emoji}</h1>
      <a href="https://github.com/sidiousvic/phantom" id="made-w-phantom">made with <b>phantom</b></a>
    </div>
  `;
}

// utility functions
function eatSlice(e) {
  if (e.target.classList.contains("slice")) {
    fire({ type: "EAT_SLICE", id: e.target.id });
    if (allSlicesEaten()) fire({ type: "SATISFIED" });
  }
}

function changeCursorToGrabbing(e) {
  e.target.style.cursor = "grabbing";
}

function changeCursorToGrab(e) {
  e.target.style.cursor = "grab";
}

function resetPizzas(e) {
  if (e.target.innerText === "😋") {
    fire({ type: "RESET_SLICES" });
  }
}

function allSlicesEaten() {
  const { slices } = data();
  const emojis = slices.map((slice) => slice.emoji);
  return emojis.filter((emoji) => emoji === "🍕").length < 1;
}
