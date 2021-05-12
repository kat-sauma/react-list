import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

function CharacterList({ characters }) {
    return (
        <ul aria-label='characters'>
            { characters.map((character) => (
                <li key={character.id}>
                    <Character
                        id={character.id}
                        name={character.name}
                        status={character.status}
                        image={character.image}
                        />
                </li>
            )) }
        </ul>
    );
}

CharacterList.propTypes = {
    characters: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default CharacterList;
