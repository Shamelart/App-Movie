import { useState, createContext } from "react";
import useMovie from "../Hooks/useMovie";

const initialValue = JSON.parse(localStorage.getItem("playList")) || [];

export const PlayListContext = createContext();
const PlayListContextProvider = ({ children }) => {
    const [list, setList] = useState(initialValue)

    const addMovie = (movie) => {
        const movieInList = list.find(element => element.id === movie.id)
        if (movieInList) {
            //si existe no agregar a la playlists
        } else {
            setList([...list, movie])
            localStorage.setItem("playList", JSON.stringify([...list, movie]));    // agragar
        };      
    }

    const removeMovie = (id) => {
        const newList = list.filter((movie) => movie.id !== id);
        setList(newList);
        localStorage.setItem("playList", JSON.stringify(newList));
    }

    const data = {
        list,
        addMovie,
        removeMovie,
    };

    return <PlayListContext.Provider value={data}>{children}</PlayListContext.Provider>
};

export default PlayListContextProvider;