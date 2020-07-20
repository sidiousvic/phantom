import phantom from "./phantom";
import createPhantomStore from "./createPhantomStore";
// types
export {
  PhantomElement,
  PhantomDOMFunction,
  PhantomDOM,
} from "./types/phantomDOM"; // phantomDOM
export {
  PhantomAction,
  PhantomReducer,
  Subscription,
} from "./types/phantomStore"; // phantomStore

export { createPhantomStore };
export default phantom;
