import {createSlice} from "@reduxjs/toolkit";


export const todoSlice = createSlice({
    name: "TODO",
    initialState: {
        todos: []
    },
    reducers: {
        addTodo(state,action) {
            const newTodo = {
                id: new Date().toISOString(),
                title: action.payload,
                isDone: false
            }
            state.todos.push(newTodo)
        },
        delTodo(state,action) {
            state.todos = state.todos.filter(el => el.id !== action.payload)
        },
        checkTodo(state,{payload}) {
            state.todos = state.todos.map(el => el.id === payload.id ? {...el, isDone: !el.isDone} : el)
        }
    }
})


export const {addTodo,checkTodo,delTodo} = todoSlice.actions
export default todoSlice.reducer