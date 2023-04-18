import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchSearchMovie} from "../../../Store/Reducers/Movie/ActionCreator/ActionCreators";
import {useParams} from "react-router-dom";
import MovieCard from "../MovieCard";

const MovieSearch = () => {
    const {searchMovie, movieDetails, language} = useSelector(s => s.movies)
    const dispatch = useDispatch()
    const {movieName} = useParams()

    useEffect(() => {
        dispatch(fetchSearchMovie(movieName, language))
    }, [movieName, language])

    const state = Math.floor(Math.random() * 10)

    return (
        <>
            {
                searchMovie.length ?
                    <div className="my-32 bg-black/50">
                        <div className="w-full h-full  fixed  left-0 top-0 -z-10" style={{background: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movieDetails.backdrop_path}") no-repeat center/cover`}}></div>
                        <div>
                            <img src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${Object.values(searchMovie.map(el => el.backdrop_path))[state]}`} alt=""/>
                        </div>
                        <div>
                            <div>
                                <div className="flex justify-between flex-wrap">
                                    {
                                        searchMovie.map(el => <MovieCard key={el.id} el={el}/>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        non
                    </div>
            }
        </>
    );
};

export default MovieSearch;