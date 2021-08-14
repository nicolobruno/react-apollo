import React, { Fragment } from 'react';
import { useQuery } from '@apollo/client';
import { useParams, Link } from "react-router-dom";

import { GET_COUNTRY_BY_CODE } from '../../queries';
import './styles.css'

const Country = () => {
    const { code } = useParams();
    const { loading, error, data } = useQuery(GET_COUNTRY_BY_CODE, {
        variables: { code },
      });
    return (
        <div className="container-country">
            <div className="container-card">
                {loading && <p>Loading ...</p>}
                {error && <Link to="/countries">back</Link>}
                {data && data.country && (
                    <Fragment>
                        <div className="container-title">
                            <Link to="/countries">back</Link>
                            <h1 className="title">{data.country.name}</h1>
                            <h3 className="sub-title">{data.country.emoji}</h3> 
                        </div>
                        <h4 className="item">{data.country.capital}</h4>
                        <h4 className="item">{data.country.continent.name}</h4>
                        <h4 className="item">{data.country.native}</h4>
                        <h4 className="item">{data.country.currency}</h4>
                        <h4 className="item">Languages:</h4>
                        <ul>
                            {data.country.languages.map(elem => (
                                <li>{elem.name}</li>
                            ))}
                        </ul>
                    </Fragment>
                )}
            </div>
        </div>
    )
}

export default Country
