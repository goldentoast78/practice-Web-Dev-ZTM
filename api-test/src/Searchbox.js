import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return(
        <div className='pa3'>
        <input 
        className='pa3 ba b--green bg-light=blue'
        type='search'
        placeholder='input from 1 to 100' 
        onChange={searchChange}
        />
        </div>
    );
}

export default SearchBox;