import React, { useState } from 'react';
import PropTypes from "prop-types"

const SearchForm = props => {
    const { onCitySearch } = props;
    const [searchText, setSearchText] = useState("");
    const handleInputChange = (event) => {
        setSearchText(event.target.value);

    };
    
    return (
        <div className="search-form">
            <input type="text"
                id="search"
                onChange={handleInputChange}
                value={searchText}
                placeholder="Check your location"
            />
            <button
                type="submit"
                onClick={() => onCitySearch(searchText)}
            >Search
        </button>
        </div>
    );
    }

SearchForm.propTypes = {
    onCitySearch: PropTypes.func.isRequired
}
export default SearchForm;