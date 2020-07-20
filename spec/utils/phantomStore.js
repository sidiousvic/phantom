import { createPhantomStore } from "../../lib/phantom";

const data = {
  title: "VIC SIDIOUS",
};

function reducer(state = data, action) {
  switch (action.type) {
    case "TOGGLE_TITLE":
      const title =
        state.title === "VIC SIDIOUS" ? "JUST DO SHIT" : "VIC SIDIOUS";
      return { ...state, title };
    default:
      return state;
  }
}

const store = createPhantomStore(reducer);

export default store;
