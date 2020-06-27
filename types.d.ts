type PseudoElement = {
  tagName: string;
  attributes: { id?: string | number; class?: string | DOMTokenList };
  children: PseudoElement[] | [];
  innerHTML: string;
  dataset?: DOMTokenList | {};
};

type XDOMFunction = {
  (): [string, any];
};

type pseudoDOM = {
  [key: string]: PseudoElement;
};
