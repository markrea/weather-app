import React, { useState } from 'react';
import PropTypes from "prop-types"

const SearchForm = props => {
    const { onCitySearch } = props;
    const [searchText, setSearchText] = useState("")
    const handleInputChange = (event) => {
        setSearchText(event.target.value);

    };
    const handleKeyPress = (event) => {
       if (event.key ==="Enter") {
        const { onAccept } = this.props;
        onAccept && onAccept(event.target.value);
    };
};
    return (
        <form className="search-form">
            <input type="text"
                id="search"
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                value={searchText}
                placeholder="Check your location"
            />
            <button
                type="submit"
                onClick={() => onCitySearch(searchText)}
            >Search
        </button>
        </form>
    );
}

SearchForm.propTypes = {
    onCitySearch: PropTypes.func.isRequired
}
export default SearchForm;