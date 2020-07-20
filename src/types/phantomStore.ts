export interface PhantomAction<T = any> {
  type: T;
  [key: string]: any;
}

export type PhantomReducer<S = any, PA extends PhantomAction = any> = (
  state: S | undefined,
  action: PA
) => S;

export type Subscription = () => void;

export type PhantomStore = {
  data: () => any;
  fire: (action: PhantomAction) => void;
  subscribe: (subscription: Subscription) => void;
};

export type FireFunction = (action: PhantomAction<any>) => void;
export type SubscribeFunction = (subscription: Subscription) => void;

export type PhantomStoreCreator = (
  reducer: PhantomReducer<any, any>
) => {
  data: () => any;
  fire: FireFunction;
  subscribe: SubscribeFunction;
};
