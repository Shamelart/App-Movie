import * as React from 'react';
import TextField from '@mui/material/TextField';
import useSearchMovie from '../Hooks/useSearchMovie';
import { Container, Box, Grid } from '@mui/material';
import CardMovie from './CardMovie';

export default function Search() {
  const { movies, loading, error, handleChange } = useSearchMovie();

  return (
    <Container maxWidth="false" sx={{ pt: 13, width: 1, minHeight: "90vh" }}>
      <Box sx={{ width: "28%", height: "50px", backgroundColor: "whitesmoke" }}>
        <TextField onChange={(e) => handleChange(e)}
          fullWidth label="BUSCAR" variant="outlined"
          id="fullWidth" sx={{
            color: 'white',
            borderRadius: '10px'
          }} />
      </Box>
      <Grid
        container
        spacing={1}
        sx={{ paddingLeft: "5%", width: "100%", display: "flex", flexWrap: "wrap" }}
      >
        {loading ? (
          <></>
        ) : (
          movies.map((movie) => (
            <Grid item key={movie.id}>
              <CardMovie
                id={movie.id}
                title={movie.title}
                imagen={movie.backdrop_path}
                puntuacion={movie.overview}
                estreno={movie.release_date}
              />
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
}
