import { createPhantomStore } from "../../lib/phantom";

const initialState = {
  currentPoke: {},
  nextPoke: {},
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_INITIAL_POKE":
      return { currentPoke: action.currentPoke, nextPoke: action.nextPoke };
    case "SET_NEXT_POKE":
      return { currentPoke: state.nextPoke, nextPoke: action.nextPoke };
    default:
      return state;
  }
}

const phantomStore = createPhantomStore(reducer);
export default phantomStore;
