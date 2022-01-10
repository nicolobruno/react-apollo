import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import InfiniteScroll from "react-infinite-scroll-component";

import { GET_CHARACTERS } from '../../queries';
import Character from '../Character'
import Filters from '../Filters'
import Loader from '../Loader'
import { useGlobalValue } from '../../context'
import { actionCreators } from '../../context/actions'

import './styles.css'

const Characters = () => {
    const [state, dispatch] = useGlobalValue();
    const [ page, setPage ] = useState(1)
    const [ items, setItems ] = useState([])
    const { data, loading } = useQuery(GET_CHARACTERS, { variables: { page: page, filter: { ...state.filters }}}); 

    useEffect(() => {
        if (data && data.characters.results) {
            setItems(oldData => [...oldData, ...data.characters.results]);
        }
    }, [ data ])

    const hasMore = () => {
        if (data && (page < data.characters.info.pages)) {
            return true
        }
        return false
    }

    const handleOnClick = ({ filters }) => {
        dispatch(actionCreators.setFilters(filters))
        setItems([])
        setPage(1)
    }
    
    return (
        <div className="container-general">
            <h2 className="title">Characters of Ricky and Morty</h2>
            <Filters handleOnClick={handleOnClick} filterBy={state.filters} />
            {items && (
                <InfiniteScroll
                    dataLength={items.length}
                    next={() => setPage(page + 1)}
                    hasMore={hasMore}
                    loader={<Loader size={30} color="gray" loading={loading} />}
                >
                    <div className="container-characters">
                        {items.map(elem =>
                            <Character key={`${elem.id}-${elem.name}`} character={elem} />
                        )}
                    </div>
                </InfiniteScroll>
            )}
            {items && items.length === 0 && !loading && <span className="messageNoResults">Ups !! Try again !</span>}
        </div>
    )
}

export default Characters
