import React, { useState, useEffect, useContext } from 'react';
import { useQuery } from '@apollo/client';
import InfiniteScroll from "react-infinite-scroll-component";

import { GET_CHARACTERS } from '../../queries';
import { Character, CharacterType } from '../Character'
import Filters from '../Filters';
import Loader from '../Loader';
import { GlobalContext } from '../../context';
import { Actions } from '../../context/actions';
import { FilterType } from '../../context/reducer';
import logo from '../../images/logo.png';

import './styles.css';

const Characters = () => {
    const { state, dispatch } = useContext(GlobalContext);
    const [ page, setPage ] = useState<number>(1);
    const [ items, setItems ] = useState<CharacterType[] | []>([])
    const { data, loading } = useQuery(GET_CHARACTERS, { variables: { page: page, filter: { ...state.filters }}}); 

    useEffect(() => {
        if (data && data.characters.results) {
            setItems(prevState => [...prevState, ...data.characters.results]);
        }
    }, [ data ])

    const hasMore = () => {
       return data && (page < data.characters.info.pages);
    }

    const resetFilters = () => {
        dispatch({ type: Actions.Set, payload: { filters: { name: '', species: '' }}});
        setPage(1);
    }

    const handleOnClick = (filters: FilterType) => {
        dispatch({ type: Actions.Set, payload: { filters }});
        setPage(1);
    }
    
    return (
        <div className="container-general">
            <img src={logo} className="logo" alt="logo Ricky and Morty" onClick={resetFilters} />
            <Filters handleOnClick={handleOnClick} filters={state.filters} />
            {items && items.length > 0 && (
                <InfiniteScroll
                    dataLength={items.length}
                    next={() => setPage(page + 1)}
                    hasMore={hasMore()}
                    loader={<Loader color="gray" size={30} loading={loading} />}
                >
                    <div className="container-characters">
                        {items.map((elem: CharacterType) => (
                            <Character character={elem} />
                        ))}
                    </div>
                </InfiniteScroll>
            )}
            {items && items.length === 0 && !loading && <span className="messageNoResults">Ups !! Try again !!</span>}
        </div>
    )
}

export default Characters
