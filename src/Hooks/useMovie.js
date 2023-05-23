import { useEffect, useState } from "react"
import axios from "axios";

const useMovie = (id) => {
    const [movie, setMovie] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    const baseURL = `https://api.themoviedb.org/3`
    const API_KEY = import.meta.env.VITE_APP_API_KEY;
    const url = `/movie/${id}?api_key=${API_KEY}&language=es-spa`
    useEffect(() => {
        async function infoMovie() {
            try {
                const request = await axios(`${baseURL}/${url}`)
                const requestMovie = request.data
                setMovie(requestMovie);
                return request
                
            } catch (error) {
                setError(error)
            } finally { setLoading(false) }
        };

        infoMovie()
    }, []
    )
    return { movie, loading, error };
};

export default useMovie;