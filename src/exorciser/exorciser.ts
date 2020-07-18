/*
 * This is an adaptation of Alok Menghrajani's HTML sanitizer, by sidiousvic.
 https://www.quaxio.com/html_white_listed_sanitizer/
 * Takes a potentiallyDangerousHTML string, returns a sanitized (exorcised) node.
 */

import { allowedTags, allowedCSS } from "./allowed";

function exorciseNode(node: HTMLElement) {
  const doc = document.implementation.createHTMLDocument();

  const nodeName = node.nodeName.toLowerCase();
  if (nodeName == "#text") {
    return node; // let text nodes be
  }
  if (nodeName == "#comment") {
    return doc.createTextNode(""); // let comments die
  }

  // throw error in case of disallowed nodes
  if (!allowedTags.hasOwnProperty(nodeName)) {
    // ain't dealing with this node

    throw new Error(nodeName);
  }

  const exorcisedNode = doc.createElement(nodeName);

  // re-inject allowed attributes
  for (
    let nodeAttributes = 0;
    nodeAttributes < node.attributes.length;
    nodeAttributes++
  ) {
    const attributeName = node.attributes.item(nodeAttributes)?.name as string;
    if (allowedTags[nodeName].hasOwnProperty(attributeName)) {
      const sanitizer = allowedTags[nodeName][attributeName];
      exorcisedNode.setAttribute(
        attributeName,
        sanitizer(node.getAttribute(attributeName)) as string
      );
    }
  }

  // re-inject allowed css
  for (let css in allowedCSS) {
    exorcisedNode.style[allowedCSS[css]] = node.style[allowedCSS[css]];
  }

  // recursively sanitize childNodes
  while (node.childNodes.length > 0) {
    const child = node.removeChild(node.childNodes[0]);
    exorcisedNode.appendChild(exorciseNode(child as HTMLElement));
  }
  return exorcisedNode;
}

export default function phantomExorciser(potentiallyDangerousHTML: string) {
  const doc = document.implementation.createHTMLDocument();

  const div = doc.createElement("div");
  div.innerHTML = potentiallyDangerousHTML;

  return (exorciseNode(div) as HTMLElement).innerHTML;
}
