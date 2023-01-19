import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './MovieCard.scss';

const MovieCard = ({ data }) => {
   
  return (
    <div className="card-item">
        <Link to={`/movie/${data.imdbID}`}>
      <div className="card-top">
        <img src={data.Poster} alt={data.Title} />
      </div>
      <div className="card-bottom">
        <div className="card-info">
          <h4>{data.Title}</h4>
          <p>{data.Year}</p>
 
        </div>
      </div>
      </Link>
    </div>
  );
};

export default MovieCard;
