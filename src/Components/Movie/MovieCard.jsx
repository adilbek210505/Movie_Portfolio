import React from 'react';
import {NavLink} from "react-router-dom";

const MovieCard = ({el}) => {
    return (
        <div className="m-5 w-[250px]">
            <NavLink to={`/movieDetails/${el.id}`}>
                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt=""/>
            </NavLink>
            <h1 className="text-xl font-bold">{el.title}</h1>
        </div>
    );
};

export default MovieCard;