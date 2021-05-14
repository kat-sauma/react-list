import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CharacterDetail( {
        image, 
        name, 
        species, 
        status, 
        episode 
}) {
    return (
        <><Link to={`/`}>
            <li className='character-page' aria-label='character page'>
                <img src={image} alt={name} />
                <p>{name}</p>
                <p>{species}</p>
                <p>{status}</p>
                <p>{episode}</p>
            </li>
        </Link>
        </>
    )
}

CharacterDetail.propTypes = {
    character: PropTypes.object.isRequired
}

export default CharacterDetail;