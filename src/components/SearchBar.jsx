import React from 'react'
import Button from './Button'

const SearchBar = (props)  => {
    return(
        <div className='search-form'>
            <div className='search-field'>
            <label>Search For a Movie!</label>
            <input
                className='search-input'
                value={props.keyword}
                onChange={e=> props.updateKeyword(e.target.value)}
            />
            </div>
            <div className='search-button'>
                <Button handleClick={() =>  props.searchMovies(props.keyword)} content="Search"/>
            </div>
        </div>
    )
}

export default SearchBar