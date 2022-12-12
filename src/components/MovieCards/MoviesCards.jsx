import React from 'react';
import Styles from './MovieCards.module.scss';
import { useNavigate } from 'react-router-dom';

const MoviesCards = ({movies}) => {
    const navigate = useNavigate();
    const goToSingleMovie = (id) => {
        navigate(`/movie/${id}`)
    };

  return (
    <div className={Styles.moviesContainer}>
        {movies.map(({id, title, poster_path}) => (
            <div className={Styles.movieCard} key={id} onClick={() => goToSingleMovie(id)}>
                <img className={Styles.moviePoster} alt='movie-poster' src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
                <h1 className={Styles.movieTitle}>{title}</h1>
            </div>
        ))}
    </div>
  )
}

export default MoviesCards