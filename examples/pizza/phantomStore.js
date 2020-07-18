import { createPhantomStore } from "../../dist/phantom";

const initialState = {
  slices: [
    { emoji: "🍕", id: "slice0" },
    { emoji: "🍕", id: "slice1" },
    { emoji: "🍕", id: "slice2" },
  ],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "EAT_SLICE":
      const newSlices = state.slices.map((slice) => {
        if (slice.id === action.id) slice.emoji = "";
        return slice;
      });
      return { ...state, slices: newSlices };
    case "RESET_SLICES":
      const initialSlices = state.slices.map((slice) => {
        slice.emoji = "🍕";
        return slice;
      });
      return { ...state, slices: initialSlices };
    case "SATISFIED":
      const satisfiedSlices = state.slices.map((slice, i) => {
        if (i === 0) slice.emoji = "😋";
        return slice;
      });
      return { ...state, slices: satisfiedSlices };
    default:
      return state;
  }
}

const phantomStore = createPhantomStore(reducer);
export default phantomStore;
