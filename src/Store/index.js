import {configureStore} from "@reduxjs/toolkit";
import TodoReducer from "../Store/Reducers/TodoSlice"
import MovieReducer  from "./Reducers/Movie/MovieSlice";


export const store = configureStore({
    reducer: {
        todo: TodoReducer,
        movies: MovieReducer,
    }
})