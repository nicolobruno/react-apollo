import React from 'react';
import { useQuery } from '@apollo/client';

import { GET_COUNTRIES } from '../../queries';
import './styles.css'

const Home = () => {
    const { loading, error, data } = useQuery(GET_COUNTRIES, {});

    if (loading) return <p>Loading ...</p>;

    return (
        <div>
            <h2>List Countires</h2>
            {error && <p>Ups! Something went wrong</p>}
            {data && (
                <div className="container-countries">
                    {data.countries.map(elem =>
                        <span key={elem.code} className="country">{elem.name}</span>
                    )}
                </div>
            )}
        </div>
    )
}

export default Home
