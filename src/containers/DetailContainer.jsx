import React, { Component } from 'react'
import CharacterDetail from '../components/characters/CharacterDetail';
import { findCharacterById } from '../services/rmApiCalls';

export default class DetailContainer extends Component {
    state = {
        character: { }
    }

    async componentDidMount() {
        const { id } = this.props.match.params;

        const character = await findCharacterById(id);

        this.setState({
            character
        });
    }
    render() {
        console.log(this.state.character, 'hi');
        const { character } = this.state;
        return <CharacterDetail character={character} />;
    }
}


