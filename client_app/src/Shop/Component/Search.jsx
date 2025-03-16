import React, { useState } from 'react';

function Search() {
    const [search, setSearch] = useState('');

    const onChangeText = (e) => {
        setSearch(e.target.value);
    };

    return (
        <form action="#">
            <input
                type="text"
                className="li-search-field"
                placeholder="search here"
                value={search}
                onChange={onChangeText}
            />
            <button type="submit" className="li-search-btn" disabled={true}>
                <i className="fa fa-search"></i>
            </button>
        </form>
    );
}

export default Search;
