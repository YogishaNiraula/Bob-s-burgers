export async function getCharacters() {
  // const searchCharacters = !character ? "remix-run" : character;
  let response = await fetch(
    `https://bobsburgers-api.herokuapp.com/characters/`,
  );
  console.log(response);
  return response;
}
