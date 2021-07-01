import React, { useState, useEffect } from "react";
import axios from "axios";
import { movieURL, imgURL, actorsURL } from "../../constants";

const MoviePage = (props) => {
  const id = props.match.params.id;
  console.log(id)
  const [movie, setMovie] = useState({});
  const [actors, setActors]  = useState([])

  useEffect(() => {
    localStorage.getItem('movie', movie)
    const fetchMovie = async() => {
        await axios
        .get(movieURL(id))
        .then((res) => setMovie(res.data))
        .then(()=>  localStorage.setItem('movie', movie)
        );
    }
    const fetchActors = async() => {
        await axios.get(actorsURL(id)).then(res => 
            setActors(res.data.cast.slice(0,6)))
            .then(console.log(actors))

    }
    fetchMovie()
    fetchActors()
  },[]);

  return(
      <div className="movie-page">
          <div className="movie-content">

          <div className='movie-img'>
            <img src={imgURL + movie.poster_path} alt="movie poster path"/>
          </div>
          <div className="movie-title">
              <h1>{movie.title}</h1>
              <h3>{movie.release_date && movie.release_date.substring(0,4)}</h3>
              <h4>{movie.runtime} min</h4>
          </div>
          <div className='movie-overview'>
          {movie.overview}
          </div>
          <div className='movie-meta'>
            <div>
                
            </div>

          </div>
          </div>
      </div>
  ) 
};

export default MoviePage;
