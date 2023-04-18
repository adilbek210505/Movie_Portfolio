import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    fetchCastMovie,
    fetchMovieDetail,
    fetchVideosMovies
} from "../../../Store/Reducers/Movie/ActionCreator/ActionCreators";
import {Link, useParams} from "react-router-dom";
import Slider from "react-slick";

const MovieDetails = () => {
    const {mainId} = useParams()
    const dispatch = useDispatch()
    const {movieDetails, loading, error, language, videoMovies,castMovie} = useSelector(s => s.movies)

    useEffect(() => {
        dispatch(fetchMovieDetail(mainId, language))
        dispatch(fetchVideosMovies(mainId,language))
        dispatch(fetchCastMovie(mainId))
    }, [mainId, language])

    const {backdrop_path, poster_path, overview, runtime, title} = movieDetails

    if (loading) {
        return <h1 className="text-center text-3xl">loading...</h1>
    }
    if (error) {
        return <h1 className="text-center text-3xl">{error}...</h1>
    }
    const Settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    }

    return (
        <>
            <div className="fixed w-full h-full bg-black/50 -z-10 left-0 top-0"></div>
            <div className="fixed w-full h-full left-0 bg-black/50 top-0 blur-lg -z-20" style={{background: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}")  center/cover`}}></div>
            <div className="flex items-start my-32">
                <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${poster_path}`} alt=""/>
                <div className="m-7">
                    <h1 className="text-3xl font-bold">{title}</h1>
                    <p className="my-3">{Math.round(runtime / 60)}h {Math.round(runtime / 10)}min</p>
                    <span>{overview}</span>
                    <div className="w-[700px] m-7">
                        <Slider {...Settings}>
                            {
                                castMovie.map(el => (
                                    <div className="m-2">
                                        <Link to={`/movie/actor/${el.id}`}>
                                        <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${el.profile_path}`} alt=""/>
                                        </Link>
                                        <h1>{el.name}</h1>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
            <Slider {...settings}>
                {
                    videoMovies.map(el => (
                        <div key={el.id} className="m-1">
                            <iframe key={el.id} width="300" height="170" src={`https://www.youtube.com/embed/${el.key}`}
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                        </div>
                    ))
                }
            </Slider>
        </>

    );
};

export default MovieDetails;