// phantomDOM
type PhantomElement = {
  tagName: string;
  attributes: { id?: string | number; class?: string | DOMTokenList };
  children: PhantomElement[] | [];
  innerHTML: string;
  dataset?: DOMTokenList | {};
};

type XDOMFunction = {
  (): [string, any];
};

type PhantomDOM = {
  [key: string]: PhantomElement;
};

// phantomExorciser
type AllowedTags = {
  [key: string]: {
    [key: string]: (attribute: string | null) => string | null;
  };
};

type AllowedCSS = string[string];

// phantomStore
interface PhantomAction<T = any> {
  type: T;
  [extraProps: string]: any;
}

type PhantomReducer = (state: S | undefined, action: PA) => S;

type Subscription = { <T>(...args: T): void };
