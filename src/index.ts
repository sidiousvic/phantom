// functions
import createPhantomStore from "./createPhantomStore";
import phantom from "./phantom";

// types
export { PhantomElement, XDOMFunction, PhantomDOM } from "./types/phantomDOM"; // phantomDOM
export {
  PhantomAction,
  PhantomReducer,
  Subscription,
} from "./types/phantomStore"; // phantomStore

// API exports
export { createPhantomStore };
export default phantom;
