/*
 * This is an adaptation of Alok Menghrajani's HTML sanitizer, by sidiousvic.
 https://www.quaxio.com/html_white_listed_sanitizer/
 * Takes a potentiallyDangerousHTML string, returns a sanitized node.
 */

import { allowedTags, allowedCSS } from "./allowed";

function sanitizeNode(node: HTMLElement) {
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

    throw new Error(
      `🚫Potentially dangerous node, <${nodeName}>. Phantom has destroyed it. If you think this is a mistake, please raise an issue at: https://github.com/sidiousvic/phantom/issues`
    );
  }

  const sanitizedNode = doc.createElement(nodeName);

  // re-inject allowed attributes
  for (
    let nodeAttributes = 0;
    nodeAttributes < node.attributes.length;
    nodeAttributes++
  ) {
    const attributeName = node.attributes.item(nodeAttributes)?.name as string;
    if (allowedTags[nodeName].hasOwnProperty(attributeName)) {
      const sanitizer = allowedTags[nodeName][attributeName];
      sanitizedNode.setAttribute(
        attributeName,
        sanitizer(node.getAttribute(attributeName)) as string
      );
    }
  }

  // re-inject allowed css
  for (let css in allowedCSS) {
    sanitizedNode.style[allowedCSS[css]] = node.style[allowedCSS[css]];
  }

  // recursively sanitize childNodes
  while (node.childNodes.length > 0) {
    const child = node.removeChild(node.childNodes[0]);
    sanitizedNode.appendChild(sanitizeNode(child as HTMLElement));
  }
  return sanitizedNode;
}

export default function sanitizeHTML(potentiallyDangerousHTML: string) {
  const doc = document.implementation.createHTMLDocument();

  const div = doc.createElement("div");
  div.innerHTML = potentiallyDangerousHTML;

  return (sanitizeNode(div) as HTMLElement).innerHTML;
}
