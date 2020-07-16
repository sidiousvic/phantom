import phantom from "../../dist/phantom";
import "./styles.css";
import {
  enterDigit,
  calculate,
  reset,
  scaleDown,
  scaleUp,
  highlightOperatorKey,
  copyToClipboard,
} from "./functions";
import phantomStore from "./phantomStore";

// shorthands
const listen = document.addEventListener;

// initialize phantom
export const { fire, data, launch } = phantom(phantomStore, phantomComponent);

// initial render
launch();

// components
function phantomComponent() {
  const { screen } = data();
  return `
    <h1>Calculator <a href="https://github.com/sidiousvic" id="by-sidiousvic">by <b>sidiousvic</b></a></h1>
    ${Screen(screen)}
    ${Digits()}
    <a href="https://github.com/sidiousvic/phantom" id="made-w-phantom">made with <b>phantom</b></a>
  `;
}

function Screen(screen) {
  listen("mousedown", scaleDown);
  listen("mouseup", scaleUp);
  listen("mouseout", scaleDown);
  listen("mouseover", scaleUp);
  listen("click", copyToClipboard);
  // const screenDisplay = removeOperators(screen).join("");
  return `
    <div data-phantom="${screen}" id="screen">&nbsp;${screen.join("")}</div>
  `;
}

function Digits() {
  listen("click", enterDigit);
  listen("click", calculate);
  listen("click", reset);
  listen("click", highlightOperatorKey);

  return `
  <div id="digits">
    <div class="digit pressable" id="1">1</div>
    <div class="digit pressable" id="2">2</div>
    <div class="digit pressable" id="3">3</div>
    <div class="digit pressable" id="4">4</div>
    <div class="digit pressable" id="5">5</div>
    <div class="digit pressable" id="6">6</div>
    <div class="digit pressable" id="7">7</div>
    <div class="digit pressable" id="8">8</div>
    <div class="digit pressable" id="9">9</div>
    <div class="digit pressable zero" id="0">0</div>
    <div class="operator pressable" id="+">+</div>
    <div class="operator pressable" id="-">-</div>
    <div class="operator pressable" id="/">/</div>
    <div class="operator pressable" id="*">*</div>
    <div class="digit reset pressable" id="reset"><b>🧨</b></div>
    <div class="digit equals pressable" id="equals">=</div>
  </div>
  `;
}
