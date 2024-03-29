import React, { useState, useContext } from 'react';
import ReactModal from 'react-modal';

import { GlobalContext } from '../../../../context';
import { FILTER_NAME, FILTER_SPECIES, CUTOMS_STYLES } from './constants';
import { useForm } from '../../../../hooks/useForm';
import { FILTER_BUTTON, FILTER_MODAL, FILTER_BUTTON_APPLY, FILTER_FORM } from './constants';

type Props = {
    handleSubmitSearch: Function
}

const ModalFilter = ({ handleSubmitSearch } : Props) => {
    const [isOpen, setOpenModal] = useState(false)
    const { state } = useContext(GlobalContext);
    const { dataForm, handleOnDataForm } = useForm({});

    const handleOnSubmit = () => {
        handleSubmitSearch(dataForm);
        setOpenModal(false);
    }

    return (
        <>
            <button className="buttonFilter" data-testid={FILTER_BUTTON} onClick={() => setOpenModal(true)}>Filters</button>
            <ReactModal 
                isOpen={isOpen}
                onRequestClose={() => setOpenModal(false)}
                ariaHideApp={false}
                style={CUTOMS_STYLES}
            >
                <div data-testid={FILTER_MODAL}>
                    <form
                        onSubmit={handleOnSubmit}
                        className="searchForm"
                        data-testid={FILTER_FORM}
                    >   
                        <div className="containerModal">
                            <h1 className="title">Apply Filters</h1>
                            <div className="input-container">
                                <input
                                    type="text"
                                    id={FILTER_NAME}
                                    data-testid={FILTER_NAME}
                                    defaultValue={state.filters && state.filters.name}
                                    className="field"
                                    onChange={(e) => handleOnDataForm(FILTER_NAME, e.target.value)}
                                />
                                <label htmlFor="name" className="input-label"> 
                                    <span className="input-label-name">Name</span> 
                                </label>
                            </div>
                            <div className="input-container">
                                <input
                                    type="text"
                                    id={FILTER_SPECIES}
                                    data-testid={FILTER_SPECIES}
                                    defaultValue={state.filters && state.filters.species}
                                    className="field"
                                    onChange={(e) => handleOnDataForm(FILTER_SPECIES, e.target.value)}
                                />
                                <label htmlFor="species" className="input-label"> 
                                    <span className="input-label-name">Species</span> 
                                </label>
                            </div>
                            
                        </div>
                        <button className="buttonFilter" data-testid={FILTER_BUTTON_APPLY} type="submit">Apply</button>
                    </form> 
                </div>
            </ReactModal>
        </>
    )
}

export default ModalFilter
