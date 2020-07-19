import phantom from "../../dist/phantom.js";
import "./styles.css";
import phantomStore from "./phantomStore";
import {
  eatSlice,
  changeCursorToGrab,
  changeCursorToGrabbing,
  resetPizzas,
} from "./functions";

// shorthands
const listen = document.addEventListener;

// initialize phantom
export const { fire, data, appear } = phantom(phantomStore, phantomComponent);

// initial render
appear();

// components
function phantomComponent() {
  const { slices } = data();
  return `
    ${Pizza(slices)}
  `;
}

function Pizza(slices) {
  listen("click", eatSlice);
  listen("mousedown", changeCursorToGrabbing);
  listen("mouseup", changeCursorToGrab);
  listen("click", resetPizzas);

  return `
    <div id="pizza-box-div">
      <h1 data-phantom="${slices[0].emoji}" class="slice" id="slice0">${slices[0].emoji}</h1>
      <h1 data-phantom="${slices[1].emoji}" class="slice" id="slice1">${slices[1].emoji}</h1>
      <h1 data-phantom="${slices[2].emoji}" class="slice" id="slice2">${slices[2].emoji}</h1>
      <a href="https://github.com/sidiousvic/phantom" id="made-w-phantom">made with <b>phantom</b></a>
    </div>
  `;
}
