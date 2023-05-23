import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useMoviesByCategory(category, page = 1) {
	const [movie, setMovie] = useState();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState();
	const [pages, setPages] = useState();
	const [actualPage, setActualPage] = useState(page);

	const baseUrl = `https://api.themoviedb.org/3`;
	const API_KEY = import.meta.env.VITE_APP_API_KEY;
	const url = `movie/${category}?api_key=${API_KEY}&language=es-spa&page=${actualPage}`

	const handleActualPage = (page) => {
		setActualPage(page)
	}

	useEffect(() => {
		async function infoMovie() {
			try {
				const request = await axios(`${baseUrl}/${url}`)
				const requestMovie = request.data.results
				const pagination = request.data.total_pages
				setMovie(requestMovie);
				setPages(pagination);
				return request
			} catch (error) {
				setError(error)
			} finally { setLoading(false) }
		};

		infoMovie()
	}, [category, actualPage]
	);

	return [movie, loading, error, pages, handleActualPage]
}



