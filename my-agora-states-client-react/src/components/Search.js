import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
const Search = () => {
    const [searchInput, setSeacrchInput] = useState('');

    useEffect(()=> {
        setSeacrchInput(searchInput);
    },[searchInput]);

    const handleSearchInput = (e) => {
        console.log(e.target.value);
        setSeacrchInput(e.target.value);
    }
    const handleSearch = (e) => {
        console.log('enter 키 ');
    }

    return(
        <div className="search_wrapper">
        <div className="search_container">
          <label className="search_container_label">
            <button className="search_icon" onClick={handleSearch} >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>

            <input 
                value={searchInput} 
                onChange={(e) => handleSearchInput(e)} 
                onKeyUp={(e) =>   e.key === 'Enter' ? handleSearch(e) : null }
                type="text" placeholder="search" id="input_search_text" />
          </label>
        </div>

      </div>
    );
};

export default Search;