import React, {useContext} from 'react';
import { useParams } from "react-router-dom";
import { MovieContext } from '../../context/MovieContextProvider';
import Styles from './Movie.module.scss';

const Movie = () => {
    const { id } = useParams();
    const { movies } = useContext(MovieContext);

  return (
    <div>
        {movies.filter(movie => movie.id.toString() === id).map(({id, title, poster_path, release_date, overview}) => (
            <div className={Styles.movieContainer} key={id}>
                <div>
                    <img className={Styles.moviePoster} alt='movie-poster' src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
                </div>
                <div>
                    <h1>{title}</h1>
                    <p>{overview}</p>
                    <p>{release_date}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Movie;