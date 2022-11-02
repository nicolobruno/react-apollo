import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { GET_CHARACTER_BY_IDS } from '../../queries';
import CharacterDetail from './components/CharacterDetail';
import { ReactComponent as BackArrow } from "../../assets/arrow-back.svg";
import "./styles.css";

const Character = () => {
    const { id } = useParams<{id?: string}>();
    const { data, loading } = useQuery(GET_CHARACTER_BY_IDS, { variables: { ids: id}});

    return (
        <div className="container">
            <Link to='/'><BackArrow className="back-arrow"/></Link>
            <CharacterDetail data={data} loading={loading} size="25px" color="lightcoral" />
        </div>
    );
}

export default Character;