import { useEffect, useState } from "react"
import axios from "axios";

const useVideo = (id) => {
    const [video, setVideo] = useState();
    const [load, setLoad] = useState(true);
    const [erro, setErro] = useState();

    const baseURL = `https://api.themoviedb.org/3`
    const API_KEY = import.meta.env.VITE_APP_API_KEY;
    const url = `movie/${id}/videos?api_key=${API_KEY}`
    useEffect(() => {
        async function infoMovie() {
            try {
                const request = await axios(`${baseURL}/${url}`)
                const requestMovie = request.data
                setVideo(requestMovie);
                return request
            } catch (error) {
                setErro(error)
            } finally { setLoad(false) }
           
        };

        infoMovie()
    }, []
    )
    
    return { video, load, erro };
};

export default useVideo;