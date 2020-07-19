import { createPhantomStore } from "../../dist/phantom.js";

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
    case "SET_LIST_FROM_LS":
      return { ...state, list: action.list };
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

const phantomStore = createPhantomStore(reducer);
export default phantomStore;
