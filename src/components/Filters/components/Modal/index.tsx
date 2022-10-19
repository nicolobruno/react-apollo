import React, { useState, useContext } from 'react';
import ReactModal from 'react-modal';

import { GlobalContext } from '../../../../context';
import { FILTER_NAME, FILTER_SPECIES, CUTOMS_STYLES } from './constants';

type Props = {
    handleSubmitSearch: Function
}

const ModalFilter = ({ handleSubmitSearch } : Props) => {
    const [isOpen, setOpenModal] = useState(false)
    const { state } = useContext(GlobalContext);

    const handleOnSubmit = (event: any) => {
        const filterName = event.target[FILTER_NAME].value;
        const filterSpecie = event.target[FILTER_SPECIES].value;
        handleSubmitSearch({ name: filterName, species: filterSpecie })
        setOpenModal(false)
        event.preventDefault()
    }

    return (
        <>
            <button className="buttonFilter" onClick={() => setOpenModal(true)}>Filters</button>
            <ReactModal 
                isOpen={isOpen}
                onRequestClose={() => setOpenModal(false)}
                ariaHideApp={false}
                style={CUTOMS_STYLES}
            >
                <div>
                    <form
                        onSubmit={event => handleOnSubmit(event)}
                        className="searchForm"
                    >   
                        <div className="containerModal">
                            <h1 className="title">Apply Filters</h1>
                            <div className="input-container">
                                <input
                                    type="text"
                                    id={FILTER_NAME}
                                    defaultValue={state.filters && state.filters.name}
                                    className="field"
                                />
                                <label htmlFor="name" className="input-label"> 
                                    <span className="input-label-name">Name</span> 
                                </label>
                            </div>
                            <div className="input-container">
                                <input
                                    type="text"
                                    id={FILTER_SPECIES}
                                    defaultValue={state.filters && state.filters.species}
                                    className="field"
                                />
                                <label htmlFor="species" className="input-label"> 
                                    <span className="input-label-name">Species</span> 
                                </label>
                            </div>
                            
                        </div>
                        <button className="buttonFilter" type="submit">Apply</button>
                    </form> 
                </div>
            </ReactModal>
        </>
    )
}

export default ModalFilter
