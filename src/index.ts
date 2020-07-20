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
phantom.createPhantomStore = createPhantomStore;
export default phantom;
