import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addTodo, delTodo, checkTodo} from "../Store/Reducers/TodoSlice";

const Todo = () => {
    const [toggle,setToggle] = useState(false)
    const [value, setValue] = useState("")
    const dispatch = useDispatch()
    const {todos} = useSelector(s => s.todo)
    const handleClick = () => {
        if (value.trim().length !== 0) {
            dispatch(addTodo(value))
            setToggle(false)
        } else {
            setToggle(true)
        }
        setValue("")
    }

    return (
        <div>
            <div className="flex items-baseline justify-center my-10">
                <input value={value} type="search" style={{border: toggle ? value !== "" ? "2px solid green" : "2px solid red" : ""}} onChange={(e) => setValue(e.target.value)} className="block outline-0 w-[400px] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search"/>
                <button onClick={handleClick} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                 <span
                     className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                     creat
                 </span>
                </button>
            </div>
            <div className="flex items-baseline justify-center my-10">
                {
                    todos.map(el => (
                        <div className="flex items-baseline">
                            <h1 className="flex items-center mx-5" style={{textDecorationLine: el.isDone ? "line-through" : "" }}>
                                <input onClick={() => dispatch(checkTodo(el))} type="checkbox"/>
                                <h1 className="text-2xl">{el.title}</h1>
                            </h1>
                            <button onClick={() => dispatch(delTodo(el.id))} className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">delete</button>

                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Todo;