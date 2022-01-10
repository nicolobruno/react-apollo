import React, { Fragment } from 'react';

import ImageLazy from '../ImageLazy'
import './styles.css'

const Character = ({ character }) => {
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
                            <span className="item"><b>Origin: </b>{character.origin.name}</span>
                            <span className="item"><b>Dimension: </b>{character.origin.dimension || 'unknown'}</span>
                        </div>
                        <ImageLazy className="picture"  src={character.image} alt="character" delayTime="0" />
                    </Fragment>
                )}
            </div>
        </div>
    )
}

export default Character
