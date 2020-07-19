// functions
import createPhantomStore from "./createPhantomStore";
import phantom from "./phantom";

// types
// phantomDOM
export { PhantomElement, XDOMFunction, PhantomDOM } from "./types/phantomDOM";

// phantomStore
export {
  PhantomAction,
  PhantomReducer,
  Subscription,
} from "./types/phantomStore";

export { createPhantomStore };

export default phantom;
