import {
  PhantomStoreCreator,
  PhantomStore,
  FireFunction,
} from "./phantomStore";

export type PhantomElement = {
  tagName: string;
  attributes: { id?: string | number; class?: string | DOMTokenList };
  children: PhantomElement[] | [];
  innerHTML: string;
  dataset?: DOMTokenList | {};
};

export type PhantomComponent = {
  (): string;
};

export type PhantomDOM = {
  [key: string]: PhantomElement;
};

export type Phantom = {
  (phantomStore: PhantomStore, phantomElement: PhantomComponent): {
    fire: FireFunction;
    data: () => any;
    appear: () => HTMLElement;
  };
  createPhantomStore: PhantomStoreCreator;
};
