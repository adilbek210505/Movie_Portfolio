import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    fetchActorMovie, fetchActorsCastMovies,
} from "../../../Store/Reducers/Movie/ActionCreator/ActionCreators";
import {Link, useParams} from "react-router-dom";
import Slider from "react-slick";

const MoviesActors = () => {
    const dispatch = useDispatch()
    const {movieId} = useParams()
    const {actorsMovie, language,actorsCast} = useSelector(s => s.movies)
    const [view,setView] = useState(true)
    const {name, biography, birthday, place_of_birth, profile_path, popularity} = actorsMovie


    useEffect(() => {
        dispatch(fetchActorMovie(movieId, language))
        dispatch(fetchActorsCastMovies(movieId,language))
    }, [movieId, language])

    console.log(actorsCast)
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    }

    return (
        <>
            <div className="fixed w-full h-full left-0 top-0 blur-lg -z-10 " style={{background: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${profile_path}")  center/cover`}}></div>
            <div className="mt-32 bg-black/50 z-20 relative w-full">
                <div className="flex items-start">
                    <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${profile_path}`} alt=""/>
                    <div className="m-10 bg-black/50 z-30 p-10 absolute right-32 -top-5 h-auto  w-[50%]">
                        <h1 className="text-4xl font-bold">{name}</h1>
                        <h4 className="text-xl my-3 font-bold">{birthday}</h4>
                        <h2 className="text-xl my-3 font-bold">{place_of_birth}</h2>
                        {
                            view ? <p>{biography ? biography.slice(0,400) : ""}</p>
                                : <p>{biography ? biography : ""}</p>
                        }
                        <button style={{display: biography ? "block" : "none"}} className={view ? "text-blue-400" : "text-red-600"} onClick={() => setView(!view)}>{view ? "open" : "close"}</button>
                    </div>
                </div>
            </div>
            <div>
                <Slider {...settings}>
                    {
                        actorsCast.map(el => (
                            <div className="m-10">
                                <Link to={`/movieDetails/${el.id}`}>
                                <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${el.poster_path}`} alt=""/>
                                </Link>
                                <h1>{el.title}</h1>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </>
    );
};

export default MoviesActors;