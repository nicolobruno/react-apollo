import React from 'react'

import ModalFilters from './components/Modal'
import './styles.css'

const Search:React.FC<any> = ({ handleOnClick, filters }) => {

  const handleSubmitSearch = (filters: any) => {
    handleOnClick(filters);
  }

  const filteByWithText = filters && Object.values(filters).reduce((accum: any, elem, i) => {
    const isTheFinal = Object.values(filters).length === i + 1;
    if (elem !== '') {
      const word = !isTheFinal ? `${elem} | ` : `${elem}`;
      return [...accum, word];
    } else {
      return accum;
    }
  },[]);

  return (
    <div className="containerSearch">
        {filteByWithText && filteByWithText.length > 0 && (
          <div className="containerFilters">
            <span className="text">Filter by:</span>
            <span className="filters">{filteByWithText}</span>
          </div>
        )}
      <ModalFilters handleSubmitSearch={handleSubmitSearch} />
    </div>
  )
}

export default Search