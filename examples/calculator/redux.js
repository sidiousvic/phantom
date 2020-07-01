import { createStore } from "redux";

// redux store
const initialState = {
  screen: ["0"],
  n1: null,
  state: "calculated",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ENTER_DIGIT":
      return { ...state, screen: [...state.screen, action.digit] };
    case "NEW_OPERATION":
      return {
        ...state,
        screen: [action.digit],
        n1: null,
        state: "idle",
      };
    case "REGISTER_N1":
      let n1 = parseFloat([...state.screen].join(""));
      return {
        ...state,
        screen: [],
        n1,
        operator: action.operator,
        state: "calculating",
      };
    case "CALCULATE":
      let result = [];
      let n2 = parseFloat(state.screen.join("")); // turn what's on the screen to n2
      if (isNaN(n2)) n2 = state.n1; // if no n2 was selected, operate by itself
      switch (state.operator) {
        case "+":
          result = state.n1 + n2;
          break;
        case "-":
          result = state.n1 - n2;
          break;
        case "/":
          result = state.n1 / n2;
          break;
        case "*":
          result = state.n1 * n2;
          break;
      }
      return { ...state, screen: [result], n1: null, state: "calculated" };
    case "RESET":
      return { ...state, screen: ["0"], n1: null, state: "calculated" };
    default:
      return state;
  }
}

const reduxStore = createStore(reducer);
export default reduxStore;
