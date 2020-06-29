import phantom from "../../phantom.ts";
import { createStore } from "redux";
import "./styles.css";

// redux store
const initialState = {
  list: [
    { id: 0, text: "Walk the dog", done: false },
    { id: 1, text: "Wash the dishes", done: false },
    {
      id: 2,
      text: "Topple the Pagan Leprechaun Regime",
      done: false,
    },
  ],
};

// Replace Initial State List with Local Storage
const listStorage = localStorage.getItem("list");
if (listStorage) {
  initialState.list = JSON.parse(listStorage);
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE":
      const list = state.list.map((item) => {
        if (item.id === +action.id) {
          return { ...item, done: !item.done };
        }
        return item;
      });
      // remove a slice from array
      return { ...state, list };
    case "ADD_TODO": {
      return {
        ...state,
        list: [
          ...state.list,
          { id: state.list.length, text: action.text, done: false },
        ],
      };
    }
    case "TRASH": {
      const newList = state.list.filter((item) => item.id !== +action.id);
      return { ...state, list: newList };
    }
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
  const { list } = data();
  return `
    <h1>To-do <span id="by-sidiousvic">by sidiousvic</span></h1>
    ${TodoInput()}
    ${TodoList(list)}
    <a href="https://github.com/sidiousvic/phantom" id="made-w-phantom">made with <b>phantom</b></a>
  `;
}

function TodoList(list) {
  // event listeners
  document.addEventListener("click", toggle);
  document.addEventListener("mousedown", scaleDown);
  document.addEventListener("mouseup", scaleUp);
  document.addEventListener("click", trash);
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
  document.addEventListener("keydown", addTodo);
  return `
    <input type="text" id="todo-input" placeholder="🔍 Type and press enter"/>
  `;
}

// utility functions
function trash(e) {
  if (e.target.classList.contains("trash")) {
    fire({ type: "TRASH", id: e.target.parentElement.id });
    updateLocalStorage();
  }
}

function addTodo(e) {
  if ((e.target.id === "todo-input") & (e.which === 13)) {
    fire({ type: "ADD_TODO", text: e.target.value });
    updateLocalStorage();
    e.target.value = "";
  }
}

function toggle(e) {
  if (e.target.classList.contains("todo-item")) {
    fire({ type: "TOGGLE", id: e.target.id });
    updateLocalStorage();
  }
}

function scaleDown(e) {
  if (e.target.classList.contains("todo-item")) {
    e.target.style.transform = "scale(1) translateX(0)";
  }
}

function scaleUp(e) {
  if (e.target.classList.contains("todo-item")) {
    e.target.style.transform = "scale(1.1) translateX(20px)";
  }
}

function updateLocalStorage() {
  const { list } = data();
  localStorage.setItem("list", JSON.stringify(list));
}
