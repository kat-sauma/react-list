export const findCharacters = async () => {
    const res = await fetch('https://rickandmortyapi.com/api/character');
    const { results } = await res.json();

    return results.map((character) => ({
        id: character.id,
        name: character.name,
        status: character.status,
        image: character.image
    }));
};

export const findCharacterById = async (id) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const character = await res.json();

    return {
        image: character.image,
        name: character.name,
        species: character.species,
        status: character.status,
        episode: character.episode
    }
}