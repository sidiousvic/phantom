type PseudoNode = {
  tagName: string;
  attributes: { id: string; class: string | DOMTokenList };
  $children: PseudoNode[];
  innerHTML: string;
};

type XDOMFunction = {
  (): string;
};
