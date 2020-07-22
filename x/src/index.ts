import phantom from "./phantom";
import createPhantomStore from "./createPhantomStore";
// types
export { PhantomElement, PhantomComponent, PhantomDOM } from "./types/phantom";
export {
  PhantomAction,
  PhantomReducer,
  Subscription,
} from "./types/phantomStore";

export { createPhantomStore };
export default phantom;
