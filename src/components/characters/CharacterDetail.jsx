import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CharacterDetail( {
        image, 
        name, 
        species, 
        status, 
        location, 
        episode 
}) {
    return (
        <><Link to={`/`}>
            <li>
                <img src={image} alt={name} />
                <p>{name}</p>
                <p>{species}</p>
                <p>{status}</p>
                <p>{location}</p>
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