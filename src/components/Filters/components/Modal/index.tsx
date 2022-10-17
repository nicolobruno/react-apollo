import React, { Fragment, useState, useContext } from 'react';
import ReactModal from 'react-modal';

import { GlobalContext } from '../../../../context'

const FILTER_NAME = 'name';
const FILTER_SPECIES = 'species';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      overflow: 'hidden'
    },
  };

const ModalFilter:React.FC<any> = ({ handleSubmitSearch }) => {
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
        <Fragment>
            <button className="buttonFilter" onClick={() => setOpenModal(true)}>Filters</button>
            <ReactModal 
                isOpen={isOpen}
                onRequestClose={() => setOpenModal(false)}
                ariaHideApp={false}
                style={customStyles}
            >
                <div>
                    <form
                        onSubmit={event => handleOnSubmit(event)}
                        className="searchForm"
                    >   
                        <div className="containerModal">
                            <h1 className="title">Apply Filters</h1>
                            <input
                                type="text"
                                id={FILTER_NAME}
                                defaultValue={state.filters && state.filters.name}
                                placeholder="Search by Name..."
                                className="field"
                            />
                            <input
                                type="text"
                                id={FILTER_SPECIES}
                                defaultValue={state.filters && state.filters.species}
                                placeholder="Search by Species..."
                                className="field"
                            />
                        </div>
                        <button className="buttonFilter" type="submit">Apply</button>
                    </form> 
                </div>
            </ReactModal>
        </Fragment>
    )
}

export default ModalFilter
