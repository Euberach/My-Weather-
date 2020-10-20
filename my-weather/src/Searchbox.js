import React from 'react';

function Searchbox( {setQuery, query }) {
    return (
        <div className="search-box1">
          <input
            type="text"
            className="search-bar"
            placeholder="Search any city..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
        </div>
    )
}

export default Searchbox;
