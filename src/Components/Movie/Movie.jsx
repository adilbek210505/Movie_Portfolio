import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import MovieCard from "./MovieCard";
import {fetchMovie} from "../../Store/Reducers/Movie/ActionCreator/ActionCreators";


const Movie = () => {
    const dispatch = useDispatch()
    const {movie, movieDetails, loading, error,language} = useSelector(s => s.movies)
    useEffect(() => {
        dispatch(fetchMovie(language))
    }, [language])


    if (loading) {
        return <h1 className="text-center text-4xl text-red-600">loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>

            <div className="w-full h-full fixed  left-0 top-0 -z-10" style={{background: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movieDetails.backdrop_path}") no-repeat center/cover`}}></div>
            <div className="containers">
                <div className="flex flex-wrap justify-between my-32  bg-black/50">
                    {
                        movie.map(el => <MovieCard key={el.id} el={el}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Movie;