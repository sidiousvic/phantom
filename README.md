# phantom

### A Redux powered, state—reactive DOM rendering engine. 👻

### `npm i @sidiousvic/phantom`

![](https://media.giphy.com/media/gGehV1zB72ijQoSFtF/giphy.gif)

#### `phantom` lets you build state—reactive UIs using raw HTML in functional components.

```js
export default function Pizza(slices)  {
  return `
    <div id="pizza-box">
      <h1 data-phantom="${slices}" id="slices-h1">${slices}</h1>
    </div>
  `;
}
```

#### You update data via Redux, and `phantom` swaps DOM nodes for you.

<br>

# 🚀 Get launched



### 1. Create a Redux Store

`phantom` will couple with **Redux** to subscribe DOM rendering to state updates.

#### Install Redux `npm i redux`

<details>
<summary><b>Show code</b></summary>
	
```js
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
</details>

<br>

### 2. Write a `phantom` component

`phantom` components are functions that return HTML template strings. This allows you to inject dynamic data via template literals `${}`.

The [`leet-html`](https://marketplace.visualstudio.com/items?itemName=EldarGerfanov.leet-html) extension for VSCode is recommended for HTML template highlighting.

<details>
<summary><b>Show code</b></summary>

```js
function phantomComponent() {
  return `
    ${Pizza()} // inject the Pizza component from above
  `;
}
```
</details>

<br>

### 3. Initialize and `phantom.launch()`

Start the `phantom` engine with the `reduxStore` and a `phantomElement`.

<details>
<summary><b>Show code</b></summary>
	
```js
import phantom from "@sidiousvic/phantom";
import reduxStore from "./reduxStore.js"
import Pizza from "./ui/Pizza.js"

export const {fire, data, launch } = phantom(reduxStore, phantomElement);

launch(); // initial render
```

`phantom` will expose three key methods: `fire`, `data`, and `launch`.

`fire` and `data` are only syntactic pointers to the `reduxStore`'s `dispatch` and `getState` methods respectively. **You are welcome to avoid them and call the store directly for action dispatching and state getting.**

`launch` will perform the initial DOM render on call.
</details>

<br>

# 🍕 State

### Use `data` to read state from the Redux store.

```js
function phantomElement() {
  const  { slices }  =  data();
  return `
    ${Pizza(slices)}
  `;
}
```

### Pass data as arguments to components, and use them in your HTML templating.

```js
export default function Pizza(slices)  {
  return `
    <div id="pizza-box">
      <h1 data-phantom="${slices}" id="slices-h1">${slices}</h1>
	</div>
  `;
}
```

| ⚠️ &nbsp; Always bind an element to its data with the `data-phantom` attribute. |
| :----------------------------------------------------------------------------- |
| In order for `phantom` to be reactive to data changes, you need to pass a `data-phantom="${yourData}"` attribute to bind a stateful element—that is, an **element whose `innerHTML` would change if data is updated**—as shown in the example above. |

### Use `fire` to fire an action and trigger a state update + re—render.

```js
document.addEventListener("click", eatPizza);

function eatPizza(e) {
  if (e.target.id === "slices-h1") {
    fire({ type: "EAT_PIZZA" }); // fire an action to the store
  }
}
```

<br>

# ❓ FAQ

## Why use `phantom` ?

#### A baby panda dies every time you choose a 1MB+\* industrial—level frontend framework to code a pomodoro or a personal portfolio page. 🐼

### 🖍 Declarative

With `phantom`, you can write markup in a declarative way ala JSX using raw HTML strings, and inject dynamic data using template literals—staying fully JS native.

### 🍕 Component—based

`phantom` lets you divide your UI into components, abstracting markup into composable functions.

### 🧪 Reactive

The `phantom` engine integrates with your Redux store and subscribes to state updates. It swaps nodes when their data changes.

### 👩🏾‍🏭 Closer to the JS _metal_

`phantom` only helps with DOM rendering. Listeners, effects, style manipulation, routing—the _fun_ stuff—is still in your hands. 🙌🏼

You don't drive to the corner store,<sup>⌔</sup> but walking is overrated. `phantom` is the bike you need.

No JSX, no complex API, no syntactic hyperglycemia.

#### React is for React devs. Vue is for hipster devs. `phantom` is for JavaScript devs.<sup>○</sup><sup>∆</sup>

## Does `phantom` use a virtual DOM?

When a component's data changes, `phantom` will re—render that node in the DOM by diffing its internal **PseudoDOM**, an object representation of the DOM.

<sub>\* unpacked size of ReactDOM is 3MB. Vue is 2.98MB. **Phantom is 30.5 kB.**</sub>
<sub><sup>⌔</sup> Wait, you do? ..._Why?_</sub>
<sub><sup>○</sup> `phantom` users may be the hipsterest of them all.</sub>
<sub><sup>∆</sup> _Angular_? What is Angular?</sub>
