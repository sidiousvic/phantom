import {
  PhantomReducer,
  Subscription,
  PhantomAction,
} from "./types/phantomStore";

export default function createPhantomStore(reducer: PhantomReducer) {
  let state = reducer(undefined, {});
  const subscriptions: Subscription[] = [];

  return {
    data: () => state,
    fire: (action: PhantomAction) => {
      state = reducer(state, action);
      subscriptions.forEach((subscription) => subscription());
    },
    subscribe: (subscription: Subscription) => {
      subscriptions.push(subscription);
    },
  };
}
