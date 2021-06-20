import { fire, data } from "./index";

const fetchOnePoke = () => {
  const {
    nextPoke: { id },
  } = data();
  let randomNum = Math.floor(Math.random() * 151 + 1);
  randomNum === id && (randomNum = Math.floor(Math.random() * 151 + 1));
  return new Promise(async (resolve, reject) => {
    const fetchedRaw = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomNum}`
    );
    const fetchedParsed = await fetchedRaw.json();
    resolve(fetchedParsed);
  });
};

export async function initialFetch(e) {
  const currentPoke = await fetchOnePoke();
  const nextPoke = await fetchOnePoke();

  fire({
    type: "SET_INITIAL_POKE",
    currentPoke: {
      id: currentPoke.id,
      name: currentPoke.name,
    },
    nextPoke: {
      id: nextPoke.id,
      name: nextPoke.name,
    },
  });
}

export async function fetchNext({ target: { id } }) {
  if (id === "curr-poke-name" || id === "curr-poke-img") {
    const nextPoke = await fetchOnePoke();
    fire({
      type: "SET_NEXT_POKE",
      nextPoke: {
        id: nextPoke.id,
        name: nextPoke.name,
      },
    });
  }
}
