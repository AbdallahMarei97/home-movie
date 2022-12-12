import React, {useContext} from 'react';
import MoviesCards from '../../components/MovieCards/MoviesCards';
import { MovieContext } from '../../context/MovieContextProvider';


const Home = () => {
    const { movies, filteredMovies } = useContext(MovieContext);

  return <MoviesCards movies={filteredMovies.length ? filteredMovies : movies} />
}

export default Home