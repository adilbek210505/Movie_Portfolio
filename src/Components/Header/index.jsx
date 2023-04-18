import React, {useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchSearchMovieLine, setLan} from "../../Store/Reducers/Movie/ActionCreator/ActionCreators";
import {modeRec} from "../../Store/Reducers/Movie/MovieSlice"

const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [value, setValue] = useState("")
    const [search, setSearch] = useState(false)
    const {mode,searchLineRec} = useSelector(s => s.movies)
    const [state,setState] = useState(false)


    const handleClick = (text) => {
        if (value.trim().length !== 0) {
            setState(true)
            navigate(`/movie/searchMovie/${text}`)
        }
        setValue("")
    }

    const KeyDowns = (e) => {
        switch (e.key) {
            case "Enter" : {
                return  handleClick(value)
            }
        }
    }


    return (
        <div className={`fixed  left-40 top-0 flex justify-between items-center  backdrop-blur-lg w-[80%] border-4  ${mode ? "border-red-600" : "border-blue-500"} p-5 rounded-xl  z-50 my-5`}>
            <div>
                logo
            </div>
            <div className="flex  items-baseline">
                <input value={value} type="search"  onKeyDown={KeyDowns} onChange={(e) => {
                    setValue(e.target.value)
                    setState(false)
                    dispatch(fetchSearchMovieLine(e.target.value))
                }} className={`${search ? "searchBlock" : "searchNone "} delay-300 transition-all block w-full p-3 pl-10 text-sm outline-0 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} placeholder="Search" required/>

                <ul className="absolute top-20  overflow-auto  h-[200px]">
                    {
                        searchLineRec.map(el => el.title).length ?
                        searchLineRec.map(el => (
                            <li className={`border-0 bg-black rounded p-1 my-2 cursor-pointer ${state ? "hidden" : "visible"}`} onClick={() => {
                                handleClick(el.title)
                                setState(true)
                            }}>{el.title}</li>
                        )) : <li></li>
                    }
                </ul>

                <button onClick={() => {
                    setSearch(!search)
                    handleClick(value)
                }} className="text-red-700 mx-3 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">{search ? "search" : "click me"}</button>
            </div>
            <div>
                <NavLink to={"/"}>
                    Main
                </NavLink>
            </div>
            <div>
                <select className="bg-black/50" onChange={(e) => dispatch(setLan(e.target.value))}>
                    <option value="en-US">en</option>
                    <option value="ru-RU">ru</option>
                </select>
            </div>
            <div>
                <button onClick={() => dispatch(modeRec(!mode))} className="w-[100px] rounded h-10 bg-black/30">mode
                </button>
            </div>
        </div>
    );
};

export default Header;