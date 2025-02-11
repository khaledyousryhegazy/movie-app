import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const searchQueryHandler = () => {
    if (query.length > 2) {
      navigate(`/search/${query}`);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      searchQueryHandler();
    }
  };

  return (
    <div className="relative">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="absolute top-2 left-2 text-gray-500"
      />
      <input
        placeholder="Search "
        type="text"
        className="w-full text-gray-900 py-1 px-7 rounded-md outline-none placeholder:text-gray-900 placeholder:text-sm border"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onBlur={searchQueryHandler}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default SearchBar;
