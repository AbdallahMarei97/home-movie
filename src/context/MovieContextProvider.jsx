import React, { createContext, useState, useEffect } from 'react';

export const MovieContext = createContext();

const MovieContextProvider = ({children}) => {
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=d8d436ca878e548c5f0a4b2514f1e60b');
            const data = await response.json();
            setMovies(data.results);
        }
        fetchMovies();
    }, []);

    return (
        <MovieContext.Provider value = {{movies, filteredMovies, setFilteredMovies} }>
            {children}
        </MovieContext.Provider>
    );
}

export default MovieContextProvider;