import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const HomeBannerContext = createContext();
const HomeBannerContextProvider = ({ children }) => {
   const [movies, setMovies] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState();

   const baseURL = `https://api.themoviedb.org/3`
   const API_KEY = import.meta.env.VITE_APP_API_KEY;
   const fetchOriginals = `movie/popular?api_key=${API_KEY}&language=es-spa&page=1`;

   useEffect(() => {
      async function load() {
         try {
            const request = await axios(`${baseURL}/${fetchOriginals}`)
            const requestMovie = request.data.results
            setMovies(requestMovie);
            return request
         } catch (error) {
            setError(error)
         } finally { setLoading(false) }
      };

      load()
   }, []);

   return <HomeBannerContext.Provider value={{ loading, movies, error }}>{children}</HomeBannerContext.Provider>;
}

export default HomeBannerContextProvider