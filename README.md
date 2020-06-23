# phantom

### A Redux powered, state—reactive DOM rendering engine. 👻

`npm i @sidiousvic/phantom redux`

<img width=200 src="https://media.giphy.com/media/gGehV1zB72ijQoSFtF/giphy.gif">

`phantom` lets you template HTML using functional components.

```
export default function Pizza(slices)  {
    return `
      <div id="pizza-box">
        <h1 data-phantom="${slices}" id="slices-h1">${slices}</h1>
      </div>
    `;
}
```

You change the data via Redux actions, and `phantom` swaps DOM nodes for you.

<br>
<br>

# 🚀 Get launched

## I. Create a Redux Store

`phantom` will couple with **Redux** to subscribe DOM rendering to state updates.

```
import { createStore } from "redux";

const data = {
  slices: ["🍕", "🍕","🍕"],
};

function reducer(state = data, action) {
  switch (action.type) {
    case "EAT_SLICE":
      // remove a slice from array
      return  {...state,  slices: state.slices.slice(0,-1)};
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
```

<br>

## II. Write a phantomDOM component

```
function phantomElement() {
  return `
    ${Pizza()} // inject the Pizza component from above
  `;
}
```

`phantomDOM` components are functions that return HTML template strings. This allows you to inject dynamic data via template literals `${}`.

The [`leet-html`](https://marketplace.visualstudio.com/items?itemName=EldarGerfanov.leet-html) extension for VSCode is recommended for HTML template highlighting.

<br>

## III. Initialize `phantom`

    import phantom from "@sidiousvic/phantom";
    import reduxStore from "./reduxStore.js"
    import Pizza from "./ui/Pizza.js"

    export const {fire, data, launch } = phantom(reduxStore, phantomElement);

    launch(); // initial render

`phantom` will expose three key methods after being initialized with the `reduxStore` and a `phantomElement`: `fire`, `data`, and `launch`.

`fire` and `data` are only syntactic pointers to the `reduxStore`'s `dispatch` and `getState` methods respectively. **You are welcome to avoid them and call the store directly for action dispatching and state getting.**

`launch` will perform the initial DOM render on call.

<br>
<br>

# 🍕 Data Management

### Use `data` to read data from the store.

```
function phantomElement() {
  const  {  slices  }  =  data();
  return `
    ${Pizza(slices)}
  `;
}
```

### Pass data as arguments to components, and use them in your HTML templating.

```
export default function Pizza(slices)  {
  return `
    <div id="pizza-box">
      <h1 data-phantom="${slices}" id="slices-h1">${slices}</h1>
	</div>
  `;
}
```

### ⚠️ Bind an element to its data with the `data-phantom` attribute.

`<h1 data-phantom="${slices}" id="slices-h1">${slices}</h1>`

In order for `phantom` to be reactive to data changes, you need to pass a `data-phantom="${yourData}"` attribute to bind an **element whose `innerHTML` would change if data is updated**, as shown in the example above.

### Use `fire` to fire an action and trigger a state update + re—render.

```
document.addEventListener("click", eatPizza);

function eatPizza(e)  {
  if  (e.target.id === "slices-h1")  {
    fire({ type: "EAT_PIZZA" }); //
  }
}
```

<br>
<br>

# ❓ FAQ

## Does `phantom` use a virtual DOM?

When a component's data changes, `phantom` will re—render that node in the DOM by diffing its internal **PseudoDOM**, an object representation of the DOM.

## Why use `phantom` ?

A baby panda dies every time you choose a 1MB+\* industrial—level frontend framework to code a pomodoro or a personal portfolio page.

Are you a baby panda murderer?

<sub>\*unpacked size</sub>
