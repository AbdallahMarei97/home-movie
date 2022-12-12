import React from 'react';
import { Route, Routes, } from "react-router-dom";
import Movie from './components/Movie/Movie';
import Navbar from "./components/Navbar/Navbar";
import Home from './pages/Home/Home.jsx';

const App = () => (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/movie/:id" element={<Movie />} />
      </Routes>
    </div>
);

export default App;
