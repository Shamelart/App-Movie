import { useParams, Link } from 'react-router-dom';
import useMoviesByCategory from '../Hooks/useMoviesByCategory';
import { Grid, Pagination } from '@mui/material'
import CardMovie from './CardMovie';
import Paginations from './Paginations'

export default function MoviesByCategory() {
  const { nameCategory } = useParams();
  const [movies, loading, error, pages, handleActualPage] = useMoviesByCategory(nameCategory);

  if (loading) {
    return <div>Cargando...</div>
  }

  return (
    <Grid container spacing={1} sx={{  width: "100%", display: "flex", justifyContent: "center", marginTop: "10%" }} >
      {movies.map((movie) => (
        <Grid item key={movie.id}>
          <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none" }} >
            <CardMovie
              id={movie.id}
              imagen={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
              title={movie.title}
              puntuacion={movie.vote_average}
              estreno={movie.release_date}
              ratin={movie.vote_average}
           
            />
          </Link>
        </Grid>
      ))}
      <Paginations handleActualPage={handleActualPage} totalPage={pages} />
    </Grid>
  );
}