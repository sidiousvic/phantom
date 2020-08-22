# **Phantom**

![](https://github.com/sidiousvic/phantom/workflows/build/badge.svg) [![npm version](https://badge.fury.io/js/%40sidiousvic%2Fphantom.svg)](https://badge.fury.io/js/%40sidiousvic%2Fphantom) [![install size](https://badgen.net/packagephobia/install/@sidiousvic/phantom)](https://packagephobia.com/result?p=%40sidiousvic%2Fphantom)

### A state—reactive DOM rendering engine for building UIs. 👻

### `npm i @sidiousvic/phantom`

<img src="https://i.imgur.com/0o2ZFjo.gif" width="250">

#### Phantom lets you build state—reactive UIs using raw HTML strings ejected from functions.

```js
export default function Pizza(slices) {
  return `
    <div id="pizza-box">
      <h1 data-phantom="${slices}" id="slices-h1">${slices}</h1>
    </div>
  `;
}
```

#### You update state via actions, and Phantom swaps DOM nodes for you.

```js
phantomStore.fire({ type: "EAT_PIZZA" });
```

<br>

### 🚀 [Get launched](#get-launched)

### 🍕 [Data management](#data-management)

### ❓ [FAQ](#faq)

### 🔧 [Developers](#developers)

### 👻 [Examples](#examples)

<br>

# 💥 <a name="get-launched">Get launched</a>

### 1. Write an entry Phantom component

In Phantom, components are functions that return HTML template literals.

<details>
<summary><b>Show code ↯</b></summary>
  
<br>

Template strings allow you to inject dynamic data (including other components) via template literal placeholders `${}`.

```js
export default function phantomComponent() {
  const slices
  return `
    <div id="pizza-box">
      <h1 id="slices-h1">🍕</h1>
    </div>
  `;
}

```

<br>

| 👻 &nbsp; We recommend the [`leet-html` VSCode extension](https://marketplace.visualstudio.com/items?itemName=EldarGerfanov.leet-html) for HTML string highlighting. |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |


<br>

</details>

### 2. Create a Phantom store

Use `createPhantomStore` to produce your store.

<details>
<summary><b>Show code ↯</b></summary>
  
<br>

```js
import { createPhantomStore } from "@sidiousvic/phantom";

const data = { slices: ["🍕", "🍕", "🍕"] };

function reducer(state = data, action) {
  switch (action.type) {
    case "EAT_SLICE": // remove a slice from array
      return { ...state, slices: state.slices.slice(0, -1) };
    default:
      return state;
  }
}

const phantomStore = createPhantomStore(reducer);

export default phantomStore;
```

</details>

### 3. Initialize Phantom and `appear()`

Start the Phantom engine by feeding it a component and a store.

<details>
<summary><b>Show code ↯</b></summary>
  
<br>

```js
import phantom from "@sidiousvic/phantom";
import phantomComponent from "./phantomComponent.js";
import phantomStore from "./phantomStore.js";

const { appear } = phantom(phantomComponent, phantomStore);

appear(); // 3, 2, 1... 💥 initial render!
```

Phantom will expose the `appear` method. 💥

`appear` will perform the initial DOM render on call, your UI's first _apparition_. 👻

</details>

<br>

# 🍕 <a name="data-management">Data management</a>

Components are cool and all, but what if we want to use dynamic data?

What if we want our UI to _react_ to data changes?

Phantom integrates with a Redux—like store to subscribe the DOM to state updates.

### 1. Initialize Phantom.

<details>
<summary><b>Show code ↯</b></summary>
  
<br>

Pass Phantom a **component** and a **store**.

```js
import phantom from "@sidiousvic/phantom";
import phantomComponent from "./phantomComponent.js";
import phantomStore from "./phantomStore.js";

const { appear, data, fire } = phantom(phantomComponent, phantomStore);

appear(); // 3, 2, 1... 🚀 initial render!
```

Besides `appear`, Phantom exposes two more handy methods, `data` and `fire`.

We can use them to retrieve and update data from the Phantom store.

</details>

### 2. Use `data` to read state from the Phantom store.

<details>
<summary><b>Show code ↯</b></summary>
  
<br>

`data` returns the current in—store _data_.

```js
const { slices } = data(); // where data = { slices: ["🍕","🍕","🍕"] }
```

Data can be passed as arguments to child components.

```js
function phantomComponent() {
  const { slices } = data();
  return `
    ${Pizza(slices)}
  `;
}
```

You can use [template literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) placeholders to inject pieces of state into a component.

```js
export default function Pizza(slices) {
  return `
    <div id="pizza-box">
      <h1 data-phantom="${slices}" id="slices-h1">${slices}</h1>
    </div>
  `;
}
```

</details>

### 3. Use `fire` to dispatch an action and trigger a state update and rerender.

<details>
<summary><b>Show code ↯</b></summary>
  
<br>

An action is an object with a `type` key and optional data payload.

`fire` takes an action and dispatches it to the `phantomStore`, triggering a state change.

Phantom will update the DOM on every **`fire(action)`**.

```js
document.addEventListener("click", eatPizza);

function eatPizza(e) {
  if (e.target.id === "slices-h1") {
    fire({ type: "EAT_PIZZA" }); // DOM will update
  }
}
```

</details>

### 4. Subscribe a component to data changes

<details>
<summary><b>Show code ↯</b></summary>
  
<br>

Phantom can perform DOM differentiation and swap only the nodes whose state has updated. To activate this behavior,

```js
return `<element data-phantom="${yourData}">${yourData}</element>`;
```

- [x] Include a `data-phantom` attribute with the piece(s) of state that you want to subscribe to.
- [x] An id attribute.

Phantom will look at at both the `data-phantom` and `id` attributes in order to compute if a DOM node has to be repainted.

| ⚠️ &nbsp; If you don't do this, Phantom will repaint the entire DOM on data updates. |
| :----------------------------------------------------------------------------------- |


</details>

<br>

# ❓ <a name="faq">FAQ</a>

### Why use Phantom ?

#### A baby panda dies every time you choose a 1MB+\* industrial—level frontend framework to code a pomodoro clock or a personal portfolio page. 🐼

<details>
<summary><b>Show rationale ↯</b></summary>

#### You don't drive to the corner store, but walking is overrated. Phantom is the bike you need.

#### 🖍 Declarative

With Phantom, you can write markup in a declarative way ala JSX using raw HTML strings, and inject dynamic data using template literals—staying fully JS native.

No JSX, no complex API, no syntactic hyperglycemia.

#### 🍕 Component—based

Phantom lets you divide your UI into components, abstracting markup into composable functions.

#### 🧪 Reactive

The Phantom engine integrates with a store and subscribes to state updates. It swaps nodes when their data changes.

#### 👩🏾‍🏭 Closer to the DOM _metal_

Frameworks often abstract too much architecture and functionality out of the DOM. They make you yield too much to _their way_ of doing things—events, effects, styling, routing—you have to find the solutions withing _their_ ecosystem.

Phantom only helps with DOM rendering. It's convenient, but close enough to the DOM that you can integrate it with other solutions without using _fibers_, _combiners_ or _adapters_ of any kind.

<sub>\* unpacked size of ReactDOM is 3MB. Vue is 2.98MB. **Phantom is < 99 kB.**</sub>

</details>

### Does Phantom use a virtual DOM?

<details>
<summary><b>Show answer ↯</b></summary>

When a component's data changes, Phantom will re—render that node in the DOM by diffing an internal **PhantomDOM**, a map representation of the DOM.

</details>

### Is Phantom XSS secure?

<details>
<summary><b>Show answer ↯</b></summary>

**Yes.** Phantom uses the internal **[PhantomExorciser](./src/exorciser)** to sanitize HTML strings before injecting them into the DOM.

</details>

<br>

# 🔧 <a name="developers">Developers</a>

Phantom is written and built using Typescript.

## ⌨️ Scripts

- [x] **`npm run build`**  
       generates a static build in `dist/` .

- [x] **`npm run test`**  
       runs the tests located in `spec`.

- [x] **`npm run example/<example-name>`**  
       runs an example app from `examples/`

### If you find a 🐞, please **[file an issue](https://github.com/sidiousvic/phantom/issues)**.

## 👩🏽‍🔧 Contributing

We are always psyched to welcome contributors to Phantom.

Feel free to **[raise issues](https://github.com/sidiousvic/phantom/issues)**, **[ask questions](mailto:vic@sidiousvic.dev)** or fork the project and play with it.

If you want to submit a contribution, please read our

#### 👷🏽‍♂️ [Contribution Guidelines](./CONTRIBUTING.md)

Phantom is maintained regularly by [@sidiousvic](https://github.com/sidiousvic) and [@nayelyrodarte](https://github.com/nayelyrodarte).

<br>

# 👻 <a name="examples">Examples</a>

There are several [examples](./examples) you can run, each furnished with their own `devServer` configuration.

<a href="https://codesandbox.io/s/phantompizza-668sj" target="_blank"><img style="border-radius: 5px;" src="./examples/pizza/pizza.gif" width="30%"></a> <a href="https://codesandbox.io/s/phantomtodo-n1mfq" target="_blank"><img style="border-radius: 5px;" src="./examples/todo/todo.gif" width="30%"></a> <a href="https://codesandbox.io/s/phantomcalculator-fifgn" target="_blank"><img style="border-radius: 5px;" src="./examples/calculator/calculator.gif" width="30%"></a>

### Phantom in [CodeSandbox](https://codesandbox.io/s/phantomcalculator-fifgn)

Click on one of the images above to be taken to an online sandbox.

Devs who have cloned Phantom may use **`npm run example/[example name]`** and navigate to the url that appears in their terminal.

<br>

### <img src="https://media.giphy.com/media/jjBmeA29nxCrm/giphy.gif" width="40px"> Phantom is built with love and pepperoni by [@sidiousvic](https://www.github.com/sidiousvic)

<br>

<span style="float: right">[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/T6T81Y1BK)</span>
