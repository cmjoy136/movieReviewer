import React from 'react'

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
                <button onClick={()=> props.searchMovies(props.keyword)}>Search</button>
            </div>
        </div>
    )
}

export default SearchBar