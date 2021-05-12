import React from 'react'
import PropTypes from 'prop-types'

function Character({ id, name, status, image }) {
    return (
        <>
            <img src={image} alt={name} />
            <p>{name}</p>
            <p>{status}</p>
            <p>{id}</p>
        </>
    )
}

Character.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default Character;

