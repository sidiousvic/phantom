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
  const { list } = data();
  return `
    ${TodoList(list)}
  `;
}

function TodoList(list) {
  // event listeners
  document.addEventListener("click", toggle);
  document.addEventListener("mousedown", changeCursorToGrabbing);
  document.addEventListener("mouseup", changeCursorToPointer);
  const todoItems = list.map((item, i) => {
    return `
      <h1 data-phantom="${item.done}" class="todo-item" id="${i}">${
      item.done ? "✅&nbsp;&nbsp;&nbsp;" : "❌&nbsp;&nbsp;&nbsp;"
    }${item.text}</h1>`;
  });

  return `
    <div data-phantom="list" id="todo-list-div">
    <h1>To-do</h1>
      ${todoItems}
    </div>
  `;
}

function toggle(e) {
  if (e.target.classList.contains("todo-item")) {
    fire({ type: "TOGGLE", id: e.target.id });
  }
}

function changeCursorToGrabbing(e) {
  if (e.target.classList.contains("todo-item")) {
    e.target.style.transform = "scale(1) translateX(0)";
  }
}

function changeCursorToPointer(e) {
  if (e.target.classList.contains("todo-item")) {
    e.target.style.transform = "scale(1.1) translateX(20px)";
  }
}
