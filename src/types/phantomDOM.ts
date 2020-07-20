export type PhantomElement = {
  tagName: string;
  attributes: { id?: string | number; class?: string | DOMTokenList };
  children: PhantomElement[] | [];
  innerHTML: string;
  dataset?: DOMTokenList | {};
};

export type PhantomDOMFunction = {
  (): string;
};

export type PhantomDOM = {
  [key: string]: PhantomElement;
};
