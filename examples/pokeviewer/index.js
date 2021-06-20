import phantom from "../../lib/phantom";

import phantomStore from "./phantomStore";
import { initialFetch, fetchNext } from "./functions";
import "./styles.css";

// initialize phantom
export const { fire, data, appear } = phantom(phantomStore, phantomComponent);

// shorthands
const listen = document.addEventListener;

// initial render
initialFetch();
appear();

// components
function phantomComponent() {
  const { currentPoke, nextPoke } = data();
  return `
    ${Pokedex(currentPoke, nextPoke)}
    <a href="https://github.com/sidiousvic/phantom" id="made-w-phantom">made with <b>phantom</b></a>
  `;
}

function Pokedex(currentPoke, nextPoke) {
  listen("click", fetchNext);
  return `
    <div id="poke-container">
    <h1 data-phantom="${currentPoke.name}" id="curr-poke-name">${
    currentPoke.name || ""
  }</h1>
    
    <div data-phantom="${currentPoke.id}" id="curr-poke-img-wrapper">
      <img src="https://pokeres.bastionbot.org/images/pokemon/${
        currentPoke.id
      }.png" id="curr-poke-img">
    </div>
    <div data-phantom="${nextPoke.id}" id="next-poke-img-wrapper">
      <img src="https://pokeres.bastionbot.org/images/pokemon/${
        nextPoke.id
      }.png" id="next-poke-imsg">
    </div>
    </div>

  `;
}
