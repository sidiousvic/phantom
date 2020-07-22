/*
 * This is an adaptation of Alok Menghrajani's HTML sanitizer by sidiousvic.
 
 https://www.quaxio.com/html_white_listed_sanitizer/

 * Takes a potentiallyDangerousHTML string, returns a sanitized (exorcised) node.
 */

import exorciseNode from "./utils/exorciseNode";

export default function phantomExorciser(potentiallyDangerousHTML: string) {
  const doc = document.implementation.createHTMLDocument();

  const div = doc.createElement("div");
  div.innerHTML = potentiallyDangerousHTML;

  return (exorciseNode(div) as HTMLElement).innerHTML;
}
