import { fire, data } from "./index";

// utility export functions
export function trash(e) {
  if (e.target.classList.contains("trash")) {
    fire({ type: "TRASH", id: e.target.parentElement.id });
    updateLocalStorage();
  }
}

export function addTodo(e) {
  if ((e.target.id === "todo-input") & (e.which === 13)) {
    fire({ type: "ADD_TODO", text: e.target.value });
    updateLocalStorage();
    e.target.value = "";
  }
}

export function toggle(e) {
  if (e.target.classList.contains("todo-item")) {
    fire({ type: "TOGGLE", id: e.target.id });
    updateLocalStorage();
  }
}

export function scaleDown(e) {
  if (e.target.classList.contains("todo-item")) {
    e.target.style.transform = "scale(1) translateX(0)";
  }
}

export function scaleUp(e) {
  if (e.target.classList.contains("todo-item")) {
    e.target.style.transform = "scale(1.1) translateX(20px)";
  }
}

export function setListFromLocalStorage() {
  const listStorage = localStorage.getItem("list");
  if (listStorage) {
    fire({ type: "SET_LIST_FROM_LS", list: JSON.parse(listStorage) });
  }
}

function updateLocalStorage() {
  const { list } = data();
  localStorage.setItem("list", JSON.stringify(list));
}
