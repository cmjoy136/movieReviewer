import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../../components/SearchBar.jsx";
import { apiURL, imgURL } from "../../constants";

const SearchPage = () => {
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState("");
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    setStatus("idle");
  }, [results]);

  const updateKeyword = (searchTerm) => {
    setKeyword(searchTerm);
  };

  const searchMovies = async (keyword) => {
    setStatus("fetching");
    const data = await axios
      .get(apiURL + `&query=${keyword}&page=1&include_adult=false`)
      .then((res) => res.data);
    setResults(data.results);
    setStatus("movies fetched");
  };

  return (
    <div className="search-page">
      <div className="search-bar-container">
        <SearchBar
          keyword={keyword}
          updateKeyword={updateKeyword}
          searchMovies={searchMovies}
        />
      </div>
      <div className="search-results">
        <ul className="result-list">
          {results.map((movie) => (
            <li>
              <div className="movie-image">
                <a href={`/movies/${movie.id}`}>
                <img src={imgURL + movie.poster_path} alt="movie poster" />
                </a>
              </div>
              <div className="movie-text">
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchPage;
