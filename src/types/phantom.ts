import { PhantomStore, FireFunction } from "./phantomStore";

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
  (phantomElement: PhantomComponent, phantomStore: PhantomStore): {
    fire: FireFunction;
    data: () => any;
    appear: () => HTMLElement;
  };
};
