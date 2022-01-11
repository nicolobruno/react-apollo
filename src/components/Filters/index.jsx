import React from 'react'

import ModalFilters from './components/Modal'
import './styles.css'

const Search = ({
  handleOnClick,
  filterBy
}) => {

  const handleSubmitSearch = (filters) => {
    handleOnClick({ filters: filters })
  }

  const handleOnChangeSpecies = (value) => {

  }

  const filteByWithText = filterBy && Object.values(filterBy).reduce((accum, elem, i) => elem !== '' ? [...accum, ` ${elem} `] : accum,[]);

  return (
    <div className="containerFilters">
      <div className="filters">
        {filteByWithText && <span className="text">Filter by:</span>}
        <span className="filterBy">{filteByWithText}</span>
      </div>
      <ModalFilters handleOnChangeSpecies={handleOnChangeSpecies} handleSubmitSearch={handleSubmitSearch} filterBy={filterBy} />
    </div>
  )
}

export default Search