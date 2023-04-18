import React from 'react';
import Movie from "./Components/Movie/Movie";
import {Route, Routes} from "react-router-dom";
import Header from "./Components/Header";
import MovieDetails from "./Components/Movie/Moviedetils";
import {useSelector} from "react-redux";
import MovieSearch from "./Components/Movie/MovieSearch";
import MoviesActors from "./Components/Movie/MoviesActors";


const App = () => {
    const {mode} = useSelector(s => s.movies)

    return (
        <div style={{color: mode ? "red" : "white"}}>
            <div className="containers">
                <Header/>
                <Routes>
                    <Route path={"/"} element={<Movie/>}/>
                    <Route path={"/movieDetails/:mainId"} element={<MovieDetails/>}/>
                    <Route path={"/movie/searchMovie/:movieName"} element={<MovieSearch/>}/>
                    <Route path={"/movie/actor/:movieId"} element={<MoviesActors/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default App;