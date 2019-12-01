import React from 'react';

const SearchBox = ({searchChangeAsProp}) => {
    return (
        <div className='pa2'>
            <input className='pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='Search Robots' 
                onChange={searchChangeAsProp}
            />
        </div>
    );
}

export default SearchBox;