import phantom from "../../dist/phantom";
import "./styles.css";
import reduxStore from "./redux";
import {
  toggle,
  scaleDown,
  scaleUp,
  trash,
  addTodo,
  setListFromLocalStorage,
} from "./functions";

// shorthands
const listen = document.addEventListener;

// initialize phantom
export const { fire, data, launch } = phantom(reduxStore, phantomComponent);

// initial render
launch();

setListFromLocalStorage();

// components
function phantomComponent() {
  const { list } = data();
  return `
    <h1>To-do <a href="https://github.com/sidiousvic" id="by-sidiousvic">by sidiousvic</a></h1>
    ${TodoInput()}
    ${TodoList(list)}
    <a href="https://github.com/sidiousvic/phantom" id="made-w-phantom">made with <b>phantom</b></a>
  `;
}

function TodoList(list) {
  listen("click", toggle);
  listen("mousedown", scaleDown);
  listen("mouseup", scaleUp);
  listen("click", trash);
  const todoItems = list.map((item) => {
    return `
      <h2 data-phantom="${[item.done, list.length]}" class="todo-item" id="${
      item.id
    }">${item.done ? "✅&nbsp;&nbsp;" : "❌&nbsp;&nbsp;"}${
      item.text
    }<p class="trash" id="trash-${item.id}">🗑</p></h2>`;
  });

  return `
    <div data-phantom=${list.length} id="todo-list-div">
      ${todoItems}
    </div>

  `;
}

function TodoInput() {
  // event listeners
  listen("keydown", addTodo);
  return `
    <input type="text" id="todo-input" placeholder="&nbsp;🔍 Type and press enter"/>
  `;
}
