import phantom from "../../phantom.ts";
import { createStore } from "redux";
import "./styles.css";

// redux store
const initialState = {
  screen: ["800b5"],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ENTER":
      return { ...state, screen: [...state.screen, action.digit] };
    case "CLEAR":
      return { ...state, screen: [""] };
    case "RESET":
      return { ...state, screen: ["80085"] };
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
  const { screen } = data();
  document.addEventListener("click", resetScreen);
  return `
    <h1>Calculator <span id="by-sidiousvic">by sidiousvic</span></h1>
    ${Screen(screen)}
    ${Digits()}
    <a href="https://github.com/sidiousvic/phantom" id="made-w-phantom">made with <b>phantom</b></a>
  `;
}

function Screen(screen) {
  // event listeners
  document.addEventListener("mousedown", scaleDown);
  document.addEventListener("mouseup", scaleUp);
  return `
    <div data-phantom="${screen}" id="screen">&nbsp;${screen
    .reverse()
    .join("")}</div>
  `;
}

function Digits() {
  // event listeners
  document.addEventListener("click", enterDigit);
  return `
  <div id="digits">
    <div class="digit" id="1">1</div>
    <div class="digit" id="2">2</div>
    <div class="digit" id="3">3</div>
    <div class="digit" id="4">4</div>
    <div class="digit" id="5">5</div>
    <div class="digit" id="6">6</div>
    <div class="digit" id="7">7</div>
    <div class="digit" id="8">8</div>
    <div class="digit" id="9">9</div>
    <div class="digit zero" id="0">0</div>
    <div class="digit operator" id="+">+</div>
    <div class="digit operator" id="-">-</div>
    <div class="digit operator" id="/">/</div>
    <div class="digit operator" id="*">*</div>
  </div>
  <div class="digit clear" id="clear">Clear</div>

  `;
}

// utility functions
function enterDigit(e) {
  if (data().screen.length > 12) return;
  if (data().screen[0] === "800b5") fire({ type: "CLEAR" });
  if (e.target.classList.contains("clear")) {
    fire({ type: "CLEAR" });
    return;
  }
  if (e.target.classList.contains("digit")) {
    fire({ type: "ENTER", digit: e.target.id });
  }
}

function scaleDown(e) {
  if (e.target.classList.contains("digit")) {
    e.target.style.transform = "scale(1)";
  }
}

function scaleUp(e) {
  if (e.target.classList.contains("digit")) {
    e.target.style.transform = "scale(1.05)";
  }
}

function resetScreen(e) {
  if (e.target === document.body) {
    fire({ type: "RESET" });
  }
}
