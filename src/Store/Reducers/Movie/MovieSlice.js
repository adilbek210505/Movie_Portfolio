import {createSlice} from "@reduxjs/toolkit";


export const movieSlice = createSlice({
    name: "MOVIE",
    initialState: {
        movie: [],
        movieDetails: {},
        loading: false,
        error: "",
        language: "en-US",
        mode: false,
        searchMovie: [],
        searchLineRec: [],
        videoMovies: [],
        castMovie: [],
        actorsMovie: {},
        actorsCast: [],
    },
    reducers: {
        loaderRec(state) {
            state.loading = true
        },
        getMovie(state, action) {
            state.loading = false
            state.movie = [...action.payload]
        },
        getMovieDetails(state,action) {
            state.loading = false
            state.movieDetails = {...action.payload}
        },
        errorRec(state, action) {
            state.loading = false
            state.error = action.payload
        },
        lanRec(state,action) {
            state.language = action.payload
        },
        modeRec(state,action) {
            state.mode = action.payload
        },
        searchRec(state,action) {
            state.loading = false
            state.searchMovie = action.payload
        },
        searchLineRec(state,action) {
            state.loading = false
            state.searchLineRec = action.payload
        },
        videoRec(state,action) {
            state.loading = false
            state.videoMovies = action.payload
        },
        castRec(state,action) {
            state.loading = false
            state.castMovie = action.payload
        },
        actorsRec(state,action) {
            state.loading = false
            state.actorsMovie = action.payload
        },
        actorsCastRec(state,action) {
            state.loading = false
            state.actorsCast = action.payload
        }
    }
})


export const {getMovie, errorRec, loaderRec,getMovieDetails, lanRec, modeRec, searchRec, searchLineRec, videoRec, castRec, actorsRec, actorsCastRec} = movieSlice.actions
export default movieSlice.reducer