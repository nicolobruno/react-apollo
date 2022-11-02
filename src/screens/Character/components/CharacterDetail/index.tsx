import React from 'react';

import ImageLazy from '../../../../components/ImageLazy';
import { CharacterType } from '../../../../components/CharacterCard/types';
import withLoading from '../../../../hocs/withLoading';
import './styles.css';

interface Props {
    data?: any,
    loading?: boolean,
    color: string,
    size: string
}

const CharacterDetail = ({ data, loading, color, size }: Props) => {
    return (
        data && (
            data.charactersByIds.map((elem: CharacterType) => (
                <div className="container-character">
                    {elem.image && (
                        <ImageLazy src={elem.image} alt="character" className="picture" delayTime={0} />
                    )}
                    <div className="container-name">
                        <h2 className="name">{elem.name}</h2>
                    </div>
                    <div className="container-body">
                        <span className="item"><b>Status:</b>{` ${elem.status}`}</span>
                        <span className="item"><b>Gender:</b>{` ${elem.gender}`}</span>
                        <span className="item"><b>Type:</b>{` ${elem.type}`}</span>
                        <span className="item"><b>Specie:</b>{` ${elem.species}`}</span>
                        <span className="item"><b>Origin:</b>{` ${elem.origin && elem.origin.name}`}</span>
                        <span className="item"><b>Dimension:</b>{` ${elem.origin && elem.origin.dimension}`}</span>
                    </div>
                </div>
            ))
        )
    )
}

export default withLoading(CharacterDetail);