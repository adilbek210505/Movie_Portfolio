import axios from "axios";
import {APIKEY} from "../../../../API";
import {
    actorsCastRec,
    actorsRec,
    castRec,
    errorRec,
    getMovie,
    getMovieDetails,
    lanRec,
    loaderRec,
    searchLineRec,
    searchRec,
    videoRec
} from "../MovieSlice";

export const fetchMovie = (lan) => {
    return async (dispatch) => {
        try {
            dispatch(loaderRec())
            const url = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=${lan}&page=1`)
            const {data} = await url
            dispatch(getMovie(data.results))
        } catch (e) {
            dispatch(errorRec("Error..."))
        }
    }
}

export const setLan = (lan) => {
    return (dispatch) => {
        dispatch(lanRec(lan))
    }
}


export const fetchMovieDetail = (id,lan) => {
    return async (dispatch) => {
        try {
            dispatch(loaderRec())
            const url = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=${lan}`)
            const {data} = await url
            dispatch(getMovieDetails(data))
        } catch (e) {
            dispatch(errorRec("Error..."))
        }
    }
}


export const fetchSearchMovie = (text,lan) => {
    return async (dispatch) => {
        try {
            dispatch(loaderRec())
            const url = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${text}&language=${lan}`)
            const {data} = await url
            dispatch(searchRec(data.results))
        } catch (e) {
            dispatch(errorRec("Error..."))
        }
    }
}


export const fetchSearchMovieLine = (text) => {
    return async (dispatch) => {
        try {
            dispatch(loaderRec())
            const url = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${text}&language=en-US`)
            const {data} = await url
            dispatch(searchLineRec(data.results))
        } catch (e) {
            dispatch(errorRec("Error..."))
        }
    }
}



export const fetchVideosMovies = (id,lan) => {
    return async (dispatch) => {
        try {
            dispatch(loaderRec())
            const url = await axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${APIKEY}&language=${lan}`)
            const {data} = await url
            dispatch(videoRec(data.results))
        } catch (e) {
            dispatch(errorRec("Error..."))
        }
    }
}


export const fetchCastMovie = (id) => {
    return async (dispatch) => {
        try {
            dispatch(loaderRec())
            const url = await axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${APIKEY}&language=en-US`)
            const {data} = await url
            dispatch(castRec(data.cast))
        } catch (e) {
            dispatch(errorRec("Error..."))
        }
    }
}



export const fetchActorMovie = (id,lan) => {
    return async (dispatch) => {
        try {
            dispatch(loaderRec())
            const url = await axios(`https://api.themoviedb.org/3/person/${id}?api_key=${APIKEY}&language=${lan}`)
            const {data} = await url
            dispatch(actorsRec(data))
        } catch (e) {
            dispatch(errorRec("Error..."))
        }
    }
}



export const fetchActorsCastMovies = (id,lan) => {
    return async (dispatch) => {
        try {
            dispatch(loaderRec())
            const url = await axios(` https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${APIKEY}&language=${lan}`)
            const {data} = await url
            dispatch(actorsCastRec(data.cast))
        } catch (e) {
            dispatch(errorRec("Error..."))
        }
    }
}
