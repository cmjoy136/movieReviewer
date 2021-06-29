import React from "react";

const CarouselItem = (props) => {
  return (
    <li className="carousel-item">
      <div className="carousel-item-img">
        <a className="movie-image-link" href={`/movies/${props.tmdb_id}`}>
        <img src={props.src} alt="" />
        </a>
      </div>
      <div className="carousel-item-text">
        <h3>{props.title}</h3>
        <p>{props.overview}</p>
      </div>
    </li>
  );
};

export default CarouselItem