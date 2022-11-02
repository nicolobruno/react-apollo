import React from 'react';
import { Link } from 'react-router-dom';

import ImageLazy from '../ImageLazy';
import { Props } from './types';
import './styles.css'

const CharacterCard = ({ character } : Props) => {
    return (
        character && (
            <div className="container-character-card">
                <Link to={`/character/${character.id}`} className="container-card" style={{ textDecoration: 'none', color: 'gray' }}>
                    {character.image && (
                        <ImageLazy src={character.image} alt="character" className="picture" delayTime={0} />
                    )}
                    <div className="container-name">
                        <h2 className="name">{character.name}</h2>
                    </div>
                    <div className="container-body">
                        <span className="item"><b>Specie: </b>{character.species}</span>
                        <span className="item"><b>Origin: </b>{character.origin && character.origin.name}</span>
                        <span className="item"><b>Dimension: </b>{character.origin && character.origin.dimension}</span>
                    </div>
                </Link>
            </div>
        )
    )
}

export default CharacterCard;
