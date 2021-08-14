import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_COUNTRY_BY_CODE } from '../../queries';

function Country ({ code }) {
    const { loading, error, data } = useQuery(GET_COUNTRY_BY_CODE, { code });
    console.log(data)
    return (
        <div>
            {/* <h3>cuntry.</h3> */}
            
        </div>
    )
}

export default Country
