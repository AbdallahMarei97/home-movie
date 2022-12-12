import React, {useState, useContext} from 'react'
import { MovieContext } from '../../context/MovieContextProvider';
import Styles from './SearchBar.module.scss'

const SearchBar = () => {

    const [searchField, setSearchField] = useState('');
    const { movies, setFilteredMovies } = useContext(MovieContext);

    const handleSearchChange = (e) => {
        setSearchField(e.target.value)
        setFilteredMovies(movies.filter(movie => movie.title.toLowerCase().includes(e.target.value.toLowerCase())));
    };

  return (
    <input onChange={handleSearchChange} value={searchField} type='text' className={Styles.searchMovieInput} />
  )
}

export default SearchBar