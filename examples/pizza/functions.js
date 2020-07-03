import { fire, data } from "./index";

export function eatSlice(e) {
  if (e.target.classList.contains("slice")) {
    fire({ type: "EAT_SLICE", id: e.target.id });
    if (allSlicesEaten()) fire({ type: "SATISFIED" });
  }
}

export function changeCursorToGrabbing(e) {
  e.target.style.cursor = "grabbing";
}

export function changeCursorToGrab(e) {
  e.target.style.cursor = "grab";
}

export function resetPizzas(e) {
  if (e.target.innerText === "😋") {
    fire({ type: "RESET_SLICES" });
  }
}

function allSlicesEaten() {
  const { slices } = data();
  const emojis = slices.map((slice) => slice.emoji);
  return emojis.filter((emoji) => emoji === "🍕").length < 1;
}
