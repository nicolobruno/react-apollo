import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import { GET_COUNTRIES } from '../../queries';
import './styles.css'

const Countries = () => {
    const { loading, error, data } = useQuery(GET_COUNTRIES, {}); 

    return (
        <div className="container-general">
            <h2 className="title">Countries of the world 🌎</h2>
            {loading && <p>Loading ...</p>}
            {error && <p>Ups! Something went wrong</p>}
            {data && (
                <div className="container-countries">
                    {data.countries.map(elem =>
                        <Link key={elem.code} className="country" to={`country/${elem.code}`}>{elem.name}</Link>
                    )}
                </div>
            )}
        </div>
    )
}

export default Countries
