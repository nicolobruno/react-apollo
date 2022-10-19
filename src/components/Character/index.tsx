import React, { Fragment } from 'react';

import ImageLazy from '../ImageLazy'
import './styles.css'

export interface Props {
    character: CharacterType
};

export interface CharacterType {
    id: number,
    name: string,
    status: string,
    species: string,
    origin: Origin,
    image: string
};

interface Origin {
    name: string, 
    dimension: string
};

export const Character = ({ character } : Props) => {
    return (
        <div className="container-character">
            <div className="container-card">
                {character && (
                    <Fragment>
                        <div className="container-name">
                            <h2 className="name">{character.name}</h2>
                        </div>
                        <div className="container-body">
                            <span className="item"><b>Status: </b>{character.status}</span>
                            <span className="item"><b>Specie: </b>{character.species}</span>
                            <span className="item"><b>Origin: </b>{character.origin && character.origin.name}</span>
                            <span className="item"><b>Dimension: </b>{character.origin && character.origin.dimension}</span>
                        </div>
                        {character.image && (
                            <ImageLazy src={character.image} alt="character" className="picture" delayTime={0} />
                        )}
                    </Fragment>
                )}
            </div>
        </div>
    )
}
