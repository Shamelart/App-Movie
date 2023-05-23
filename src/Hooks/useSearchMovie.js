import { useEffect, useState } from "react"
import axios from "axios";

const useSearchMovie = () => {
    const [movies, setMovies] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [search, setSearch] = useState();

    const handleChange = (e) => {
        setSearch(e.target.value);
    }
   
    const baseURL = `https://api.themoviedb.org/3`
    const API_KEY = import.meta.env.VITE_APP_API_KEY;
    const url = `/search/movie?api_key=${API_KEY}&language=es-ES&query=${search}&page=1`
    useEffect(() => {
        if (!search) return;

        async function infoSearchMovie() {
            try {
                const request = await axios(`${baseURL}/${url}`)
                const requestMovie = request.data.results
                setMovies(requestMovie);
                return request

            } catch (error) {
                setError(error)
            } finally { setLoading(false) }
        };

        infoSearchMovie()
    }, [search]
    )
    return { movies, loading, error, handleChange };
};

export default useSearchMovie;