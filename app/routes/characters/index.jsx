import { getCharacters } from "~/assets/api/characters";

import { useLoaderData } from "remix";

export let loader = async () => {
  return getCharacters();
};

export default function Characters() {
  let characters = useLoaderData();
  return (
    <div>
      <h1>{characters.length}</h1>
      {characters.map((character) => (
        <div key={character.id}>
          <img
            src={character.image}
            alt={character.name}
            className="w-30 h-30"
          />
          <p>{character.name}</p>
        </div>
      ))}
    </div>
  );
}
